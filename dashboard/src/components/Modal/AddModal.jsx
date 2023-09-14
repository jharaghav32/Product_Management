import React, { useState,useEffect } from 'react';
import { getCategories,addProduct } from '../../Feature/Fetch';
const AddModal = ({ handleClose, showproduct, setshowproduct }) => {
  const [img,setimg] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    desc: '',
  });
    const [categories, setcategories] = useState([])

    const fetchCategories = async () => {
        const data = await getCategories();
       
        setcategories(data.data);
    };

    useEffect(() => {
        fetchCategories();
    }, []);
 console.log(categories)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log('I clicked')
    // Here, you can use the formData object to access the input values and perform any necessary actions.
    
    // ... Add logic to handle form submission ...
    const data = {  
        data:{
        title: formData.title,
        price: formData.price,
        desc: formData.desc,
        categories:{
            connect:[{id:`${formData.category}`}]
          }
        }
  };
  const response = await addProduct(data);
  const productId = response.data.id;
  console.log('this is product id',productId,response)
  const imgData = new FormData();
     imgData.append("ref","api::product.product");
     imgData.append("refId", productId);
     imgData.append("field", "img");
    imgData.append("files", img);
  const response2 = await fetch('http://localhost:1337/api/upload?populate=*', {
    method: 'POST',
    body: imgData
  });
    const data2 = await response2.json();
    console.log('this is all uploaded',data2)
     handleClose(setshowproduct)
}

  return (
    <div
      id="drawer-create-product-default"
      style={{ zIndex: '250' }}
      className={`fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform ${
        showproduct ? 'transform-none' : 'translate-x-full'
      } bg-white dark:bg-gray-800`}
      tabIndex="-1"
      aria-labelledby="drawer-label"
      aria-hidden="true"
    >
      {/* ... Other JSX code ... */}
      <form >
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="title"
              id="name"
              value={formData.title}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
              required=""
            />
          </div>
          <div>
                <label
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Description</label
                >
                <textarea
                    id="description"
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter event description here"
                    >Start developing with an open-source library of over 450+ UI
                    components, sections, and pages built with the utility classes from
                    Tailwind CSS and designed in Figma.</textarea
                >
            </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="$2999"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="category-create"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Categories
            </label>
            <select
              id="category-create"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option value="">Select category</option>
              {
                    categories?.map((category)=>(
                        <option value={category.id}>{category.attributes.title}</option>
                    ))
              }
              
            </select>
          </div>

          <div>
                <label
                    for="img"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Choose Image product</label
                >
                <input
        type="file"
        name="img"
        onChange={(e) => setimg(e.target.files[0])}
      />
            </div>
          {/* ... Other input fields ... */}
        </div>
        <div className="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white w-full justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add product
          </button>
          <button
            type="button"
            data-drawer-dismiss="drawer-create-product-default"
            aria-controls="drawer-create-product-default"
            className="inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={() => handleClose(setshowproduct)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 -ml-1 sm:mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddModal;
