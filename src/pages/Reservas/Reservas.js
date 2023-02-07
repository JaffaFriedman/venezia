import { db } from "../../config/Firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
const Reservas  = () => {

let hoy= new Date();
const inicio=hoy.toISOString().substring(0,10);
hoy.setDate(hoy.getDate() + 60);
let fin= hoy.toISOString().substring(0,10);



const initReserva = {
  restoran: '',
  comensales: '',
  fecha: inicio,
  horario: '',
  nombre: '',
  correo: '',
  telefono: '',
  mensaje: ''
}

const [reserva, setReserva] = useState('');
const  handleInputChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setReserva({
    ...reserva,
     [name]: value,
  });
 
}


const registrarReserva = async(e) => {
  e.preventDefault()
  try {
      const collectionRef = collection(db, 'Reservas')
      await addDoc(collectionRef, {
        reserva
      })
  } catch (error) {
      console.log(error)
  } 
  console.log(reserva); 
  setReserva(initReserva);
} 



return (
    <div>
        <div className="bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center">
            <h3> Bienvenido a nuestra página de Reservas </h3>
            <h6>puede realizar su reserva aqui.</h6>
        </div>
        <Box sx={{ flexGrow: 1 ,}}>
        <Grid container spacing={{ xs: 1, md: 4, lg: 5 }} columns={{ xs: 1, sm: 1, md: 2, lg: 2 }} display="flex" justifyContent="center">
            <Grid item  >
              <Box component="form" 
                      sx={{ '& > :not(style)': { m: 1, width: '24ch' }, 
                      display: 'flex', flexDirection: 'column', alignItems: 'center', }}   noValidate autoComplete="off">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="restoran-select">Restoran</InputLabel>
                  <Select native defaultValue="" name="restoran"  onChange={(e)=>handleInputChange(e)} value={reserva.restoran} label="Grouping">
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
                  <Select native defaultValue="" name="comensales"  onChange={(e)=>handleInputChange(e)} value={reserva.comensales} label="Grouping">
                  <option aria-label="None" value="" />
                    <optgroup label="Seleccione el número de personas">
                      <option value={'2'}>2 Personas</option>
                      <option value={'3'}>3 Personas</option>
                      <option value={'4'}>4 Personas</option>
                      <option value={'5'}>5 Personas</option>
                      <option value={'6'}>6 Personas</option>
                      <option value={'7'}>7 Personas</option>
                      <option value={'8'}>8 Personas</option>  
                      </optgroup>                   
                  </Select>
                </FormControl>
                <label for="fecha">Fecha</label>
                  <input name="fecha" type="date"  min={inicio} max={fin}  onChange={(e)=>handleInputChange(e)} value={reserva.fecha} > 
                </input>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="horario-select">Horario</InputLabel>
                  <Select native defaultValue="" name="horario"  onChange={(e)=>handleInputChange(e)} value={reserva.horario}  label="Grouping">
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
 
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '30ch' },   }}   noValidate autoComplete="off">
                    <Button variant="contained" 
                      className="mt-3" 
                      color="success"  
                      startIcon={<SendIcon />}  
                      onClick={registrarReserva} > Enviar
                    </Button>                   
                </Box>
             
            </Grid>
            <Grid item >
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch', marginTop: 2,}   }}   
                    noValidate autoComplete="off">
                    <TextField name="nombre" label="Nombre" variant="outlined"  
                    onChange={(e)=>handleInputChange(e)} value={reserva.nombre}  />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '24ch' },  }}   
                    noValidate autoComplete="off">
                    <TextField name="correo" label="Correo Electronico" variant="outlined"  
                      onChange={(e)=>handleInputChange(e)} value={reserva.correo} />
                    <TextField name="telefono" label="Teléfono" variant="outlined" 
                    onChange={(e)=>handleInputChange(e)} value={reserva.telefono}  />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch' }   }}   >
                    <TextField name="mensaje" label="Mensaje" variant="outlined"  multiline rows={8}
                    onChange={(e)=>handleInputChange(e)} value={reserva.mensaje}  />
                </Box>

            </Grid>
        </Grid>
        </Box>
    </div>
  )
}

export default  Reservas

 