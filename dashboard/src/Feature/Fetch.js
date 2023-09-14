const baseurl = "http://localhost:1337/api"

export const addProduct = async (product) => {
const data = await fetch(`${baseurl}/products`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(product),
});
return data.json();
};
export const getSingleProduct=async(id)=>{
const data=await fetch(`${baseurl}/products/${id}`)
const response = await data.json();
const product = {
    title:response.attributes.title,
    price:response.attributes.price,
    desc:response.attributes.desc,
    category:response.categories.data.id
}
console.log('from fetch',product)
return product;
}

export const getProducts = async () => {
const data = await fetch(`${baseurl}/products?populate=*`);
return data.json();
};

export const updateProduct = async (id,product) => {
const data = await fetch(`${baseurl}/products/${id}`, {
method: "PUT",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(product),
});
return data.json();
};

export const deleteProduct = async (id) => {
const data = await fetch(`${baseurl}/products/${id}`, {
method: "DELETE",
});
return data.json();
};



export const addCategory = async (category) => {
const data = await fetch(`${baseurl}/categories`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(category),
});
return data.json();
};

export const getCategories = async () => {
const data = await fetch(`${baseurl}/categories`);
return data.json();
};

export const updateCategory = async (category,id) => {

const data = await fetch(`${baseurl}/categories/${id}`, {

method: "PUT",

headers: {

"Content-Type": "application/json",

},

body: JSON.stringify(category),

});

return data.json();

};

export const deleteCategory = async (id) => {


const data = await fetch(`${baseurl}/categories/${id}`, {

method: "DELETE",

});

return data.json();

};


export const signIn = async (user) => {
const data = await fetch(`${baseurl}/auth/local/register`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(user),
});
return data.json();
};

export const logIn = async (user) => {
const data = await fetch(`${baseurl}/auth/local`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(user),
});
return data.json();
};