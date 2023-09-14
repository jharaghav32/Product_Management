import React, { useContext } from "react";
 import { Context } from "../../../util/context.js";
import { MdClose } from "react-icons/md";

import "./CartItem.scss";
const CartItem = () => {
    const baseurl = 'http://localhost:1337'
     const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
       useContext(Context);
       if(!cartItems) return;
    console.log("this is cart", cartItems);
    

    return (
        <div className="cart-products">
            {cartItems?.map((item) => (
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
                        <MdClose
                            className="close-btn"
                             onClick={() => handleRemoveFromCart(item)}
                        />
                        <div className="quantity-buttons">
                            <span
                                onClick={() =>
                                    handleCartProductQuantity("dec", item)
                                }
                            >
                                -
                            </span>
                            <span>{item.attributes.quantity}</span>
                            <span
                                onClick={() =>
                                    handleCartProductQuantity("inc", item)
                                }
                            >
                                +
                            </span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>x</span>
                            <span className="highlight">
                                <span>&#8377;</span>
                               { item.attributes.price }
                            </span>
                        </div>
                    </div>
                </div>
             ))} 
        </div>
    );
};

export default CartItem;