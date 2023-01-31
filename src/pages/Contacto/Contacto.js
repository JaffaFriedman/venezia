import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import { db } from "../../config/Firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import Button from '@mui/material/Button';

const Contacto = () => {

    const valorIncial = {
        nombre: '',
        correo: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      }

   const [contacto, setContacto] = useState([]);

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
    setContacto({...valorIncial})
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
        <div>
            <div className="bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center">
            <h3> Formulario de Contacto </h3>
            </div>
            <div className="m-5 text-center">
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '80ch', marginTop: 2,}   }}   noValidate autoComplete="off">
                    <TextField id="nombre" label="Nombre" onChange={handleChangeNombre} variant="outlined" />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '39ch' },  }}   noValidate autoComplete="off">
                    <TextField id="correo" label="Correo Electronico" onChange={handleChangeCorreo}   variant="outlined" />
                    <TextField id="telefono" label="Teléfono" onChange={handleChangeTelefono}  variant="outlined" />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '80ch' }   }}   noValidate autoComplete="off">
                    <TextField id="asunto" label="Asunto" onChange={handleChangeAsunto}  variant="outlined" />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '80ch' }   }}   noValidate autoComplete="off">
                    <TextField id="mensaje" label="Mesaje" onChange={handleChangeMensaje}  variant="outlined"  multiline rows={6}/>
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '40ch' },   }}   noValidate autoComplete="off">
                    <Button variant="contained" startIcon={<SaveIcon />}   onClick={registrarContacto} > Enviar
                    </Button>                   
                </Box>
            </div>
        </div>
    )
}

export default Contacto