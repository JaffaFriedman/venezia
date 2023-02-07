import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
 
import {Container, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Locales  = () => {
   let restaurantes=[

    { nombre: 'Ristoranti Apoquindo', 
      cena: '19:00 a 24:00', 
      almuerzo: '12:30 a 16:00', 
      direccion: 'Apoquindo 6410',
      imagen: '/locales/LOCAL01.jpg', 
      comoLlegar:'https://www.waze.com/es-419/live-map/directions/apoquindo-6410,-of.-6410-las-condes?to=place.w.189662650.1896888643.7148182', telefono: '+562 5555 8888'},
      
      { nombre: 'Ristoranti Manquehue', 
      cena: '19:00 a 24:00', 
      almuerzo: '12:30 a 16:00', 
      direccion: 'Manquehue Sur 895', 
      imagen: '/locales/LOCAL03.jpg', 
      comoLlegar:'https://www.waze.com/es-419/live-map/directions/cl/region-metropolitana/las-condes/av.-manquehue-sur-897?to=place.ChIJbQ698ubOYpYRg6Tv-xG1QZA', 
      telefono: '+562 5555 9999'},

      { nombre: 'Ristoranti El Bosque', 
      cena: '19:00 a 24:00', 
      almuerzo: '12:30 a 16:00', 
      direccion: 'San Sebastian 2839',
      imagen: '/locales/LOCAL07.jpg', 
      comoLlegar:'https://www.waze.com/es-419/live-map/directions/belenus-san-sebastian-2839-las-condes?to=place.w.189662650.1896626498.9532813', 
      telefono: '+562 5555 7777'},
   ];
  return (
    <div  className="mb-5">
        <div className="bg-dark text-bg-dark pb-3 ps-5  mb-5 text-center">
            <h3>Nuestros Locales </h3>
        </div>       
        <Container>
            <Row md={1}  lg={3} className="g-4 "> 
            { restaurantes.map((p)=>(
                <Col>   
                    <Card variant="outlined" sx={{ width: 320 }}>
                      <Typography level="h1" fontSize="lg" sx={{ mb: 0.5 }}>
                        {p.nombre}
                      </Typography>
                      <Typography level="h1"> {p.direccion}</Typography>
                     
                          <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                            <img
                              src= {p.imagen}
                              loading="lazy"
                              alt=""
                            />
                          </AspectRatio>
                           <Box sx={{ display: 'flex' }}>
                        <div>

                          <Typography level="body2">Horarios</Typography>
                          <Typography level="body3">Almuerzo {p.almuerzo}</Typography>
                          <Typography level="body3">Cena {p.cena} </Typography>
                          <Typography level="body3">Telefono {p.telefono} </Typography>
                          <Button variant="outline-secondary" className="mt-3"  size="sm" href={p.comoLlegar}>Como llegar</Button>
                        </div>
 
                      </Box>
                    </Card>
                </Col>
            ))}
        </Row>
        </Container>
    </div>
  );
}
export default  Locales
