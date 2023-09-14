import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { fetchDataFromApi } from "../../util/api";
import "./Category.scss";
import SingleCategory from "./singleCategory/SingleCategory";

const Category = () => {
    const[categories,setCategories]=useState([])
    useEffect(() => {
        fetchDataFromApi("/api/categories?populate=*").then((res)=>{
            setCategories(res?.data);
        }
        )
    }, []);
    const navigate = useNavigate();
    console.log('checking',categories)
    return (
       
            <div className=" flex flex-col ">
                {categories?.map((item) => (
                   <div className="flex flex-col ">
                    <SingleCategory id={item.id} />
                   </div>
                ))}
            </div>
        
    );
};

export default Category;