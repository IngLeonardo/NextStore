import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({producto}) => {

    return(
        <>
            <h1 className='ms-3 mt-5'>Productos</h1>
            <Container className='mt-4 d-flex flex-wrap text-center gap-2'>

                {producto.map((prod) => (
                    <Card key={prod.id}  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={prod.imageId} />
                        <Card.Body>
                                <Card.Title><h4>{prod.title}</h4></Card.Title>
                                <Card.Text>
                                    {prod.categoryId}
                                </Card.Text>
                                <Card.Text>
                                    ${prod.price.toLocaleString('es-CO')}
                                </Card.Text>
                                <Link to={`/item/${prod.id}`}>
                                    <Button variant="primary">Ver más</Button>
                                </Link>
                        </Card.Body>
                    </Card>
                ))} 
            </Container>
        </>
    
        );
}

