import * as React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../../config/Firebase'
import { collection, getDocs } from "firebase/firestore";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'restoran',headerName: 'Restoran',width: 150,editable: false,},
  { field: 'fecha',headerName: 'Fecha', width: 100, editable: false,},
  { field: 'horario', headerName: 'Horario', width: 80,editable: false,},
  { field: 'comensales', headerName: 'Mesa', type: 'number',width: 50, editable: false,},
  { field: 'nombre',headerName: 'Nombre', editable: false, width: 200,},
  { field: 'correo', headerName: 'Correo', editable: false, width: 100,},
  { field: 'telefono', headerName: 'Telefono', editable: false, width: 100,},
  { field: 'mensaje', headerName: 'Mensaje', editable: false, width: 300,},
  { field: 'click', type: 'button', width: 100,},
];


export default function Reservassadm() {
   
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const getRows = async () => {
      try {
        const collectionRef = collection(db, "Reservas");
        const response = await getDocs(collectionRef);

        const docs = response.docs.map((doc) => {
          const data = doc.data(); 
          data.id = doc.id;
          return data;
        });

        setRows(docs);
      } catch (error) {
        console.log(error);
      }
    };

    getRows();
    
  }, []);



  return (
    <div>
    <div className="bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center">
      <h1>Lista de Reservas</h1>
    </div>

    <Box sx={{ height: 400, width: '100%' ,boxShadow: 2,
        border: 2,
        borderColor: 'primary.light',
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