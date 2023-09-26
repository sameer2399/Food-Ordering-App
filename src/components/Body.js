import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { resList } from "../utils/mockData";
import { Link } from "react-router-dom";

import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {

    //Local State Variable - superpowerfull
    const [listOfRestaurants, setListOfRestaurants] = useState(null);

    const [filteredRestaurants, setFilteredRestaurants] = useState(null);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


    const {loggedInUser, setUserName} = useContext(UserContext)
    console.log(listOfRestaurants);

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
            <div className="flex">
                <div className="Search m-4 p-4">
                    <input type="text" className="border border-solid border-black" name="" id="" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" 
                    onClick ={() => {
                        const searchedRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurants(searchedRestaurant);
                    }}>Search</button>
                </div>

                <div className="filter m-4 p-4 flex items-center">
                <button 
                className="px-4 py-2 bg-gray-100 rounded-lg" 
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
               
                <div className="m-6 p-4">
                    <label>User Name: </label>
                    <input className="p-2 border-black" type="text" value={loggedInUser} onChange={(e) => {
                        setUserName(e.target.value);
                    }}/>
                </div>
            </div>

            <div className="flex flex-wrap">
                {filteredRestaurants?.map((restaurant) => (
                        <Link 
                            key={restaurant.info.id} 
                            to={"/restaurants/"+restaurant.info.id}>
                               { restaurant.info.promoted ? (
                                    <RestaurantCardPromoted resData={restaurant} /> ) : (
                                <RestaurantCard resData={restaurant} />
                                )}
                        
                        
                        </Link>
                ))}      
            </div>
        </div>
    );
};

export default Body;