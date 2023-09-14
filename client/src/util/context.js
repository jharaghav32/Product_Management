import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [showCart, setShowCart] = useState(false);
    const[showWish, setShowWish] = useState(false); // for wishlist
    const [cartItems, setCartItems] = useState([]);
    const [wishItems, setWishItems] = useState([]); // for wishlist
    const[wishCount, setWishCount] = useState(0); // for wishlist count
    const [cartCount, setCartCount] = useState(0);
    const [isWish, setIsWish] = useState(false); // for wishlist
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        let count = 0;
        cartItems?.map((item) => (count += item.attributes.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems.map(
            (item) =>
                (subTotal += item.attributes.price * item.attributes.quantity)
        );
        setCartSubTotal(subTotal);
    }, [cartItems]);
    const handleAddToWishList = (product) => {
        console.log(product,'added to wishlist');
        let items = [...wishItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (index !== -1) {
            setIsWish(false)
            items = items?.filter((p) => p.id !== product?.id);
        } else {
            setIsWish(true)
            items = [...items, product];
        }
        setWishItems(items);
        setWishCount(items.length)
    };
    
    const handleAddToCart = (product, quantity) => {
        console.log(product,'added to cart');
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
    };

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items?.filter((p) => p.id !== product?.id);
        setCartItems(items);
    };

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    };

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                categories,
                setCategories,
                cartItems,
                setCartItems,
                handleAddToCart,
                cartCount,
                handleRemoveFromCart,
                showCart,
                setShowCart,
                handleCartProductQuantity,
                cartSubTotal,
                wishItems,
                setWishItems,
                handleAddToWishList,
                wishCount,
                setWishCount,
                showWish,
                setShowWish,
                isWish,
                setIsWish
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;