import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { CartContext } from "../context/CartContext";
import { useContext,useState } from "react";
import {  getFirestore,collection,addDoc } from "firebase/firestore";
import { ItemListContainer } from './ItemListContainer';


export const FormOrder = ({total}) => {
    const initialValues = {
        phone: "",
        email: "",
        name: ""
    };
    const { items,reset } = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialValues);

    const handleChange = (ev) =>{
        setBuyer(prev => {
            return {
                ...prev,[ev.target.name ]: ev.target.value,
            };
        });
    };

     total =  items.reduce((acc, act) => acc + act.price * act.quantity,0)

    const sendOrder = () =>{
        const order = {
            buyer,
            items,
            total
        };
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order)
        .then(({id}) =>{
            if(id){
                alert("Su orden : "+ id + "ha sido completada!");
            }
        })
        .finally(() => {
            reset();
            setBuyer(initialValues);
        });
    };

    
    if(items.length === 0) return <ItemListContainer />


    
    return (
        <>
        <Container className='d-flex flex-row justify-content-center mt-5'>
            <h2>Total compra : ${total.toLocaleString('es-CO')}</h2>
        </Container>
        <Container className='d-flex justify-content-center'>
        <Form className='w-50 p-4'>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control value={buyer.name} name="name" onChange={handleChange} type="text" placeholder="Ingrese nombres y apellidos"  required/>
                <Form.Text className="text-muted">
                    Sus datos no seran compartido con alguien más.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContacto">
                <Form.Label>Numero del telefono</Form.Label>
                <Form.Control value={buyer.phone} name="phone" onChange={handleChange} type="number" max={10} min={1} placeholder="Numero"  required/>
                <Form.Text className="text-muted">
                Ingrese su numero de telefono fijo o celular.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control value={buyer.email} name="email" onChange={handleChange} type="email" placeholder="correo@gmail.com"  required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="¿Acepta las politicas de tratamiento de datos?" required/>
            </Form.Group>
            <Button variant="primary" type="button" onClick={sendOrder}>Confirmar compra</Button>
        </Form>
        </Container>
        </>
    )
}
