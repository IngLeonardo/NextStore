import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


export const FormOrder = ({total}) => {
    
    console.log(total)
    
    return (
        <>
        <Container className='d-flex flex-row justify-content-center mt-5'>
            <h2>Total compra : ${total.toLocaleString('es-CO')}</h2>
        </Container>
        {/* <Container className='d-flex justify-content-center'>
        <Form className='w-50 p-4'>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control value={buyer.name} name="name" onChange={handleChange} type="text" placeholder="Ingrese nombres y apellidos"  required/>
                <Form.Text className="text-muted">
                    Sus datos no seran compartido con alguien más.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContacto">
                <Form.Label>Numero del telefono</Form.Label>
                <Form.Control value={buyer.phone} name="phone" onChange={handleChange} type="number" max={10} min={1} placeholder="Numero"  required/>
                <Form.Text className="text-muted">
                Ingrese su numero de telefono fijo o celular.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control value={buyer.email} name="email" onChange={handleChange} type="email" placeholder="correo@gmail.com"  required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="¿Acepta las politicas de tratamiento de datos?" required/>
            </Form.Group>
            <Button variant="primary" type="button" onClick={sendOrder}>Confirmar compra</Button>
        </Form>
        </Container> */}
        </>
    )
}








// <Container>
// <br />
//     <div>Total : ${total.toLocaleString('es-CO')}</div>
// <br />
// <form action="">
//     <div>
//         <label>Nombre</label>
//         <input value={buyer.name} name="name" onChange={handleChange} />
//     </div>
//     <div>
//         <label>Telefono</label>
//         <input value={buyer.phone} name="phone" onChange={handleChange} />
//     </div>
//     <div>
//         <label>Email</label>
//         <input value={buyer.email} name="email" onChange={handleChange} />
//     </div>
//     <button type="button" onClick={sendOrder}>Comprar</button>
// </form>
// </Container>