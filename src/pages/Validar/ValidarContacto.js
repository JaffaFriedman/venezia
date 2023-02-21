import validarDatos from './Validar';
 
function  validarContacto  (nombre,correo,telefono,asunto,mensaje)  
{       
    if ( validarDatos (nombre,correo,telefono))
    {  
        if (!asunto)  { 
            alert("Le falta ingresar el asunto")  
            return false  }
        if (!mensaje)  { 
            alert("Le falta ingresar el mensaje")  
            return false  }
        return true 
    }
   return false
}
export default   validarContacto 

