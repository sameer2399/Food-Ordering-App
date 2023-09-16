import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

import { useState } from "react";

const Body = () => {

    //Local State Variable - superpowerfull
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
               <button 
                className="filter-btn" 
                onClick={() => {
                    //filter logic here
                    const filteredList = resList.filter(
                        (res) => res.info.avgRating > 4
                    );
                        setListOfRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants
               </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}      
            </div>
        </div>
    );
};

export default Body;