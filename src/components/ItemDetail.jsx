import Container from 'react-bootstrap/Container';
import { ItemCount } from "./ItemCount";


export const ItemDetail = ({ producto,onAdd }) => {

    return (
        <Container className='mt-5 d-flex flex-row-reverse gap-4'>
            <article className='p-3 m-3'>
                <h1>{producto.title}</h1>
                <h3>{producto.categoryId}</h3>
                <span className="price">${(producto.price).toLocaleString('es-CO')}</span>
                <span className="stock">Stock : {producto.stock} </span>
                <p className='m-2'>{producto.description}</p>
                <ItemCount stock = { producto.stock } onAdd = { onAdd } />
            </article>
            <img src={producto.imageId} width="600px" alt="" />
        </Container>
    )
}



