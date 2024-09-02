import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/productos.json';
import { ItemDetail } from './ItemDetail';


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
        <ItemDetail producto = { item } /> 
    )   
}







