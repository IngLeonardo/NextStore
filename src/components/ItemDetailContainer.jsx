import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from '../data/productos.json';


export const ItemDetailContainer = () =>{
    const [item, setItem]= useState([]);
    const [loading , setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve) => setTimeout(() => resolve(data),2000)).then(
            response => {
            const finded = response.find((element)=> element.id === Number(id))
            setItem(finded);
        }).finally(() => setLoading(false));
    },[id]);

    if(loading) return 'Loading...';
    
    return (
        <Container className='mt-5'>
            <h1>{item.name}</h1>
            <h3>{item.category}</h3>
            <span className="price">${(item.price).toLocaleString('es-CO')}</span>
            <p>{item.description}</p>
            <img src={item.imgUrl} width="600px" alt="" />
            
        </Container>
    )   
}







