import Container from 'react-bootstrap/Container';


export const ItemDetail = ({ producto }) => {

    return (
        <Container className='mt-5'>
            <h1>{producto.name}</h1>
            <h3>{producto.category}</h3>
            <span className="price">${(producto.price).toLocaleString('es-CO')}</span>
            <p>{producto.description}</p>
            <img src={producto.imgUrl} width="600px" alt="" />
        </Container>
    )
}



