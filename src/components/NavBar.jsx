import { CartWidget } from "./CartWidget"

export const NavBar = () =>{
    return (
        <>
            <h2>Next Shop</h2>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contactanos</a></li>
            </ul>
            <CartWidget />
        </>
    )
}