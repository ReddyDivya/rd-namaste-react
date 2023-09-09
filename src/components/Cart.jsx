// import React, {useState} from 'react';
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import {clearCart} from "../utils/redux/cartSlice";
import {Link} from "react-router-dom";
import receipe from "../components/assets/receipe.jpg";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    //clear cart
    const handleClearCart = () => {
        //dispatch clearCart action from cartSlice
        dispatch(clearCart());
    }

    return (<div className="w-9/12 mx-auto m-2">
        <h1 className="text-center text-2xl font-bold">Cart</h1>
        <div className="m-6 items-center">
            {
                cartItems?.length === 0 ? 
                <>
                    <img src={receipe} className=""/>
                    <h1 className="text-center font-bold">Your cart is empty.</h1>
                    <h2 className="text-center">You can go to home page to view more restaurants.</h2>
                </>
                : <ItemList items={cartItems}/>
            }
        </div>
        <div className="m-10 text-center">
            {
                cartItems?.length !== 0 
                ? <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white rounded-lg">Clear Cart</button>
                : <Link to="/" className="p-2 m-2 bg-teal-700 text-white rounded-lg">See Restaurants near you</Link>
            }
        </div>
    </div>);
}

export default Cart;