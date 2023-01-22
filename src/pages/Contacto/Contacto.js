import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
 

import Button from '@mui/material/Button';

const Contacto = () => {

    return (
        <div>
            <div className="bg-dark text-bg-dark p-2 ps-5 text-center">
            <h3> Formulario de Contacto </h3>
            </div>
            <div className="m-5 text-center">
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '80ch', marginTop: 2,}   }}   noValidate autoComplete="off">
                    <TextField id="nombre" label="Nombre" variant="outlined" />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '39ch' },  }}   noValidate autoComplete="off">
                    <TextField id="correo" label="Correo Electronico" variant="outlined"  helperText="Será nombre de su cuenta"/>
                    <TextField id="telefono" label="Teléfono" variant="outlined" />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '80ch' }   }}   noValidate autoComplete="off">
                    <TextField id="asunto" label="Asunto" variant="outlined" />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '80ch' }   }}   noValidate autoComplete="off">
                    <TextField id="mensaje" label="Mesaje" variant="outlined"  multiline rows={6}/>
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '40ch' },   }}   noValidate autoComplete="off">
                    <Button variant="contained" startIcon={<SaveIcon />}
                             href="/login"> Enviar
                    </Button>                   
                </Box>
            </div>
        </div>
    )
}

export default Contacto