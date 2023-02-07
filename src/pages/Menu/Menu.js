import {Card,Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate}  from 'react-router-dom';
import Button from '@mui/material/Button';
//import { useState } from 'react';


const Menu = ({categoria, setCategoria}) => {

  let categoriaMenu=[
      {categoria: 'Ensaladas y Antipastos', descripcion: 'Ensaladas y Antipastos', url: '/menu/ENSALADAS01.jpg'},
      {categoria: 'Carnes y Pescados', descripcion: 'Carnes y Pescados',url: '/menu/CARNES01.jpg'},
      {categoria: 'Pastas', descripcion: 'Pastas',url: '/menu/PASTAS01.jpg'},
      {categoria: 'Pizzas', descripcion: 'Pizzas' , url: '/menu/PIZZAS01.jpg'},
      {categoria: 'Postres', descripcion: 'Postres', precio: '8000', url: '/menu/POSTRES01.jpg'},
      {categoria: 'Vinos y Bebidas', descripcion: 'Vinos y Bebidas', precio: '', url: '/menu/VINOS01.jpg'},
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
            <Card.Img variant="top" src={p.url}  height={'240'}/>
            <Card.Body>
              <Card.Text>
              <Button variant="outlined" onClick={() => handleCategoria(p.categoria)}>{p.descripcion} </Button>
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