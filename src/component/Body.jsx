import RestaurantCard from "./RestaurantCard";
import {restaurantList} from "../utils/mockData";

//2. Body Component
const Body = () => {
    return <div className="body">
        <div className="res-search">
            Search
        </div>
        <div className="res-container">
            {
                restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
}

export default Body;