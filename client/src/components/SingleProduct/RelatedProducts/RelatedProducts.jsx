import Product from '../../Products/Product/Product'
import useFetch from "../../../hook/useFetch";
const RelatedProducts = ({id,categoryId}) => {
    console.log('this is product id',id,'this is categoryid',categoryId)
    const { data } = useFetch(
        `/api/products?populate=*&filters[id][$ne]=${id}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
    );
    console.log('realted',data)
    return (<div>
       <div className="flex flex-wrap -m-4">
            {
                data?.data?.map(product=>
                    (
                        <Product key={product.id} id ={product.id} product={product} data={product.attributes}/>
                    )
                
                )
            }
           
            </div>
    </div>
    )
};

export default RelatedProducts;
