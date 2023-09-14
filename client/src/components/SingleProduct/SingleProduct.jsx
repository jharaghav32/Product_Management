import Product from "../Products/Product/Product";
import { Context } from "../../util/context.js";
import { useState,useContext } from "react";
import {GrAdd} from 'react-icons/gr'
import {HiMinus} from 'react-icons/hi'
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch.js";
import RelatedProducts from "../SingleProduct/RelatedProducts/RelatedProducts";
import "./SingleProduct.scss";
const SingleProduct = () => {
  const[expand,setExpand] = useState(false);
  const handleExpand=(e)=>{
    setExpand(!expand);
  }
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleAddToCart , handleAddToWishList,isWish,setIsWish} = useContext(Context);
  const { data } =  useFetch(`/api/products/${id}?populate=*`);
  console.log('single product',data )
  
  const decrement = () => {
      setQuantity((prevState) => {
          if (prevState === 1) return 1;
          return prevState - 1;
      });
  };
  const increment = () => {
      setQuantity((prevState) => prevState + 1);
  };
  const baseurl = 'http://localhost:1337'
  const product = data?.data?.attributes;
  console.log('this is singles ',product?.categories?.data[0]?.id)
  console.log('this is iswish',isWish)
   return(
    <>
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="  flex flex-row">
      {/* side on product  */}
      <div className="flex flex-col gap-3">
      <div className=" border-2 w-[6rem] h-[6rem]">
      <img  src={baseurl + product?.img?.data?.attributes?.url} alt='ecommerce'/>
      </div>
      <div className="bg-black w-[6rem] h-[6rem]">

      </div>
      <div className="bg-black w-[6rem] h-[6rem]">

</div>
<div className="bg-black w-[6rem] h-[6rem]  hover:border-4 hover:border-red-400">

</div>
      </div>
{/* side on product end */}

     <div>
      <img alt="ecommerce" className=" w-full  h-74 object-cover object-center rounded" src={baseurl + product?.img?.data?.attributes?.url}/>
      </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        
        <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">{product?.title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          
        </div>
        
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">₹{product?.price*quantity}</span>
          <span className="title-font ml-4 line-through font-medium text-2xl text-gray-900">₹{product?.price*quantity+500}</span>
          <p className="text-xl font-bold text-orange-500 border-orange-400 text-center mx-2 border h-[28px] w-[45px]">Sale </p>
        </div>
        <div className="flex mt-6 items-center pb-5  border-gray-100 mb-5">
         
         
          <div className=" flex justify-between gap-3 mx-2 border border-gray-300 p-1 ">
            <span className="text-2xl border-l-black px-2 bg-gray-200" onClick={decrement}>-</span>
            <span className="px-1 text-xl ">{quantity}</span>
            <span className="px-2 text-2xl bg-gray-200 " onClick={increment}>+</span>
          </div>
        </div>
        <div className="flex my-3">
          <button className="flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={()=>{
            console.log('try to add card')
            handleAddToCart(data.data,quantity)
            setQuantity(1);
            }}>Add to Cart</button>
          <button className={`rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center ${isWish?'text-pink-500':'text-gray-800'} ml-4`} onClick={()=>{
            handleAddToWishList(data.data);
            setIsWish(!isWish)
          }}>
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
          </div>

     {/* share start  */}
    <div className="flex items-center">
      <p className='text-2xl text-black'>Share: </p>
    <span className="flex ml-3 pl-3 py-2 border-gray-200 space-x-6s">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6 text-black" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6 text-black mx-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6 text-black" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
    </div>

{/* share end  */}
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        {/* product description  */}
        <div>
          <div className="flex justify-between items-center cursor-pointer " onClick={handleExpand}>
            <p className="text-2xl ">Product Description</p>
            <div  style={{cursor:'pointer'}}>
            {
              expand? <HiMinus/>:<GrAdd/>
            }
            </div>
           
          </div>
       {expand && <p className="leading-relaxed">{product?.desc}</p>}
       <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        </div>
      
      {/* product details  */}
      <div>
          <div className="flex justify-between items-center cursor-pointer " onClick={handleExpand}>
            <p className="text-2xl ">Product Description</p>
            <div  style={{cursor:'pointer'}}>
            {
              expand? <HiMinus/>:<GrAdd/>
            }
            </div>
           
          </div>
       {expand && <p className="leading-relaxed">{product?.desc}</p>}
       <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        </div>
      {/* product details end  */}
       {/* product dimensions */}
       <div>
          <div className="flex justify-between items-center cursor-pointer " onClick={handleExpand}>
            <p className="text-2xl ">Product Description</p>
            <div  style={{cursor:'pointer'}}>
            {
              expand? <HiMinus/>:<GrAdd/>
            }
            </div>
           
          </div>
       {expand && <p className="leading-relaxed">{product?.desc}</p>}
       <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        </div>

       {/* product dimensions end  */}
      </div>
    </div>
  </div>
</section>
 <section className="text-gray-600 body-font">
 <div className="container   mx-auto">
 <h1 className="text-3xl uppercase mb-8 text-center my-2">Related Products</h1>
 <div className="">
<RelatedProducts id={id} categoryId={product?.categories?.data[0]?.id}/>
    </div>
    </div>
</section>
</>
   )
};

export default SingleProduct;
