import React, { useState, useEffect } from 'react';
import { getSingleProduct, updateProduct,getCategories } from '../../Feature/Fetch';

const EditModal = ({product, id, showeditproduct, setshoweditproduct, handleClose }) => {
  console.log('this is product',product)
  const [categories, setcategories] = useState([])
  const[img,setimg] = useState(null)
  const [prevProduct, setProduct] = useState({
    title: product?.attributes?.title,
    price: product?.attributes?.price,
    category: product?.attributes?.categories?.data.id,
    desc: product?.attributes?.desc,
    });
    console.log('this is prev product',prevProduct)
  const fetchCategories = async () => {
      const data = await getCategories();
     
      setcategories(data.data);
    
  };

 
  // Fetch the single product data when the component mounts
  useEffect(() => {
    // const fetchProductData = async () => {
    //   try {
    //     const productData = await getSingleProduct(id);
    //     console.log('result',productData)
    //     setProduct({
    //         title:productData.title,
    //         category:productData.category,
    //         price:productData.price,
    //         desc:productData.desc,
    //     }); // Set the fetched data as the initial state
    //   } catch (error) {
    //     console.error('Error fetching product data:', error);
    //   }
    // };

    // fetchProductData();
    fetchCategories();
  }, [id]);
 console.log('eidt prdouct',product)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('clicked');

    const data = {  
        data:{
        title: prevProduct.title,
        price: prevProduct.price,
        desc: prevProduct.desc,
        categories:{
            connect:[{id:`${prevProduct.category}`}]
          }
        }
  };
  const response = await updateProduct(id,data);
  console.log('this is product id',response)
  const imgData = new FormData();
     imgData.append("ref","api::product.product");
     imgData.append("refId",id);
     imgData.append("field", "img");
    imgData.append("files", img);
  const response2 = await fetch('http://localhost:1337/api/upload?populate=*', {
    method: 'POST',
    body: imgData
  });
    const data2 = await response2.json();
    console.log('this is all uploaded',data2)
   setshoweditproduct(false)



    // Add your code to update the product using the updateProduct function
    // For example:
    // await updateProduct(id, product);
    // After updating the product, you might want to close the modal using handleClose
    // handleClose();
  };

  // Update the state of the input fields when they are changed
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div
      id="drawer-update-product-default"
      style={{ zIndex: '250' }}
      className={`fixed top-0 right-0 z-240 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform ${
        showeditproduct ? 'transform-none' : 'translate-x-full'
      } bg-white dark:bg-gray-800`}
      tabIndex="-1"
      aria-labelledby="drawer-label"
      aria-hidden="true"
    >
      <h5 id="drawer-label" className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
        Update Product
      </h5>
      <button
        type="button"
        data-drawer-dismiss="drawer-update-product-default"
        aria-controls="drawer-update-product-default"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={() => handleClose(setshoweditproduct)}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>

      <form action="#" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="title"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value={prevProduct.title} // Bind the value of the input field to the product state
              placeholder="Type product name"
              required=""
              onChange={handleChange} // Call handleChange on input change
            />
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Technology
            </label>
            <select
              id="category"
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value={prevProduct.category} // Bind the value of the select field to the product state
              onChange={handleChange} // Call handleChange on select change
            >
                {
                    categories?.map((category)=>(
                        <option value={category.id}>{category.attributes.title}</option>
                    ))

                }
             
            </select>
          </div>
          <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value={prevProduct.price} // Bind the value of the input field to the product state
              placeholder="$149"
              required=""
              onChange={handleChange} // Call handleChange on input change
            />
          </div>
          <div>
            <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter event description here"
              value={prevProduct.desc} // Bind the value of the textarea to the product state
              onChange={handleChange} // Call handleChange on textarea change
            ></textarea>
          </div>
          <div>
            <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Choose Image product
            </label>
            <input type="file" name="img" id="img"   onChange={(e) => setimg(e.target.files[0])} />
          </div>
        </div>
        <div className="  bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute sm:px-4 sm:mt-0">
          <button
            type="submit"
            className="bg-blue-600 w-full justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Update
          </button>
          <button
            type="button"
            className="w-full justify-center text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-1 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
