import {Card,Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate}  from 'react-router-dom';
import Button from '@mui/material/Button';
//import { useState } from 'react';


const Menu = ({categoria, setCategoria}) => {

  let categoriaMenu=[
      {categoria: 'Ensaladas', descripcion: 'Ensaladas y Antipastos', url: 'https://www.shutterstock.com/image-photo/fresh-prosciutto-cheese-capers-close-600w-245276638.jpg'},
      {categoria: 'Pescados', descripcion: 'Pescados',url: 'https://www.shutterstock.com/image-photo/parrot-fish-steak-600w-95619760.jpg'},
      {categoria: 'Carnes', descripcion: 'Carnes y Aves' , url: 'https://www.shutterstock.com/image-photo/closeup-view-delicious-grilled-beef-600w-1559572103.jpg'},
      {categoria: 'Pastas', descripcion: 'Pastas',url: 'https://www.shutterstock.com/image-photo/pasta-pappardelle-beef-ragout-sauce-600w-1494176960.jpg'},
      {categoria: 'Postres', descripcion: 'Postres', precio: '8000', url: 'https://www.shutterstock.com/image-photo/tasteful-chocolate-pastry-mousse-isolated-600w-78632026.jpg'},
      {categoria: 'Vinos', descripcion: 'Vinos y Bebidas', precio: '', url: 'https://www.shutterstock.com/image-photo/red-wine-glass-bunch-grapes-600w-284304515.jpg'},
  ];
 
    const navigate=useNavigate();
    const handleCategoria = (p) => 
    { console.log('menu', p);
      setCategoria((p));
      navigate('/Platos');
    } 

    return  (
      <div>
        <div className="bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center">
          <h3> Menú {categoria}</h3>
        </div>
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4 text-center">  
        { categoriaMenu.map((p)=>
        ( <Col>    
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={p.url}  height={'250'}/>
            <Card.Body>
              <Card.Text>
              <Button variant="outlined" onClick={() => handleCategoria(p.categoria)}>{p.categoria} </Button>
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        ) )
        }
        </Row>
        </Container>
        </div>
    )
}

export default Menu