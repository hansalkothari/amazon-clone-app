import React from 'react';
import { useStateValue } from "./StateProvieder";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
 import Subtotal from './Subtotal.js';
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const[{basket}] = useStateValue();
    return (
        <div className ="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src=""
                alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>your shopping basket is empty</h2>
                    </div>
                ) : (
                    <div className="checkout__title">
                        <h2>your shopping basket is empty</h2>
                        {/* list out all the checkout products */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />  
                        ))}
                    </div>
                )}

            </div>
            {basket.length > 0 &&(
                <div className = "checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout 
