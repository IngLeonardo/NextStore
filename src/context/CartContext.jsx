import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) =>{
    const [items, setItems ] = useState([])
    const reset = () => setItems([])
    const addItem = (item) =>{
        const alreadyExists = items.some((i) => i.id === item.id);
        if(alreadyExists){
            const newItems = items.map((i) =>{
                if(i.id === item.id){
                    return { ...i, quantity : i.quantity + item.quantity}
                }else{
                    return i;
                }
            });
            setItems(newItems);
        }else{
            setItems((prev => [...prev,item]))
        }
    };

    const removeItem = (id) =>{
        const filter = items.filter(prod => prod.id !== id)
        setItems(filter);
    }

    console.log(items);
    return (
        <CartContext.Provider value={{ addItem,items,removeItem,reset }}>
            {children}
        </CartContext.Provider>
            
    )
}