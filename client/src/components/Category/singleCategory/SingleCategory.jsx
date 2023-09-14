import { useParams } from "react-router-dom";
import useFetch from "../../../hook/useFetch";
import Products from "../../Products/Products";
import "./singleCategory.scss";
const SingleCategory = ({id}) => {
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );
    console.log('categories',data)
    return (
                <div className='mt-20'>
                <Products innerPage={true} products={data} />
                </div>
    );
};

export default SingleCategory;