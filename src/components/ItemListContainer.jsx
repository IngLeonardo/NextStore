import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data/productos.json';
import { ItemList } from './ItemList';


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
        <ItemList  producto = {item}/>
    )   
}