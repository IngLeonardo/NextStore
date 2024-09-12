import { useContext,useState } from "react";
import { CartContext } from "../context/CartContext";
import Container from 'react-bootstrap/Container';
import {  getFirestore,collection,addDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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

    if(items.length === 0) return " Ir a la pagina de Inicio de la tienda..."


    return (
        <>
            <Container>
                <Button className="my-5" variant="primary" onClick ={ reset }>Vaciar el carrito</Button>
            </Container>
            <Container className="d-flex flex-row gap-2">

                {
                    items.map((item)=>{
                        
                        return(

                                <Card key={item.id}  style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.imageId} />
                                    <Card.Body>
                                        <Card.Title className="fs-2">{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Cantidad compra :  {item.quantity} Unidades</ListGroup.Item>
                                        <ListGroup.Item>Precio unidad : ${item.price.toLocaleString('es-CO')}</ListGroup.Item>
                                        <ListGroup.Item>Total compra : ${ (item.price * item.quantity).toLocaleString('es-CO') }</ListGroup.Item>
                                        </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#" onClick={() => removeItem(item.id)}><i className="bi bi-trash3"></i> Remover producto</Card.Link>
                                        <Card.Link href="#">Ver detalles</Card.Link>
                                    </Card.Body>
                                </Card>
                            

                        );
                    })
                }
            </Container>
            <Container>
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
                    <button type="button" onClick={sendOrder}>Comprar</button>
                </form>
            </Container>
        </>
    )
};