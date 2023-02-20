function validarDatos(nombre,correo,telefono)
{      
    if (!nombre)  { 
        alert("Le falta ingresar el nombre")  
        return false  }
    if (!correo)  { 
        alert("Le falta ingresar el correo")  
        return false  }
    if (!validarCorreo(correo))  { 
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


function validarCorreo(correo)
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
/*
function validarReserva (nombre,correo,telefono,restoran,comensales,fecha,horario)    
{  
    alert('validar reserva');
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
 */
export default validarDatos