import React, { useContext, useEffect, useState } from "react";
import { RingContext } from "../../App";
import useAuth from "../../Hooks/useAuth";
import useNumber from "../../Hooks/useNumber";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

import "./home.css";
import AllInfo from "../AllInfo/AllInfo";
const Home = () => {
    const { btn, handleBtn } = useAuth();
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);

    const handleCart = (p) => {
        console.log(p);
    };
    return (
        <div>
            <div className="container">
                <div className="row mt-5 ms-5">
                    <div className="col-6 col-sm-4">
                        <Link to="/desktop">
                            <button type="button" className="btn btn-info">
                                Desktop
                            </button>
                        </Link>
                    </div>
                    <div className="col-6 col-sm-4">
                        <Link to="/laptop">
                            <button type="button" className="btn btn-info">
                                Laptop
                            </button>
                        </Link>
                    </div>

                    <div className="col-6 col-sm-4">
                        <Link to="/monitor">
                            <button type="button" className="btn btn-info">
                                Monitor
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="home-card">
                {products.map((item) => (
                    <AllInfo
                        product={products}
                        key={item.id}
                        handleCart={handleCart}
                    ></AllInfo>
                ))}
            </div>
        </div>
    );
};

export default Home;

{
    /* <div className="card" style={{ width: "18rem" }}>
                        <img
                            src={item.image}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <h3>$ {item.price}</h3>
                            <Link to={`/details/${item.id}`}>
                                <button
                                    onClick={() => handleCart(item)}
                                    className="btn btn-primary"
                                >
                                    Add To Cart
                                </button>
                            </Link>
                        </div>
                    </div> */
}
