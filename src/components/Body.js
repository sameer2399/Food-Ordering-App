import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { resList } from "../utils/mockData";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Body = () => {

    //Local State Variable - superpowerfull
    const [listOfRestaurants, setListOfRestaurants] = useState(null);

    const [filteredRestaurants, setFilteredRestaurants] = useState(null);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=13.0215821&lng=77.6604131");
        const json = await data.json();
         
                setListOfRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
                setFilteredRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
            
        
        // setListOfRestaurants(resList);
        // setFilteredRestaurants(resList);
        console.log(json);
    };

    const onlineStatus = useOnlineStatus();
   
    if (onlineStatus === false) {
        return (
            <div className="body">
                <h1>Looks like you are offline !! Please check your internet connection</h1>
            </div>
        );
    }


    return !listOfRestaurants ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="Search">
                    <input type="text" className="search-box" name="" id="" value={searchText} onChange={(e) => {
                        //update the search text
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick ={() => {
                        //filter the restaurant card and update the UI
                        //search
                        const searchedRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurants(searchedRestaurant);
                    }}>Search</button>
                </div>
               <button 
                className="filter-btn" 
                onClick={() => {
                    //filter logic here
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                        setFilteredRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants
               </button>
            </div>
            <div className="res-container">
                {filteredRestaurants?.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                ))}      
            </div>
        </div>
    );
};

export default Body;