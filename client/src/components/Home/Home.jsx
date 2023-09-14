import "./Home.scss";
import { useEffect,useContext } from "react";
import { fetchDataFromApi } from "../../util/api";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import BannerImg from "../../../src/assets/banner-img.png";
import { Context } from "../../util/context.js";
import Header from "../Header/Header";
const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
    fetchDataFromApi("/api/categories?populate=*").then((res)=>{
        setCategories(res);
    })
        fetchDataFromApi("/api/products?populate=*").then((res)=>{
            console.log(res)  
            setProducts(res);
        }
        )
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    }, []);
    
    const {categories, setCategories,products,setProducts} = useContext(Context);
    return (
        <div>
            
            <Banner />
            <Products products={products}/>
        </div>
    )
};

export default Home;
