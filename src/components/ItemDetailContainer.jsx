import { useEffect,useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import {  getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemDetail } from './ItemDetail';
import { CartContext } from "../context/CartContext";



export const ItemDetailContainer = () =>{
    const [item, setItem]= useState([]);
    const [loading , setLoading] = useState(true);
    const { addItem }= useContext(CartContext);
    const { id } = useParams();



    useEffect(() => {
        
        const db = getFirestore();
        const refDoc = doc(db, "items", id);

        getDoc(refDoc)
        .then((snapshot) => {
        setItem({ ...snapshot.data(), id: snapshot.id });
        })
        .finally(() => setLoading(false));
    },[id]);

    const onAdd = (quantity ) =>{
        addItem({ ...item,quantity }); 
    }

    if(loading) return 'Loading...';
    
    return (
        <ItemDetail producto = { item } onAdd = { onAdd }/> 
    )   
}







