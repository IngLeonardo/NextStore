import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) =>{
    const [items, setItems ] = useState([])
    const reset = () => setItems([  ])

    return <CartContext.Provider value={{ items, reset }}>{children}</CartContext.Provider>
}