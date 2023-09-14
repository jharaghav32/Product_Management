import React, { useState,useContext } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "../Cart/Cart";
import Search from './Search/Search'
import { Context } from "../../util/context";
import WishList from "../WishList/WishList";
const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const[showcart,setshowcart]=useState(false);
  const[showwishlist,setshowwishlist]=useState(false);
  const[showsearch,setshowsearch]=useState(false);
  const {cartCount,wishCount}=useContext(Context)

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    {
    localStorage.getItem('token')&&
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="hidden sm:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
            Ecommerce
          </span>
        </a>
        <div className="flex md:order-2">
          <div className="flex gap-2 justify-center items-center mx-2">
            <CiSearch onClick={()=>setshowsearch(!showsearch)} className="w-7 h-7 text-gray-500" />
            <div className='relative ' style={{cursor:'pointer'}} onClick={()=>setshowwishlist(!showwishlist)}>
            <AiOutlineHeart className="w-7 h-7 text-gray-400" />
            <span className="bg-blue-600 absolute font-bold text-[6px] flex justify-center items-center bottom-[15px] right-[-1px] text-white w-[10px] h-[10px] rounded-full">{wishCount}</span>
              </div>
            <div className='relative ' style={{cursor:'pointer'}} onClick={()=>setshowcart(!showcart)}>
            <AiOutlineShoppingCart  className="w-7 h-7 text-gray-400" />
            <span className="bg-blue-600 absolute font-bold text-[6px] flex justify-center items-center bottom-[15px] right-[-1px] text-white w-[10px] h-[10px] rounded-full">{cartCount}</span>
            </div>
            <button className="text-white bg-blue-500 p-1 rounded-lg" onClick={()=>{
              localStorage.removeItem('token');
              localStorage.removeItem('email');
              navigate('/login')
            }
            }>Logout</button> 
            {/* //remove this button */}
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={handleMobileMenuToggle}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/category"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
}
   {showcart &&  <Cart showcart={showcart} setshowcart={setshowcart}/>}
  {showsearch &&  <Search setshowsearch={setshowsearch}/>}
  {showwishlist &&  <WishList showwishlist={showwishlist} setshowwishlist={setshowwishlist}/>}
  
    </>
  );
};

export default Header;
