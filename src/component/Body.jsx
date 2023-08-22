import RestaurantCard from "./RestaurantCard";
import {SWIGGY_API_URL} from "../utils/constant";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

//2. Body Component
const Body = () => {
    //Local state variable = Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    //useEffect(2 params) - callback function, dependencies
    useEffect(() => {
        getRestaurants();
    }, []);

    //get restaurants list
    const getRestaurants = async () => {
        //making swiggy api call
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };//getRestaurants

    return listOfRestaurants.length === 0 ? (<Shimmer/>) : ( <div className="body">
        <button className="res-filter" onClick={() => 
            {
                const filteredList = listOfRestaurants.filter((restaurants) => restaurants.info.avgRating > 4);
                setFilteredRestaurants(filteredList);//updating the state
            }}>
            Top Rated Restaurants
        </button>
        <div className="res-container">
            {
                filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
    )
}

export default Body;