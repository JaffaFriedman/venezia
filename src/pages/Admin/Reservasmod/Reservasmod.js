 
import { useState } from "react";
 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { db } from '../../../config/Firebase'
import { collection, query, where, getDocs, doc, setDoc, deleteDoc    } from "firebase/firestore";
import Separador from '../../Separador/Separador';
import SearchIcon from '@mui/icons-material/Search';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import DeleteIcon from '@mui/icons-material/Delete';
function validar(nombre,correo,telefono,restoran,comensales,fecha,horario)
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
  if (!nombre)  { 
       alert("Le falta ingresar el nombre")  
       return false  }
  if (!correo)  { 
       alert("Le falta ingresar el correo")  
       return false  }
  if (!telefono)  { 
        alert("Le falta ingresar el telefono")  
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

const Reservasmod  = () => {
  const fechahoy = new Date();
  const fechaMin = fechahoy.toISOString().substring(0,10);
  fechahoy.setDate(fechahoy.getDate() + 60);
  const fechaMax =  fechahoy.toISOString().substring(0,10);

const initReserva = {
  restoran: '',
  comensales: '',
  fecha: fechaMin,
  horario: '',
  nombre: '',
  correo: '',
  telefono: '',
  mensaje: ''
}

const [correo, setCorreo] = useState('');
const  handleChangeCorreo = ((e) => {
    setCorreo(e.target.value)
    });

const [reserva, setReserva] = useState(initReserva);
const  handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setReserva({
    ...reserva,
     [name]: value,
  });
 
}

const recuperarReserva = async () => {
 
    let q = collection(db, "Reservas");
      q = query(q,  where("correo", "==", correo)  ); 
    try {
      const response = await getDocs(q);
     if(response.docs.length!==0)
     { const docs = response.docs.map((doc,idx) => {
        const data = doc.data(); 
        data.id=doc.id
        return data ;
      });
      setReserva(docs[0]);
    }
    else alert('No existe reserva para '+correo)

    } catch (error) {
      console.log(error);
       
    }
  };
  
  const borrarReserva = async () => {
      
  
      try {
        await deleteDoc(doc(db,"Reservas",reserva.id));
         } catch (error) {
        console.log(error)
     }
    setReserva(initReserva);
  };

const registrarReserva = async(e) => {
     if (validar(reserva.nombre,reserva.correo,reserva.telefono,reserva.restoran,reserva.comensales,reserva.fecha,reserva.horario))
        {
  e.preventDefault()

  let clave= reserva.id;
  try {
        await setDoc(doc(db, "Reservas", clave), {id: clave,...reserva});
  } catch (error) {
      console.log(error)
  } 
  setReserva(initReserva);
} 
}
return (
    <div>
        <div className="bg-dark text-bg-dark pb-2 ps-5   text-center">
            <h3> Actualizar Reservas </h3>
        </div>
        <div className=" p-3  text-center">
        <Grid container spacing={{ xs: 1, md: 3, lg:3}} columns={{ xs: 1, sm: 1, md: 3, lg: 3 }} display="flex" justifyContent="center">
            <Grid item  >
                <TextField name="correo" required label="Correo Electronico" variant="outlined"  
                    onChange={(e)=>handleChangeCorreo(e)} value={correo} /> 
             </Grid>
             <Grid item >
                <Button variant="contained" 
                          className="mt-3" 
                          color="success"  
                          startIcon={<SearchIcon />}  
                          onClick={recuperarReserva}> Buscar Reserva
                </Button> 
            </Grid>
            <Grid item  >
                <Button variant="contained" 
                      className="mt-3" 
                      color="success"  
                      startIcon={<DeleteIcon />}  
                      onClick={borrarReserva}> Cancelar Reserva
                </Button>
            </Grid>
          </Grid>
      
       </div>
        <Box sx={{ flexGrow: 1 ,}}>
        <Separador />
            <Grid container spacing={{ xs: 1, md: 4, lg: 5 }} columns={{ xs: 1, sm: 1, md: 2, lg: 2 }} display="flex" justifyContent="center">
            <Grid item  >
              <Box component="form" 
                      sx={{ '& > :not(style)': { m: 1, width: '50ch' }, 
                      display: 'flex', flexDirection: 'column', alignItems: 'center', }}   noValidate autoComplete="off">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="restoran-select">Restoran</InputLabel>
                  <Select native defaultValue="" name="restoran" required onChange={(e)=>handleChange(e)} value={reserva.restoran} label="Grouping">
                  <option aria-label="None" value="" />
                    <optgroup label="Seleccione el restoran">
                      <option value={'Apoquindo'}>Restoran Apoquindo</option>
                      <option value={'Manquehue'}>Restoran Manquehue</option>
                      <option value={'El Bosque'}>Restoran El Bosque</option>
                    </optgroup>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="horario-select">Comensales</InputLabel>
                  <Select native defaultValue="" name="comensales"  required onChange={(e)=>handleChange(e)} value={reserva.comensales} label="Grouping">
                  <option aria-label="None" value="" />
                    <optgroup label="Seleccione el número de personas">
                      <option value={2}>2 Personas</option>
                      <option value={3}>3 Personas</option>
                      <option value={4}>4 Personas</option>
                      <option value={5}>5 Personas</option>
                      <option value={6}>6 Personas</option>
                      <option value={7}>7 Personas</option>
                      <option value={8}>8 Personas</option>  
                      </optgroup>                   
                  </Select>
                </FormControl>
                <FormControl>
                    <input  name="fecha" type="date" min={fechaMin} max={fechaMax} onChange={(e)=>handleChange(e)} value={reserva.fecha}></input>
                  </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="horario-select">Horario</InputLabel>
                  <Select native defaultValue="" name="horario"  required onChange={(e)=>handleChange(e)} value={reserva.horario}  label="Grouping">
                    <option aria-label="None" value="" />
                    <optgroup label="Almuerzo">
                      <option value={'12:30'}>12:30</option>
                      <option value={'13:00'}>13:00</option>
                      <option value={'13:30'}>13:30</option>
                      <option value={'14:00'}>14:00</option>
                      <option value={'14:30'}>14:30</option>
                      <option value={'15:00'}>15:00</option>
                    </optgroup>
                    <optgroup label="Cena">
                      <option value={'19:00'}>19:00</option>
                      <option value={'19:30'}>19:30</option>
                      <option value={'20:00'}>20:00</option>
                      <option value={'20:30'}>20:30</option>
                      <option value={'21:00'}>21:00</option>
                      <option value={'21:30'}>21:30</option>
                    </optgroup>
                  </Select>
                </FormControl>
                 
                </Box>
            </Grid>
            <Grid item >
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch', marginTop: 2,}   }}   
                    noValidate autoComplete="off">
                    <TextField name="nombre" required label="Nombre" variant="outlined"  
                    onChange={(e)=>handleChange(e)} value={reserva.nombre}  />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch' },  }}   
                    noValidate autoComplete="off">
                    <TextField name="telefono" required type="number" label="teléfono" variant="outlined" 
                    onChange={(e)=>handleChange(e)} value={reserva.telefono}  />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch' }   }}   >
                    <TextField name="mensaje" label="Mensaje" variant="outlined"  multiline rows={8}
                    onChange={(e)=>handleChange(e)} value={reserva.mensaje}  />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '5s0ch' }   }}   >
                <Button variant="contained" 
                      className="mt-3" 
                      color="success"  
                      startIcon={<SaveAsIcon />}  
                      onClick={registrarReserva} > Actualizar
                    </Button>  
                  </Box>
            </Grid>            


        </Grid>
        </Box>
    </div>
  )
}

export default  Reservasmod

 