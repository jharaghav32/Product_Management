import Product from "./Product/Product";
import "./Products.scss";
const Products = ({innerPage,products}) => {
    console.log(products)
    if(!products)return <h1>Loading.....</h1>;
    return (
        <section className="text-gray-600 body-font">
        <div className="container   mx-auto my-2">
     {!innerPage ?   <h1 className="text-3xl text-center  my-5 mb-8 uppercase">Popular Products</h1>:<div className=" text-3xl my-5 mb-8 uppercase text-center ">
                    {
                        products?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    }
                </div>}
        <div className="flex flex-wrap -m-4">
            {
                products?.data?.map(product=>
                    (
                        <Product key={product.id} id ={product.id} product={product} data={product.attributes}/>
                    )
                
                )
            }
           
            </div>
            </div>
            </section>
    )
};

export default Products;
