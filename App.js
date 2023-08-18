import React from 'react';
import { createRoot } from 'react-dom/client';
/*
    1. Header
        - Logo
        - Nav Items
    2. Body
        - Search
        - Restaurant Card
    3. Footer
        - Copyright
        - Links
        - Address
        - Contact
*/

//1. Header Component
const Header = () => {
    return <div className="header">
        <div>
            <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}//Header

//2. Body Component
const Body = () => {
    return <div className="res-container">
        <div className="res-search">
            Search
        </div>
        <div className="res-cards">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    </div>
}

//3. Restaurant Card
const RestaurantCard = () => {
    return <div className="res-card">
        <img className="res-card-image" src="https://b.zmtcdn.com/data/dish_photos/06e/c7315872f57926bc2736f20c0e81206e.jpg?fit=around|130:130&crop=130:130;*,*"/>
        <h3>TCS The Cake Story</h3>
        <h4>Chocolate Black Forest Cake</h4>
        <span>⭐⭐⭐⭐</span>
        <span>₹399</span>
    </div>
}

const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}
const root = createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
