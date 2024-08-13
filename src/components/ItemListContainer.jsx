import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data/productos.json';


export const ItemListContainer = () =>{
    const [item, setItem]= useState([]);
    const [loading , setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => setTimeout(() => resolve(data), 2000))
        .then( response => {
            if(!id){
                setItem(response);   
            }
            else{
                const filtered = response.filter((element) => element.category === id);
                setItem(filtered);
            }
            })
        .finally(() => setLoading(false)); 
    },[id]);

    if(loading) return "Loading..."

    return (
        <Container className='mt-4 d-flex flex-wrap text-center gap-2'>
            {item.map((producto) => (
                <Card key={producto.id}  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.imgUrl} />
                    <Card.Body>
                            <Card.Title><h4>{producto.name}</h4></Card.Title>
                            <Card.Text>
                                {producto.category}
                            </Card.Text>
                            <Card.Text>
                                ${producto.price.toLocaleString('es-CO')}
                            </Card.Text>
                            <Link to={`/item/${producto.id}`}>
                                <Button variant="primary">Ver más</Button>
                            </Link>
                    </Card.Body>
                </Card>
            ))} 
        </Container>
    )   
}








