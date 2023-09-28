import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();


    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        console.log(item)
    }

    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);
    console.log(items);
    return (
        <div>
            {items.map((item) => {
                const isInCart = cartItems.some((cartItem) => cartItem.card.info.id === item.card.info.id);
                return (
                    <div key={item.card.info.id} 
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                    >
                       
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="font-bold">{item.card.info.name}</span>
                                <span className="font-bold"> -₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                            </div>
                        
                            <p className="text-sm">{item.card.info.description}</p>
                        </div>

                        <div className="w-3/12 h-auto p-4">
                            <div className="font-bold absolute mx-16">
                                {isInCart ?  <button className="p-2 bg-white shadow-lg m-auto rounded-lg" onClick={() => handleRemoveItem(item)}> Remove - </button> 
                                : 
                                <button className="p-2 bg-white shadow-lg m-auto rounded-lg" onClick={() => handleAddItem(item)}> Add + </button>}
                            </div>
                                <img src={CDN_URL + item.card.info.imageId} />
                        </div>

                    </div>
                )
            }
                    
                   
            )}
        </div>
    )
  }
  
  export default ItemList;