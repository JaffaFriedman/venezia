import * as React from 'react';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import { db } from "../../config/Firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import Separador from '../../pages/Separador/Separador';
import { TextField,Button  } from '@mui/material';
 
 
function validar(nombre,correo,telefono,asunto)
{  
   if (!nombre)  { 
       alert("Le falta ingresar el nombre")  
       return false  }
   if (!correo)  { 
       alert("Le falta ingresar el correo")  
       return false  }
   if (!telefono)  { 
        alert("Le falta ingresar el telefóno")  
        return false  }
   if (!asunto)  { 
        alert("Le falta ingresar el asunto")  
        return false  }
    if (!validaCorreo(correo))  { 
        alert("Formato de Correo inválido, debe tener una @, al menos 1 caracter despues de @, luego un punto y al menos un caracter despues del punto")  
        return false  }
   if (!telefono)   { 
       alert("Debe ingresar el teléfono")
        return false  }       
   if (telefono.length<7){ 
           alert("Al teléfono le faltan digitos, el largo minimo es 7")
           return false  }  
   if (telefono.length>9){ 
           alert("Al teléfono le sobran digitos, el largo maximo es 9")
           return false  }  

   return true
}
function validaCorreo(correo)
{ const i= correo.indexOf("@")
  const k= correo.lastIndexOf("@")
  const j= correo.lastIndexOf(".") 
   if(i!==k) //mas de 1 @
    return false
  if (i < 1 ) // no hay nada antes de la @
     return false
  if (j <= i+1 || j>=correo.length-1)  // no tiene un punto despues de la @ o no tiene nada despues del punto
     return false
  return true
}

function Contacto () {
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
    
  }

    const registrarContacto = async(e) => {
        
        if (validar(contacto.nombre,contacto.correo,contacto.telefono,contacto.asunto))
        {
            e.preventDefault();
            let hoy= new Date();
            let clave=hoy.toISOString();
    
            try {
                await setDoc(doc(db, "Contactos", clave), {id: clave,...contacto});
            } catch (error) {
                console.log(error)
            } 
            console.log(contacto); 
            setContacto(initContacto);
        }   
   }
    return (
        <div>
            <div className="bg-dark text-bg-dark pb-2 ps-5  text-center">
            <h3>Formulario de Contacto </h3>
            <h6>Respondemos a la brevedad</h6>
            </div>
            <Separador />
            <div className="m-5 text-center">
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '80ch' },  }}   Validate autoComplete="off">
                    <TextField name="nombre"  required label="Nombre"  type='text'  placeholder="Nombre" onChange={(e)=>handleInputChange(e)} value={contacto.nombre}  variant="outlined" />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '39ch' },  }}  Validate autoComplete="off">
                    <TextField name="correo" required type="email"  placeholder="Correo Electrónico"  label="Correo Electronico" onChange={(e)=>handleInputChange(e)}  value={contacto.correo}  variant="outlined" />
                    <TextField name="telefono" required type="number"  placeholder="Teléfono"  label="Teléfono" onChange={(e)=>handleInputChange(e)} value={contacto.telefono} variant="outlined" />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '80ch' }   }}   noValidate autoComplete="off">
                    <TextField name="asunto" required label="Asunto" type='text'  placeholder="Asunto"  onChange={(e)=>handleInputChange(e)} value={contacto.asunto}   variant="outlined" />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '80ch' }   }}   noValidate autoComplete="off">
                    <TextField name="mensaje" label="Mensaje" type='text'  placeholder="Mensaje" onChange={(e)=>handleInputChange(e)} value={contacto.mensaje}  variant="outlined"  multiline rows={6}/>
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