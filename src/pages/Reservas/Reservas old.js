import { db } from "../../config/Firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const Reservas  = () => {

const valorIncial = {
  restoran: '',
  comensales: '',
  fecha: '',
  horario: '',
  nombre: '',
  correo: '',
  telefono: '',
  mensaje: ''
}

const [user, setUser] = useState(valorIncial);


 // funciones controladoras del form
 
 /*
 const cathInputs = (e) => {
     e.preventDefault()
     const {name, value} = e.target;
     setUser({
         ...user,
         [name]: value
     })
 }
*/ 

const reservarMesa = async(e) => {
     e.preventDefault()
     try {
         const collectionRef = collection(db, 'Reservas')
         await addDoc(collectionRef, {
             ...user
         })
     } catch (error) {
         console.log(error)
     }
     setUser({...valorIncial})
 }

let hoy= new Date();
const inicio=hoy.toISOString().substring(0,10);
hoy.setDate(hoy.getDate() + 60);
let fin= hoy.toISOString().substring(0,10);

 
  const [restoran, setRestoran] =  useState('');
  const handleChangeRestoran = (event: ChangeEvent<HTMLInputElement>) => {
    setRestoran(event.target.value);
    user.restoran=event.target.value;
  };

  const [comensales, setComensales] =  useState('');
  const handleChangeComensales = (event: SelectChangeEvent) => {
    setComensales(event.target.value);
    user.comensales=event.target.value;
  };

  const handleChangeFecha = (event: ChangeEvent<HTMLInputElement>) => {
    user.fecha=event.target.value;
  };
 
  const handleChangeHorario = (event: ChangeEvent<HTMLInputElement>) => {
    user.horario=event.target.value;
  };

  const handleChangeNombre = (event: ChangeEvent<HTMLInputElement>) => {
    user.nombre=event.target.value;
  };
 
  const handleChangeCorreo = (event: ChangeEvent<HTMLInputElement>) => {
    user.correo=event.target.value;
  };


  const handleChangeTelefono = (event: ChangeEvent<HTMLInputElement>) => {
    user.telefono=event.target.value;
  };

 
  const handleChangeMensaje = (event: ChangeEvent<HTMLInputElement>) => {
    user.mensaje=event.target.value;
  };


  return (
    <div>
        <div className="bg-dark text-bg-dark p-2 ps-5  mb-2 text-center">
            <h3> Reservas </h3>
        </div>
        <Box sx={{ flexGrow: 1 ,}}>
        <Grid container spacing={{ xs: 1, md: 4, lg: 5 }} columns={{ xs: 1, sm: 1, md: 2, lg: 2 }} display="flex" justifyContent="center">
            <Grid item  >
              <Box component="form" 
                      sx={{ '& > :not(style)': { m: 1, width: '40ch' }, 
                      display: 'flex', flexDirection: 'column', alignItems: 'center', }}   noValidate autoComplete="off">
                <FormControl>
                    <FormLabel id="restoranLabel">Seleccione el Restaurant</FormLabel>
                    <RadioGroup
                      aria-labelledby="restoranLabelp"
                      name="restoran-group"
                      value={restoran}
                      onChange={handleChangeRestoran }
                    >
                      <FormControlLabel value="Borde Rio" control={<Radio />} label="Borde Rio" />
                      <FormControlLabel value="El Bosque" control={<Radio />} label="El Bosque" />
                      <FormControlLabel value="Las Condes" control={<Radio />} label="Las Condes" />
                    </RadioGroup>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="comensalesLavel">Tamaño de la mesa</InputLabel>
                    <Select
                      labelId="comensalesLabel"
                      id="comensales"
                      value={comensales}
                      label="Número de Personas"
                      onChange={handleChangeComensales}
                    >
                      <MenuItem value={2}>2 Personas</MenuItem>
                      <MenuItem value={3}>3 Personas</MenuItem>
                      <MenuItem value={4}>4 Personas</MenuItem>
                      <MenuItem value={5}>5 Personas</MenuItem>
                      <MenuItem value={6}>6 Personas</MenuItem>
                      <MenuItem value={7}>7 Personas</MenuItem>
                      <MenuItem value={8}>8 Personas</MenuItem>
                    </Select>
                </FormControl>
                <label for="fecha">Fecha</label>
                  <input id="fecha" type="date"  value={inicio}  min={inicio} max={fin} onChange={handleChangeFecha}> 
                </input>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="horario-select">Horario</InputLabel>
                  <Select native defaultValue="" id="horario-select" onChange={handleChangeHorario} label="Grouping">
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
                    <TextField id="nombre" label="Nombre" variant="outlined"
                    onChange={handleChangeNombre} />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '24ch' },  }}   
                    noValidate autoComplete="off">
                    <TextField id="correo" label="Correo Electronico" variant="outlined"  
                     onChange={handleChangeCorreo} />
                    <TextField id="telefono" label="Teléfono" variant="outlined" 
                     onChange={handleChangeTelefono} />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch' }   }}   >
                    <TextField id="mensaje" label="Mensaje" variant="outlined"  multiline rows={6}
                    onChange={handleChangeMensaje} />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '40ch',  mt: 1 }   }}>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={reservarMesa}> 
                              Confirma Reserva
                    </Button>
                </Box>
            </Grid>
        </Grid>
        </Box>
    </div>
  )
}

export default  Reservas

 