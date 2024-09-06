import cart from '../assets/shoppingCart.png'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartWidget = () =>{
    const { items } = useContext(CartContext);
    const quantity = items.reduce((acc, act) => acc + act.quantity, 0)

    return(
        <>
            <Link to="/cart">
                <img src={cart} height={24}/> 
            </Link>
            <span className="cart">{quantity}</span>
        </>
    )
}       