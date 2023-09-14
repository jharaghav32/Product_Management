import React,{useContext,useState} from 'react'
import { MdClose } from "react-icons/md";
import { Context } from '../../util/context.js';
import WishItem from './WishItem/WishItem';
const WishList = ({showwishlist,setshowwishlist}) => {
    const {wishItems,setShowWish}=useContext(Context)
    
  return (
    <div className="cart-panel">
            <div
                className="opac-layer"
                onClick={() => setShowWish(false)}
            ></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Your WishList</span>
                    <span
                        className="close-btn"
                        onClick={() => setShowWish(false)}
                    >
                        <MdClose onClick={()=>setshowwishlist(!showwishlist)} className="close-btn" />
                        {/* <span className="text">close</span> */}
                    </span>
                </div>

                {!wishItems.length && (
                    <div className="empty-cart">
                      
                        <span>Empty WishList.</span>
                       
                    </div>
                )}

                {!!wishItems.length && (
                    <>
                        <WishItem />
                        {/* <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">
                                    &#8377;{cartSubTotal}
                                </span>
                            </div>
                            <div className="button">
                                <button
                                    className="checkout-cta"
                                    onClick={handlePayment}
                                >
                                    Checkout
                                    {loading && <h1>Loading...</h1>}
                                </button>
                            </div>
                        </div> */}
                    </>
                )}
            </div>
        </div>
  )
}

export default WishList