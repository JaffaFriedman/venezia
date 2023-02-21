import * as React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../../config/Firebase'
import { DataGrid, GridColDef  } from '@mui/x-data-grid';
import Separador from '../../Separador/Separador';
import { FormControl, InputLabel, Select, Button, Box } from '@mui/material';
import { collection, query, where, getDocs /*,  doc, setDoc */ } from "firebase/firestore";
 
export default function Reservashoy() {
  const fechahoy = new Date();
  const fechaMin = fechahoy.toISOString().substring(0,10);
  fechahoy.setDate(fechahoy.getDate() + 60);
  const fechaMax =  fechahoy.toISOString().substring(0,10);
 
 
  const initReserva = {
    restoran: 'Todos',
    fecha: fechaMin 
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
    { field: 'fecha',headerName: 'Fecha', width: 120, editable: false,},
    { field: 'horario', headerName: 'Horario', width: 80,editable: false,},
    { field: 'comensales', headerName: 'Mesa', type: 'number',width: 50, editable: false,},
    { field: 'nombre',headerName: 'Nombre', editable: false, width: 200,},
    { field: 'correo', headerName: 'Correo', editable: false, width: 200,},
    { field: 'telefono', headerName: 'Telefono', editable: false, width: 100,},
    { field: 'mensaje', headerName: 'Mensaje', editable: false, width: 300,},
  ];

  const hoy= new Date().toISOString().substring(0,10);
  const [titulo, setTitulo] = useState('Reservas para el '+hoy);
  const [rows, setRows] = useState([]);
 
  useEffect(() => {
    let q = collection(db, "Reservas");    
    const dia=new Date().toISOString().substring(0,10);
    setTitulo('Reservas para el '+dia);
    q = query(q, where("fecha", "==",dia ) );
    const getRows = async () => {
      try {
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
    let q = collection(db, "Reservas");
    if ( reserva.restoran==="Todos"  )
       { q = query(q,  where("fecha", "==", reserva.fecha) ); 
       setTitulo('Reservas para el '+ reserva.fecha); }
    if ( reserva.restoran!=="Todos"  )
      { q = query(q, where("restoran",  "==", reserva.restoran), 
          where("fecha", "==", reserva.fecha));
          setTitulo('Reservas del Restoran '+ reserva.restoran + ' para el '+ reserva.fecha); }
    try {
      const response = await getDocs(q);
      const docs = response.docs.map((doc) => {
        const data = doc.data(); 
        data.id=doc.id
        return data ;
      });
      setRows(docs);
      console.log('rows',rows);
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
          <h3>{titulo}</h3>
        </div>
        <Box 
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, 
                display: 'flex', flexDirection: 'row', alignItems: 'center', }} noValidate autoComplete="off">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="restoran-select">restoran</InputLabel>
                  <Select  native  defaultValue="" name="restoran" onChange={(e)=>handleChange(e)} variant="outlined" value={reserva.restoran} label="Grouping">
                  <option aria-label="None" value="" />
                    <optgroup label="Seleccione el restoran">
                      <option value={'Todos'}>Todos</option>
                      <option value={'Apoquindo'}>Restoran Apoquindo</option>
                      <option value={'Manquehue'}>Restoran Manquehue</option>
                      <option value={'El Bosque'}>Restoran El Bosque</option>
                  </optgroup>
                  </Select>
                  </FormControl>
                  <FormControl>
                    <input  name="fecha" type="date" min={fechaMin} max={fechaMax} onChange={(e)=>handleChange(e)} value={reserva.fecha}></input>
                  </FormControl>
                  <Button variant="contained" 
                        className="mt-3" 
                        color="success"  
                        onClick={buscarReserva} > Buscar Reservas
                  </Button> 
        </Box>
        <Separador />
        <div className="mt-2"> </div>
        <Box sx={{ height: 400, width: '100%' , '& .MuiDataGrid-cell:hover': { color: 'primary.main',},}}>
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
  