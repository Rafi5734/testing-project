import React from "react";
import useAuth from "../../Hooks/useAuth";

const Cart = () => {
    const { btn, user } = useAuth();

    if (user.displayName) {
        console.log("yes i am present.");
    }
    return (
        <div>
            <h1>{btn}</h1>
            <h1>I am from cart.</h1>
        </div>
    );
};

export default Cart;
