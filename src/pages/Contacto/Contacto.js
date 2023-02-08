import * as React from 'react';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import { db } from "../../config/Firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import Separador from '../../pages/Separador/Separador';
 
import { TextField,Button  } from '@mui/material';
 

function Contacto () {

    const initContacto = {
        id: '',
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
    
  }



 
 
    const registrarContacto = async(e) => {
        e.preventDefault();
        let hoy= new Date();
        let clave=hoy.toISOString();
        
        try {
             await setDoc(doc(db, "Contactos", clave), {contacto
            });
        } catch (error) {
            console.log(error)
        } 
        console.log(contacto); 
        setContacto(initContacto);
    } 
    return (
        <div>
            <div className="bg-dark text-bg-dark pb-2 ps-5  text-center">
            <h3> Formulario de Contacto </h3>
            </div>
            <Separador />
            <div className="m-5 text-center">
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '80ch' },  }}   noValidate autoComplete="off">
                    <TextField name="nombre" label="Nombre" onChange={(e)=>handleInputChange(e)} value={contacto.nombre}  variant="outlined" />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '39ch' },  }}   noValidate autoComplete="off">
                    <TextField name="correo" label="Correo Electronico" onChange={(e)=>handleInputChange(e)}  value={contacto.correo}  variant="outlined" />
                    <TextField name="telefono" label="Teléfono" onChange={(e)=>handleInputChange(e)} value={contacto.telefono}   variant="outlined" />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '80ch' }   }}   noValidate autoComplete="off">
                    <TextField name="asunto" label="Asunto" onChange={(e)=>handleInputChange(e)} value={contacto.asunto}   variant="outlined" />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '80ch' }   }}   noValidate autoComplete="off">
                    <TextField name="mensaje" label="Mesaje" onChange={(e)=>handleInputChange(e)} value={contacto.mensaje}  variant="outlined"  multiline rows={6}/>
                </Box>
                
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '30ch' },   }}   noValidate autoComplete="off">
                    <Button variant="contained"
                        className="mt-3" 
                        color="success"   
                        startIcon={<SendIcon />}   
                        onClick={registrarContacto} > Enviar
                    </Button>                   
                </Box>
    
            </div>
        </div>
    )
}

export default Contacto