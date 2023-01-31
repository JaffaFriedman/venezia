import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { db } from '../../../config/Firebase'
import { collection, getDocs } from "firebase/firestore";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

interface Column {
  id: 'fecha' | 'horario' | 'comensales' | 'nombre' | 'correo' | 'telefono' |  'mensaje';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'fecha', label: 'fecha', minWidth: 50 },
  { id: 'horario', label: 'horario', minWidth: 50 },
  { id: 'comensales', label: 'Tamaño de Mesa', minWidth: 30 },
  { id: 'nombre', label: 'Nombre', minWidth: 100 },
  { id: 'correo', label: 'Correo', minWidth: 100 },
  { id: 'telefono', label: 'Teléfono', minWidth: 50 },
  { id: 'mensaje', label: 'Mensaje', minWidth: 200 },
];


export default function Reservassadm() {
  const [restoran, setRestoran] =  useState('');
  const [rows, setRows] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  

    const getRows = async () => {
      try {
        const collectionRef = collection(db, restoran);
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

 
 
  const handleChangeRestoran = (event: ChangeEvent<HTMLInputElement>) => {
    setRestoran(event.target.value);
    getRows();  
    console.log(rows);
    
 };



  return (
    <div>
    <div className="bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center">
      <h1>Lista de Reservas {restoran}</h1>
    </div>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="restoranLabel">Seleccione el Restaurant</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={restoran}
          onChange={handleChangeRestoran}
          label="Restoran"
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          <MenuItem value={'Borde Rio'}>Borde Rio</MenuItem>
          <MenuItem value={'El Bosque'}>El Bosque</MenuItem>
          <MenuItem value={'Las Condes'}>Las Condes</MenuItem>
        </Select>
      </FormControl>
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 50, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}
