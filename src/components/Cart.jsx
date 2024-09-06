import { useContext,useState } from "react";
import { CartContext } from "../context/CartContext";
import Container from 'react-bootstrap/Container';
import {  getFirestore,collection,addDoc } from "firebase/firestore";

const initialValues = {
    phone: "",
    email: "",
    name: ""
};

export const Cart = () => {
    const { items,reset,removeItem } = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialValues);

    const handleChange = (ev) =>{
        setBuyer(prev => {
            return {
                ...prev,[ev.target.name ]: ev.target.value,
            };
        });
    };

    const total =  items.reduce((acc, act) => acc + act.price * act.quantity,0)



    return ( 
        <Container>
            <button onClick ={ reset }>Vaciar</button>
            {
                items.map((item)=>{
                    return(
                        <div key={item.id}> 
                            <h1>{item.title}</h1>
                            <img src={item.imageId} height={200} />
                            <p>{item.quantity}</p>
                            <p onClick={() => removeItem(item.id)}>X</p>
                        </div>
                    );
                })
            }
            <br />
                <div>Total : ${total.toLocaleString('es-CO')}</div>
            <br />
            <form action="">
                <div>
                    <label>Nombre</label>
                    <input value={buyer.name} name="name" onChange={handleChange} />
                </div>
                <div>
                    <label>Telefono</label>
                    <input value={buyer.phone} name="phone" onChange={handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input value={buyer.email} name="email" onChange={handleChange} />
                </div>
                {/* <button type="button" onClick={sendOrder}>Comprar</button> */}
            </form>

        </Container>
    )
};