import cart from '../assets/shoppingCart.png'
import { Link } from "react-router-dom";

export const CartWidget = () =>{
    return(
        <>
            <Link to="/cart">
                <img src={cart} height={24}/> 
            </Link>
            <span className="cart">2</span>
        </>
    )
}       