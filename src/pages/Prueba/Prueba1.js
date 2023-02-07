import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db } from "../../config/Firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
 



function Prueba() {
  

        const valorIncial = {
            nombre: '',
            correo: '',
            telefono: '',
            asunto: '',
            mensaje: ''
          }
    
       const [contacto, setContacto] = useState({...valorIncial});
    
       const registrarContacto = async(e) => {
        e.preventDefault()
        console.log(contacto)
        try {
            const collectionRef = collection(db, 'Contactos')
            await addDoc(collectionRef, {
                ...contacto
            })
        } catch (error) {
            console.log(error)
        }
        setContacto({...valorIncial});
       
    } 
    const handleChangeNombre = (event: ChangeEvent<HTMLInputElement>) => {
        contacto.nombre=event.target.value;
      };
     
      const handleChangeCorreo = (event: ChangeEvent<HTMLInputElement>) => {
        contacto.correo=event.target.value;
      };
    
    
      const handleChangeTelefono = (event: ChangeEvent<HTMLInputElement>) => {
        contacto.telefono=event.target.value;
      };
    
     
      const handleChangeMensaje = (event: ChangeEvent<HTMLInputElement>) => {
        contacto.mensaje=event.target.value;
      };
    
      const handleChangeAsunto = (event: ChangeEvent<HTMLInputElement>) => {
        contacto.asunto=event.target.value;
      };
    
  return (
    <Form>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el nombre" onChange={handleChangeNombre} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="correo">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el correo"  onChange={handleChangeCorreo} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="telefono">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el telefono" onChange={handleChangeTelefono}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="asunto">
        <Form.Label>Asunto</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el asunto" onChange={handleChangeAsunto}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="mensaje">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el mensaje"  onChange={handleChangeMensaje} />
      </Form.Group>
      <Button variant="primary" type="submit"   onSubmit={registrarContacto} >
        Grabar
      </Button>
    </Form>
  );
}

export default Prueba;