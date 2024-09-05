import Container from 'react-bootstrap/Container';


export const ItemDetail = ({ producto }) => {

    return (
        <Container className='mt-5'>
            <h1>{producto.title}</h1>
            <h3>{producto.categoryId}</h3>
            <span className="price">${(producto.price).toLocaleString('es-CO')}</span>
            <p>{producto.description}</p>
            <img src={producto.imageId} width="600px" alt="" />
        </Container>
    )
}



