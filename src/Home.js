import React from 'react';
import './Home.css';
import Product from './Product.js'
 

function Home() {
    return (
        <div className="home">
            <img 
                src ="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                className ="home__image"
                alt=""
            />

            <div className="homw__row">
                <Product 
                    id = "12321341"
                    title = "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price = {14}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                    
                />
                <Product 
                    id = "12321342"
                    title = "PlayStation 4 Slim 1TB Console - Only On PlayStation Bundle"
                    price = {409}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/814Cwlg1JaL._AC_UY218_.jpg"
                    
                />
            </div>

            <div className="homw__row">
                <Product 
                    id = "12321343"
                    title = "God of War 3 Remastered - PlayStation 4"
                    price = {14}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/91Ec4DX538L._AC_UY218_.jpg"
                    
                />
                <Product 
                    id = "12321344"
                    title = "LG Electronics 24LJ4540-WU 24-Inch 720p LED HD TV (2017, not Smart TV)"
                    price = {126}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/81A72yu35kL._AC_UY218_.jpg"
                    
                />
                <Product 
                    id = "12321345"
                    title = "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
                    price = {2000}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg"
                    
                />
            </div>                
            <div className="homw__row">
                <Product 
                    id = "12321346"
                    title = "[2020 Newest Version] Xbox One Wireless Controller, W&O Wireless PC Gamepad with 2.4GHZ Wireless Adapter, Compatible with Xbox One/One S/One X/P3 Host/Windows 7/8/10 (Blue)"
                    price = {40}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/61YHco6hK0L._AC_UY218_.jpg"
                    
                />
                
            </div>
            
        </div>
    )
}
export default Home;
