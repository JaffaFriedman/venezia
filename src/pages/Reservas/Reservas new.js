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
import { db } from "../../config/Firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

let hoy= new Date();
const inicio=hoy.toISOString().substring(0,10);
hoy.setDate(hoy.getDate() + 60);
let fin= hoy.toISOString().substring(0,10);


const valorIncial = {
    restoran: '',
    comensal: '',
    fecha: inicio,
    horario: '',
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
}
  
const Reservas  = () => {
  let reserva=valorIncial;
  
  const [comensal, setComensal] =  useState('');
  const handleChangeComensal = (event: SelectChangeEvent) => {
    setComensal(event.target.value);
  };

  const [restoran, setRestoran] =  useState('');
  const handleChangeRestoran = (event: ChangeEvent<HTMLInputElement>) => {
    setRestoran(event.target.value);
  };
 
 
 const [user, setUser] = useState(valorIncial);

 // funciones controladoras del form

 const cathInputs = (e) => {
     e.preventDefault()
     const {name, value} = e.target;
    setUser({
         ...user,
         [name]: value
     })
 }

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
                      <FormControlLabel value="1" control={<Radio />} label="Borde Rio" />
                      <FormControlLabel value="2" control={<Radio />} label="El Bosque" />
                      <FormControlLabel value="3" control={<Radio />} label="Las Condes" />
                    </RadioGroup>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="comensalLavel">Tamaño de la mesa</InputLabel>
                    <Select
                      labelId="comensalLabel"
                      id="comensal"
                      value={comensal}
                      label="Número de Personas"
                      onChange={handleChangeComensal}
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
                  <input id="fecha" type="date"  value={inicio}  min={inicio} max={fin}> 
                </input>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="horario-select">Horario</InputLabel>
                  <Select native defaultValue="" id="horario-select" label="Grouping">
                    <option aria-label="None" value="" />
                    <optgroup label="Almuerzo">
                      <option value={1}>12:30</option>
                      <option value={2}>13:00</option>
                      <option value={3}>13:30</option>
                      <option value={4}>14:00</option>
                      <option value={5}>14:30</option>
                      <option value={5}>15:00</option>
                    </optgroup>
                    <optgroup label="Cena">
                      <option value={3}>19:00</option>
                      <option value={4}>19:30</option>
                      <option value={3}>20:00</option>
                      <option value={4}>20:30</option>
                      <option value={3}>21:00</option>
                      <option value={4}>21:30</option>
                    </optgroup>
                  </Select>
                </FormControl>

              </Box>
            </Grid>
            <Grid item >
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch', marginTop: 2,}   }}   
                    noValidate autoComplete="off">
                    <TextField id="nombre" label="Nombre" variant="outlined"
                    onChange={cathInputs} value={user.nombre} />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '24ch' },  }}   
                    noValidate autoComplete="off">
                    <TextField id="correo" label="Correo Electronico" variant="outlined"  
                     onChange={cathInputs} value={user.correo}/>
                    <TextField id="telefono" label="Teléfono" variant="outlined" 
                     onChange={cathInputs} value={user.telefono}/>
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch' }   }}   
                     noValidate autoComplete="off">
                    <TextField id="mensaje" label="Mensaje" variant="outlined"  multiline rows={6}
                    onChange={cathInputs} value={user.mensaje}/>
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '40ch',  mt: 1 }   }}   
                    noValidate autoComplete="off">
                    <Button variant="contained" startIcon={<SaveIcon />}
                                      onSubmit={reservarMesa}> Confirma Reserva
                    </Button>
                </Box>
            </Grid>
        </Grid>
        </Box>
    </div>
  )
}

export default  Reservas

 