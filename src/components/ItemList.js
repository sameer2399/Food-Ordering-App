import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    console.log(items);
    return (
        <div>
            {items.map((item) => (
                    
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
                                <button className="p-2 bg-white shadow-lg m-auto rounded-lg"> Add + </button>
                            </div>
                                <img src={CDN_URL + item.card.info.imageId} />
                        </div>

                    </div>
            ))}
        </div>
    )
  }
  
  export default ItemList;