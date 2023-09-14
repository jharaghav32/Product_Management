import React, { useContext,useState } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../util/context.js";
import CartItem from "./CartItem/CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../util/api.js";

import "./Cart.scss";

const Cart = ({showcart,setshowcart}) => {
    const { cartItems, setShowCart, cartSubTotal } = useContext(Context);
    const[loading,setloading]=useState(false)

    const stripePromise = loadStripe(
        'pk_test_51NU66USHcDE9r1bPC7SptckeelptbbVZe1fr537B0dfwYVDMyCxmHqJDu9E1YdjdUJ6jpRj7r0sGoFnqaTWxix9p00E9R5vEqV'
    );

    const handlePayment = async () => {
        try {
            setloading(true)
            const stripe = await stripePromise;
            const res = await makePaymentRequest("/api/orders", {
                email: localStorage.getItem("email"),
                products: cartItems,
            });
            console.log('this is id',res?.stripeSession?.id);
          const check=  await stripe.redirectToCheckout({
                sessionId: res?.stripeSession?.id,
            });
            console.log('after payment',check)
        } catch (err) {
            setloading(false)
            console.log(err);
        }
    };

    return (
        <div className="cart-panel">
            <div
                className="opac-layer"
                onClick={() => setShowCart(false)}
            ></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Your Cart</span>
                    <span
                        className="close-btn"
                        onClick={() => setShowCart(false)}
                    >
                        <MdClose onClick={()=>setshowcart(!showcart)} className="close-btn" />
                        {/* <span className="text">close</span> */}
                    </span>
                </div>

                {!cartItems.length && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={() => {}}>
                            RETURN TO SHOP
                        </button>
                    </div>
                )}

                {!!cartItems.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
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
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;