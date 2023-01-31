import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { db } from '../../../config/Firebase'
import { collection, getDocs } from "firebase/firestore";

export default function Contactoadm() {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getRows = async () => {
      try {
        const collectionRef = collection(db, "Contactos");
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Correo Electronico</TableCell>
            <TableCell align="right">Teléfono</TableCell>
            <TableCell align="right">Asunto</TableCell>
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
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.correo}</TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
              <TableCell align="right">{row.asunto}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
