import React,{useState} from 'react'
import { updateCategory } from '../../../Feature/Fetch';
const EditModal = ({id,showeditcategory,setshoweditcategory,handleClose,category}) => {
    console.log('i am in edit modal',category)
    const [title, settitle] = useState(category.attributes.title);
    const [img, setimg] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('clicked')
        const data = {
            data:{
                title:title
            }
        };
        const response = await updateCategory(data,id);
        const imgData = new FormData();
        imgData.append("ref","api::category.category");
        imgData.append("refId", id);
        imgData.append("field", "img");
        imgData.append("files", img);
        const response2 = await fetch('http://localhost:1337/api/upload?populate=*', {
            method: 'POST',
            body: imgData
        });
        const data2 = await response2.json();
        console.log('this is all uploaded category',data2)
        handleClose(setshoweditcategory)

    }
  return (
    <div
    id="drawer-update-category-default"
    style={{zIndex:'250'}}
    className={`fixed top-0 right-0 z-240 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform ${showeditcategory?'transform-none':'translate-x-full'} bg-white dark:bg-gray-800`}
    tabindex="-1"
    aria-labelledby="drawer-label"
    aria-hidden="true"
>
    <h5
        id="drawer-label"
        className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
        Update category
    </h5>
    <button
        type="button"
        data-drawer-dismiss="drawer-update-category-default"
        aria-controls="drawer-update-category-default"
        className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={()=>setshoweditcategory(false)}
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={title}
                    placeholder="Type category name"
                    required=""
                    onChange={(e)=>settitle(e.target.value)}
                />
            </div>
            
            <div>
                <label
                    for="img"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Choose Image product</label
                >
                <input type="file" name="img" id="img" onChange={(e)=>setimg(e.target.files[0])} />
            </div>

            <div>
                <label
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Description</label>
                
                <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter event description here"
                    ></textarea>
                
            </div>
            
        </div>
        <div
            className="bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute sm:px-4 sm:mt-0"
        >
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
                    ><path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path></svg
                >
                Delete
            </button>
        </div>
    </form>
</div>
  )
}

export default EditModal;