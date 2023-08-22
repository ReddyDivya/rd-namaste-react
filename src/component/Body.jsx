import RestaurantCard from "./RestaurantCard";
import {SWIGGY_API_URL} from "../utils/constant";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

//2. Body Component
const Body = () => {
    //Local state variable = Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    //useEffect(2 params) - callback function, dependencies
    useEffect(() => {
        getRestaurants();
    }, []);

    //get restaurants list
    const getRestaurants = async () => {
        //making swiggy api call
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        // console.log(json);
        // console.log(json?.data?.cards[1]?.card?.card.imageGridCards?.info);
        console.log(json?.data?.cards[2]?.data?.data?.cards);
        // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    };//getRestaurants

    return (listOfRestaurants.length === 0 ? <Shimmer/> : <div className="body">
        <button className="res-filter" onClick={() => 
            {
                const filteredList = listOfRestaurants.filter((restaurants) => restaurants.data.avgRating > 4);
                setListOfRestaurants(filteredList);//updating the state
            }}>
            Top Rated Restaurants
        </button>
        <button className="res-filter" onClick={() => 
            {
                const filteredList = listOfRestaurants.filter((restaurants) => restaurants.data.avgRating < 4);
                setListOfRestaurants(filteredList);//updating the state
            }}>
            Low Rated Restaurants
        </button>
        <div className="res-container">
            {
                listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
    )
}

export default Body;