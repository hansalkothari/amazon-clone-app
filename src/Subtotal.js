import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvieder.js"
import { getBasketTotal } from "./Reducer.js";

function Subtotal() {
    const [{ basket } , dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                
          
                decimalScale ={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator = {true}
                prefix ={"S"}
            />
            

            <button> proceed to Checkout </button>
        </div>
    )
}


export default Subtotal
