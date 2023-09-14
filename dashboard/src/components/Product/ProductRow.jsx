import React,{useState} from 'react'
import EditModal from '../Modal/EditModal'
import DeleteModal from '../Modal/DeleteModal';
import {BsThreeDots} from 'react-icons/bs'
const ProductRow = ({showeditproduct,setshoweditproduct,deleteproduct,setdeleteproduct,handleClose,product}) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const[showDeleteModal,setShowDeleteModal]=useState(false);
    const[id,setid]=useState(null)
    const [showaction,setshowaction]=useState(false);
    const handleActionModalOpen = () => {
        setshowaction(!showaction);
      };
    const handleDeleteClick = () => {
        setShowDeleteModal(!showDeleteModal);
        handleActionModalOpen();
    }
    const handleEditClick = () => {
        setShowEditModal(true);
        setid(product.id);
        handleActionModalOpen();
      };
  return (
    <>
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
    {/* <td className="w-4 p-4">
        <div className="flex items-center">
            <input
                id={`checkbox-${product.id}`}
                aria-describedby="checkbox-1"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for={`checkbox-${product.id}`} className="sr-only">
                checkbox
            </label>
        </div>
    </td> */}
    <td className="p-4 text-sm font-normal text-gray-500 whitspace-wrap dark:text-gray-400">
        <div className="text-base font-semibold text-gray-900 dark:text-white">
            <data className='truncate' value="name">{product.attributes.title}</data>
        </div>
        <div className="text-sm font-normal truncate text-gray-500 dark:text-gray-400">
            <data value="category">{product?.categories?.data?.attributes?.title}</data>
        </div>
    </td>
    {/* <td className="p-4 text-base font-medium text-gray-900 whitspace-wrap dark:text-white">
        <data value="technology">{product?.categories?.data?.attributes?.title}</data>
    </td> */}
    <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
        <data value="description">{product.attributes.desc}</data>
    </td>
    
    <td className="p-4 text-base font-medium text-gray-900 whitspace-wrap dark:text-white">
        <data value="price">{product.attributes.price}</data>
    </td>
    

    <td className="absolute p-4 space-x-2 whitspace-wrap">
    <button
      type="button"
      className="text-gray-500"
      onClick={handleActionModalOpen}
    >
      <BsThreeDots size={20} />
    </button>
    {showaction && (
        <div className=" flex justify-center items-center flex-col relative  -top-8 -left-[10rem] gap-2  mr-4 bg-white p-4 rounded shadow-lg z-50">

       
        <button
            type="button"
            id="updateProductButton"
            data-drawer-target="drawer-update-product-default"
            data-drawer-show="drawer-update-product-default"
            aria-controls="drawer-update-product-default"
            data-drawer-placement="right"
            className="bg-blue-400 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={handleEditClick}
        >
            <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <svg>
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"
                    />
                </svg>
            </svg>
            Update
        </button>
        <button
            type="button"
            id="deleteProductButton"
            data-drawer-target="drawer-delete-product-default"
            data-drawer-show="drawer-delete-product-default"
            aria-controls="drawer-delete-product-default"
            data-drawer-placement="right"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
            onClick={handleDeleteClick}
            
        >
            <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                />
            </svg>
            Delete item
        </button>
        </div>
    )}
    </td>
</tr>
<EditModal product={product} id={id} showeditproduct={showEditModal} setshoweditproduct={setShowEditModal} handleClose={handleClose} />       
<DeleteModal id={id} deleteproduct={showDeleteModal} setdeleteproduct={setShowDeleteModal} handleClose={handleClose} />
</>
  )
}

export default ProductRow