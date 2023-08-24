import { useState, useEffect } from "react";
import {SWIGGY_MENU_API_URL} from "../utils/constant";
import { useParams } from "react-router-dom";

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
        const menuData = await fetch(SWIGGY_MENU_API_URL + resId);//fetching menu data
        const jsonMenuData = await menuData.json();//converting fetched data to json
        const restaurantData = jsonMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        
        //set restaurant
        setRestaurant(restaurantData);
        
        // Set menu item data
        const menuItemsData = jsonMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(item => item.card.card.itemCards[0].card.info.name);
        console.log('menuItemsData >> '+ menuItemsData);
        
        // console.log('menu >>> ', jsonMenuData);
        // console.log('Data >>> ', jsonMenuData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
        console.log('Data >>> ', jsonMenuData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards[0].card.info.name);
        
       

    }
    
    return ( 
    <div>
        <h1>Menu</h1>
        {
            // resMenu.map(item => (
            //     <p>{item}</p>
            // ))
        }
    </div>)

}

export default RestaurantMenu;