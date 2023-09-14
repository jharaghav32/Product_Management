import "./Product.scss";
const Product = ({key ,id,data}) => {
    const url = 'http://localhost:1337'
    console.log(data)
    if(!data)return <h1>Loading.....</h1>;
    return (
       
                
                <div className="lg:w-1/4 md:w-1/2  w-full">
                        <a href={`/product/${id}`} className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-125" src={url + data?.img?.data?.attributes?.url}/>
                        </a>
                        <div className="mt-4">
                           
                            <h2 className="text-gray-900 title-font text-lg font-medium">{data.title}</h2>
                            <p className="mt-1">₹{data.price}</p>
                        </div>
                    </div>
              

    )
};

export default Product;
