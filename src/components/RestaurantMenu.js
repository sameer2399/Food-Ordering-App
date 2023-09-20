import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';


const RestaurantMenu = () => {

const [resInfo, setResInfo] = useState([]);
const { resId }  = useParams(); 

useEffect(() => {
    fetchMenu();
}, []);

const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0215821&lng=77.6604131&restaurantId="+ resId + "&submitAction=ENTER");
    const json = await data.json();

    console.log(json);

    setResInfo(json.data);
}

if(resInfo.length === 0) {
    return <Shimmer />
}

const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[0]?.card?.card?.info;

const { itemCards } = resInfo?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className='menu'>
        <h1>{name}</h1>
        <p>
            {cuisines.join(", ")} -   
            {costForTwoMessage}
        </p>
        <ul>
            {itemCards.map((item) => (
                 <li key={item.card.info.id}>
                    {item.card.info.name} - Rs {item.card.info.price/100}
                </li>))}
        </ul>
    </div>
  );
};

export default RestaurantMenu;
