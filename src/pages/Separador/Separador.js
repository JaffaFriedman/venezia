import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


export default function Separador() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack >
        <Box component="span" sx={{  border: '2px solid  black' }}></Box>
        <Box component="span" sx={{  border: '2px solid  red' }}></Box>
        <Box component="span" sx={{  border: '2px solid  white' }}></Box>
        <Box component="span" sx={{  border: '2px solid  green' }}></Box>
        <Box component="span" sx={{  border: '2px solid  black' }}></Box>
      </Stack>
    </Box>
  );
}
