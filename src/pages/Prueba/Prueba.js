import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db } from "../../config/Firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import * as React from 'react';
import Input from '@mui/joy/Input';

function Prueba() {
  
 
     const initContacto = {
            nombre: '',
            correo: '',
            telefono: '',
            asunto: '',
            mensaje: ''
      } 
    
    const [contacto, setContacto] = useState('');
    
        
    const  handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setContacto({
        ...contacto,
         [name]: value,
      });
      console.log(contacto)
    }

       const registrarContacto = async(e) => {
        e.preventDefault()
        try {
            const collectionRef = collection(db, 'Contactos')
            await addDoc(collectionRef, {
                contacto
            })
        } catch (error) {
            console.log(error)
        }
       
        setContacto(initContacto);
    } 

      
  return (
      <Form>
            
            <Input name='nombre' type="text" placeholder="Ingrese el nombre" onChange={(e)=>handleInputChange(e)} value={contacto.nombre} />
         
          <Form.Group className="mb-3" controlId="correo">
              <Form.Label>Correo</Form.Label>
              <Form.Control name='correo' type="text" placeholder="Ingrese el correo"  onChange={(e)=>handleInputChange(e)} value={contacto.correo} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="telefono">
              <Form.Label>Telefono</Form.Label>
              <Form.Control name='telefono' type="text" placeholder="Ingrese el telefono" onChange={(e)=>handleInputChange(e)} value={contacto.telefono}  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="asunto">
              <Form.Label>Asunto</Form.Label>
              <Form.Control name='asunto' type="text" placeholder="Ingrese el asunto" onChange={(e)=>handleInputChange(e)} value={contacto.asunto}  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="mensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control name='mensaje' type="text" placeholder="Ingrese el mensaje"  onChange={(e)=>handleInputChange(e)} value={contacto.mensaje}/>
          </Form.Group>
          <Button variant="primary" type="submit"  onClick={registrarContacto} >
              Grabar
          </Button>
      </Form>
  );
}

export default Prueba;