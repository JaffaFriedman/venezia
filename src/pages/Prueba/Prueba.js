import * as React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../config/Firebase'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Separador from '../../pages/Separador/Separador';
import InputLabel from '@mui/material/InputLabel';
import Select  from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { collection, query, where, getDocs   } from "firebase/firestore";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 


export default function Prueba() {
  const fechahoy = new Date();
  const fechaMin = fechahoy.toISOString().substring(0,10);
  fechahoy.setDate(fechahoy.getDate() + 60);
  const fechaMax =  fechahoy.toISOString().substring(0,10);
 
 
  const initReserva = {
    restoran: 'Todos',
    fecha: fechaMin,
    correo: ''
  }

  const [reserva, setReserva] = useState(initReserva);
  const  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReserva({
      ...reserva,
       [name]: value,
    });
     
  }

 
 
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'restoran',headerName: 'Restoran',width: 100,editable: false,},
    { field: 'fecha',headerName: 'Fecha', width: 120, editable: true,},
    { field: 'horario', headerName: 'Horario', width: 80,editable: true,},
    { field: 'comensales', headerName: 'Mesa', type: 'number',width: 50, editable: true,},
    { field: 'nombre',headerName: 'Nombre', editable: true, width: 200,},
    { field: 'correo', headerName: 'Correo', editable: true, width: 200,},
    { field: 'telefono', headerName: 'Telefono', editable: true, width: 100,},
    { field: 'mensaje', headerName: 'Mensaje', editable: true, width: 300,},
  ];

  const hoy= new Date().toISOString().substring(0,10);
  const [titulo, setTitulo] = useState('Reservas para el '+hoy);
  const [rows, setRows] = useState([]);
 
  useEffect(() => {
    const getRows = async () => {
      try {
        let q = collection(db, "Reservas");    
          q = query(q, where("fecha", "==",new Date().toISOString().substring(0,10))   );
          const response = await getDocs(q);
          const docs = response.docs.map((doc) => {
          const data = doc.data(); 
          data.id=doc.id
          return data ;
        });

        setRows(docs);
      } catch (error) {
        console.log(error);
      }
    };

    getRows();
  }, []);
  
  const getRowsReserva = async () => {
    try {
      let q = collection(db, "Reservas");
      console.log('restoran',reserva.restoran);
      console.log('fecha',reserva.fecha);
      console.log('correo',reserva.correo);
      if ( reserva.restoran==="Todos" && reserva.correo==="")
          q = query(q,  where("fecha", "==", reserva.fecha) ); 
      if ( reserva.restoran!=="Todos" && reserva.correo==="")
        q = query(q, where("restoran",  "==", reserva.restoran), 
            where("fecha", "==", reserva.fecha));
      if ( reserva.restoran==="Todos" && reserva.correo!=="")
        q = query(q, where("fecha", "==", reserva.fecha),
          where("correo",  "==", reserva.correo )); 
      if ( reserva.restoran!=="Todos" && reserva.correo!=="")
        q = query(q, where("restoran",  "==", reserva.restoran), 
          where("fecha", "==", reserva.fecha),
          where("correo",  "==", reserva.correo )); 
          setTitulo('Reservas '  );  
      const response = await getDocs(q);
      const docs = response.docs.map((doc) => {
        const data = doc.data(); 
        data.id=doc.id
        return data ;
      });
      setRows(docs);
    } catch (error) {
      console.log(error);
    }
  };
 
    const buscarReserva = async(e) => {
      e.preventDefault();
      getRowsReserva();
      } 

    return (
      <div>
      <div className="bg-dark text-bg-dark pb-2 ps-5 text-center">
        <h2>{titulo}</h2>
      </div>

      <Separador />
      <div className="mt-2">
      </div>
      <Box component="form" 
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, 
                display: 'flex', flexDirection: 'row', alignItems: 'center', }}   noValidate autoComplete="off">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="restoran-select">restoran</InputLabel>
                  <Select native defaultValue="" name="restoran"  onChange={ handleChange} value={reserva.restoran} label="Grouping">
                  <option aria-label="None" value="" />
                    <optgroup label="Seleccione el restoran">
                      <option value={'Todos'}>Todos</option>
                      <option value={'Apoquindo'}>Restoran Apoquindo</option>
                      <option value={'Manquehue'}>Restoran Manquehue</option>
                      <option value={'El Bosque'}>Restoran El Bosque</option>
                    </optgroup>
                  </Select>
                </FormControl>
                  <input name="fecha" id="fecha" type="date"  min={fechaMin} max={fechaMax} onChange={ handleChange} value={reserva.fecha}></input>
               <TextField name="correo" label="Correo Electronico" variant="outlined"  
                     onChange={ handleChange}  value={reserva.correo} />
                <Button variant="contained" 
                      className="mt-3" 
                      color="success"  
                      onClick={buscarReserva} > Buscar Reserva
                </Button> 
      </Box>
      <Box sx={{ height: 400, width: '100%' , 
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },}}>
  
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
      </div>
    );
  }
  