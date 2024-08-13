import Container from 'react-bootstrap/Container';
import Error404 from '../assets/error404.png';

export const Error404Container = () =>{
    return (
        <Container className='mt-4 text-center' >
            <img src={Error404} alt="error para mostrar que no existe la pagina"  />
        </Container>
    )   
}



