import { useState, useEffect } from "react";
import {SWIGGY_MENU_API_URL} from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {resId} = useParams();//call useParam to get value of restaurant Id(resId) using object destructuring.
    const [restaurant, setRestaurant] = useState(null);//holds a restaurant details
    const [menuItems, setMenuItems] = useState(null);//A resturant's menu items.

    //calls only once after the initial component render
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    //get restaurant details
    const getRestaurantInfo = async () => {
        const restaurantData = await fetch(SWIGGY_MENU_API_URL + resId);//fetching menu data
        const jsonResData = await restaurantData.json();//converting fetched data to json
        
        //set restaurant
        setRestaurant(jsonResData.data);

        // const restaurantData = jsonResData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        
        
        
        // Set menu item data
        // const menuItemsData = jsonMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(item => item.card.card.itemCards[0].card.info.name);
        // console.log('menuItemsData >> '+ menuItemsData);
        
        // console.log('menu >>> ', jsonMenuData);
        // console.log('Data >>> ', jsonMenuData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
        // console.log('Data >>> ', jsonMenuData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards[0].card.info.name);

    }

    if(restaurant === null) return <Shimmer/>;

    //destructuring the restaurant info
    const {name, cuisines, costForTwoMessage} = restaurant?.cards[0]?.card?.card?.info;

    return ( 
    <div>
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
    </div>)

}

export default RestaurantMenu;