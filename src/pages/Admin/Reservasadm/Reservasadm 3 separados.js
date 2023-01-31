import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { db } from '../../../config/Firebase'
import { collection, getDocs } from "firebase/firestore";
import FormControl from '@mui/material/FormControl';
import { InputLabel, MenuItem , Select } from '@mui/material';

export default function Reservassadm() {
  const [restoran, setRestoran] =  useState('');
     
  const [rows, setRows] = useState([]);
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
 
  const handleChangeRestoran = (event: SelectChangeEvent) => {
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
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell align="right">Restoran</TableCell>
            <TableCell align="right">Horario</TableCell>
            <TableCell align="right">Tamaño Mesa</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Correo Electronico</TableCell>
            <TableCell align="right">Teléfono</TableCell>
            <TableCell align="right">Mensaje</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.map((row) => (
            <TableRow
              key={row.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fecha}
              </TableCell>
              <TableCell align="right">{row.restoran}</TableCell>
              <TableCell align="right">{row.horario}</TableCell>
              <TableCell align="right">{row.comensales}</TableCell>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.correo}</TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
              <TableCell align="right">{row.mensaje}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
