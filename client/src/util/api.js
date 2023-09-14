import axios from "axios";
const API_URL = "http://localhost:1337";
const params = {
    headers: {
        Authorization: "bearer ac7d311e2d49df01b6776e71536835679dbcdb5e084f1f50bd5fb53028bec7468d78da38a48af4698329f06133ce101c014f637196eed7d2939232959f3ee20857036a6e406d4c9d68916a7a5d7c566030b6ab88d5a30f6d86b514eadc3928dec9dde259e8e670e1c10aec6600fcc63e5bc9fb692b7e0ecc4a54317d94dff399"  ,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            "http://localhost:1337" + url
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
export const signIn = async ( payload) => {
    const res = await fetch(`${API_URL}/api/auth/local/register`, {
        method: "POST",
        headers: {
            Authorization: "Bearer ac7d311e2d49df01b6776e71536835679dbcdb5e084f1f50bd5fb53028bec7468d78da38a48af4698329f06133ce101c014f637196eed7d2939232959f3ee20857036a6e406d4c9d68916a7a5d7c566030b6ab88d5a30f6d86b514eadc3928dec9dde259e8e670e1c10aec6600fcc63e5bc9fb692b7e0ecc4a54317d94dff399",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
};


export const logIn = async(payload)=>{
    const res = await fetch(`${API_URL}/api/auth/local`, {
        method: "POST",
        headers: {
            Authorization: "Bearer ac7d311e2d49df01b6776e71536835679dbcdb5e084f1f50bd5fb53028bec7468d78da38a48af4698329f06133ce101c014f637196eed7d2939232959f3ee20857036a6e406d4c9d68916a7a5d7c566030b6ab88d5a30f6d86b514eadc3928dec9dde259e8e670e1c10aec6600fcc63e5bc9fb692b7e0ecc4a54317d94dff399",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
}


export const makePaymentRequest = async (endpoint,payload)=>{
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            Authorization: "Bearer ac7d311e2d49df01b6776e71536835679dbcdb5e084f1f50bd5fb53028bec7468d78da38a48af4698329f06133ce101c014f637196eed7d2939232959f3ee20857036a6e406d4c9d68916a7a5d7c566030b6ab88d5a30f6d86b514eadc3928dec9dde259e8e670e1c10aec6600fcc63e5bc9fb692b7e0ecc4a54317d94dff399",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
}