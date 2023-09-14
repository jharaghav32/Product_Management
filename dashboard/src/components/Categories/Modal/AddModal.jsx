import React,{useState} from 'react'
import { addCategory } from '../../../Feature/Fetch'
const AddModal = ({handleClose,showcategory,setshowcategory}) => {
    const[title,settitle]=useState('')
    const[img,setimg]=useState(null)
     const handleSubmit=async(e)=>{
        e.preventDefault()
        const data = {
            data:{
            title:title
            }
        }
       
        const response = await addCategory(data);
        const categoryId = response.data.id;
        console.log('this is category id',categoryId,response)
        const imgData = new FormData();
              imgData.append("ref","api::category.category");
                imgData.append("refId", categoryId);
                imgData.append("field", "img");
                imgData.append("files", img);
                const response2 = await fetch('http://localhost:1337/api/upload?populate=*', {
                    method: 'POST',
                    body: imgData
                    });
                    const data2 = await response2.json();
                    console.log('this is all uploaded category',data2)

        handleClose(setshowcategory)
    }
  return (
    <div
    id="drawer-create-category-default"
    className={`fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform ${showcategory?'transform-none':'translate-x-full'} bg-white dark:bg-gray-800`}
    tabindex="-1"
    aria-labelledby="drawer-label"
    aria-hidden="true"
>
    <h5
        id="drawer-label"
        className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
        New category
    </h5>
    <button
        type="button"
        data-drawer-dismiss="drawer-create-category-default"
        aria-controls="drawer-create-category-default"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={()=>setshowcategory(false)}
    >
        <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path></svg
        >
        <span className="sr-only">Close menu</span>
    </button>
    <form action="#" onSubmit={handleSubmit}>
        <div className="space-y-4">
            <div>
                <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Name</label
                >
                <input
                    type="text"
                    name="title"
                    id="name"
                    value={title}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type category name"
                    required=""
                    onChange={(e)=>settitle(e.target.value)}
                />
            </div>

            
            <div>
                <label
                    for="img"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Choose Image category</label
                >
                <input type="file" name="img" id="img" onChange={(e)=>setimg(e.target.files[0])} />
            </div>

            <div>
                <label
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Description</label
                >
                <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter event description here"></textarea>
            </div>
            
            <div
                className="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute"
            >
                <button
                    type="submit"
                    className="bg-blue-600 text-white w-full justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    
                >
                    Add category
                </button>
                <button
                    type="button"
                    data-drawer-dismiss="drawer-create-category-default"
                    aria-controls="drawer-create-category-default"
                    className="inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    onClick={()=>handleClose(setshowcategory)}
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 -ml-1 sm:mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"></path></svg
                    >
                    Cancel
                </button>
            </div>
        </div>
    </form>
</div>
  )
}

export default AddModal