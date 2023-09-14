import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import useFetch from "../../../hook/useFetch.js";
import { useNavigate } from "react-router-dom";

const Search = ({ setshowsearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    let { data } = useFetch(
        `/api/products?populate=*&filters[title][$contains]=${query}`
    );
 console.log('this is search',data)
    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setshowsearch(false)}
                />
            </div>
            <div className="search-result-content">
                {!data?.data?.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className="search-results">
                    {data?.data?.map((item) => (
                        <div
                            className="search-result-item"
                            key={item?.id}
                            onClick={() => {
                                navigate("/product/" + item?.id);
                                setshowsearch(false);
                            }}
                        >
                            <div className="image-container">
                                <img
                                    src={
                                        "http://localhost:1337" +
                                        item?.attributes?.img?.data?.attributes?.url
                                            
                                    }
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item?.attributes?.title}
                                </span>
                                <span className="desc">
                                    {item?.attributes?.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;