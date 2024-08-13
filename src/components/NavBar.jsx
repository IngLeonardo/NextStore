import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget"
import LogoShop from '../assets/LogoShop.svg';

export const NavBar = () =>{
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img
                    src={LogoShop}
                    width="65"
                    height="65"
                    className="d-inline-block align-top"
                    
                    />
                </Navbar.Brand>
                    
                    <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/Portatiles">Portatiles</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/PC-escritorio">PC de escritorio</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/Monitor">Monitores</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
}