import React, { useContext } from "react";
 import { Context } from "../../../util/context.js";
import { MdClose } from "react-icons/md";


const WishItem = () => {
    console.log('I am here guys')
    const baseurl = 'http://localhost:1337'
     const { wishItems,  handleAddToWishList } =
       useContext(Context);
    //    if(!WishItems) return;
    console.log("this is wishItems", wishItems);
    

    return (
        <div className="cart-products">
            {wishItems?.map((item) => (
                <a href={`/product/${item.id}`}>
                <div
                className="search-result-item"
                //  key={item.id}
                onClick={() => {}}
                >
                    <div className="image-container">
                        <img
                            src={
                                baseurl +
                                item?.attributes?.img?.data?.attributes?.url
                            }
                        />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        
                      
                        <div className="text">
    
                            <span className="highlight">
                                <span>&#8377;</span>
                               { item.attributes.price }
                            </span>
                        </div>
                    </div>
                </div>
                </a>
             ))} 
        </div>
    );
};

export default WishItem;