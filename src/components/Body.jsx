import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {useState, useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from '../utils/UserContext';

//2. Body Component
const Body = () => {
    //Local state variable = Super powerful variable
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); //Filtered Restaurants
    const [searchRestaurant, setSearchRestaurant] = useState("");//Search Restaurants
    const onlineStatus = useOnlineStatus();//fetching online status through custom hook.
    const listOfRestaurants = useRestaurantList();//fetching restaurants list through custom hook.
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);//Higher Order Component

    //fetching data from context
    const {loggedInUser, setUserName} = useContext(UserContext);

    //check if there's internet or not & show message.
    if(onlineStatus === false)
        return <h1>Looks your offline. Check your internet connection.</h1>

    if(listOfRestaurants.length === 0)
        return <Shimmer/>

    return ( 
    <>
        <section>
            {/* <input data-testid="searchInput" className="border-2 border-slate-400 m-4 p-1" type="text" value={searchRestaurant}
                onChange={(e) => {
                    setSearchRestaurant(e.target.value);
                }}
            /> */}

            <input
                type="text"
                data-testid="searchInput"
                className="border border-solid border-black"
                value={searchRestaurant}
                onChange={(e) => {
                    setSearchRestaurant(e.target.value);
                }}
            />
            <button
                className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={() => {
                    // Filter the restraunt cards and update the UI
                    const filteredRestaurant = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
                    );

                    setFilteredRestaurants(filteredRestaurant);
                }}
            >
                Search
           </button>
            <button className="bg-teal-700 text-slate-200 p-2 rounded hover:bg-sky-950" onClick={() => 
                {
                    const filteredList = listOfRestaurants.filter((restaurants) => restaurants.info.avgRating > 4);
                    setFilteredRestaurants(filteredList);//updating the state
                    console.log(filteredRestaurants.length);
                }}>
                Top Rated
            </button>
            <label className="font-bold mx-4">UserName :</label>
            <input className="border-2 border-slate-400 m-4 p-1" type="text" 
                value={loggedInUser}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
            />
        </section>
       
        <section className="flex flex-wrap">
            {
                (filteredRestaurants.length > 0) ?
                //showing only filtered restaurants
                filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))
                :
                //showing all the restaurants
                listOfRestaurants.map((restaurant) => (
                    <Link to={"/restaurant/" + restaurant.info.id} 
                        key={restaurant.info.id}>
                        { 
                            restaurant.info.promoted ?
                            <RestaurantCardPromoted resData={restaurant}/> :
                            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                        }
                    </Link>
                ))
            }
        </section>
    </>
    )
}

export default Body;