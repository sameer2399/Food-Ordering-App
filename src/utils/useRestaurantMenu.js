
import { useState, useEffect } from 'react';
import { MENU_API } from './constants';


const useRestaurantMenu = (resId) => {

    
    console.log(resId);
    const [resInfo, setResInfo] = useState(null);


    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(MENU_API+ resId);
        const json = await data.json();
    
        console.log(json);
    
        setResInfo(json.data);
    }

    console.log(resInfo);
    return resInfo;


}

export default useRestaurantMenu;