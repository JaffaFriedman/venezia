import validarDatos from './Validar';

 
function validarReserva   (nombre,correo,telefono,restoran,comensales,fecha,horario)    
{  
  
    if (!restoran)  { 
        alert("Le falta ingresar el restoran")  
        return false  }
    if (!comensales)  { 
          alert("Le falta ingresar la cantidad de personas")  
          return false  }
    if (!fecha)  { 
            alert("Le falta ingresar la fecha de la reserva")  
            return false  }
    if (!horario)  { 
              alert("Le falta ingresar la hora de la reserva")  
              return false  }
    if ( validarDatos (nombre,correo,telefono))
              return true  
    return false
} 
export default  validarReserva 