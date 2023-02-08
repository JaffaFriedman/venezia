import * as React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../../config/Firebase'
import { collection, getDocs } from "firebase/firestore";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Separador from '../../Separador/Separador';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'nombre',headerName: 'Nombre', editable: false, width: 200,},
  { field: 'correo', headerName: 'Correo', editable: false, width: 100,},
  { field: 'telefono', headerName: 'Telefono', editable: false, width: 100,},
  { field: 'asunto', headerName: 'Asunto', editable: false, width: 100,},
  { field: 'mensaje', headerName: 'Mensaje', editable: false, width: 300,},
];

const fila = 
{ id: '',
  nombre: '',
  correo: '',
  telefono: '',
  asunto: '',
  mensaje: ''
}

let docs = [];
export default function Contactosadm() {
let rows=[];
  //const [rows, setRows] = useState([]);
  useEffect(() => {
    const getRows = async () => {
      try {
        const collectionRef = collection(db, "Contactos");
        const response = await getDocs(collectionRef);
         rows=response.docs.map((doc) => {
          fila.id = doc.id;
          fila.asunto = doc.data().contacto.asunto;
          fila.nombre = doc.data().contacto.nombre;
          fila.correo = doc.data().contacto.correo;
          fila.telefono = doc.data().contacto.telefono;
          fila.mensaje = doc.data().contacto.mensaje;
          return(fila);
        });
      
      } catch (error) {
        console.log(error);
      }
    };
 
    getRows();
    
  }, []);



  return (
    <div>
    <div className="bg-dark text-bg-dark pb-2 ps-5 text-center">
      <h2>Lista de Reservas</h2>
    </div>
    <Separador />
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
