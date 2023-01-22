import {Card,Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Platos from '../Platos/Platos';
  
import { React, useState}  from 'react'
 
 

const Menu = () => {


  let categoriaMenu=[
        {categoria: 'Ensaladas', descripcion: 'Ensaladas y Antipastos', url: 'https://www.shutterstock.com/image-photo/fresh-prosciutto-cheese-capers-close-600w-245276638.jpg'},
        {categoria: 'Pescados', descripcion: 'Pescados',url: 'https://www.shutterstock.com/image-photo/parrot-fish-steak-600w-95619760.jpg'},
        {categoria: 'Carnes', descripcion: 'Carnes y Aves' , url: 'https://www.shutterstock.com/image-photo/closeup-view-delicious-grilled-beef-600w-1559572103.jpg'},
        {categoria: 'Pastas', descripcion: 'Pastas',url: 'https://www.shutterstock.com/image-photo/pasta-pappardelle-beef-ragout-sauce-600w-1494176960.jpg'},
        {categoria: 'Postres', descripcion: 'Postres', precio: '8000', url: 'https://www.shutterstock.com/image-photo/tasteful-chocolate-pastry-mousse-isolated-600w-78632026.jpg'},
        {categoria: 'Vinos', descripcion: 'Vinos y Bebidas', precio: '', url: 'https://www.shutterstock.com/image-photo/red-wine-glass-bunch-grapes-600w-284304515.jpg'},
    ];

    //<button onClick={ ()=> navigate('menu/${product.id}')}>Menu  </button>
 //   <button onClick={ ()=> navigate('platos/${product.id}')}>Menu  </button>
    const [data, setData] = useState('');

 
    
      // De forma similar a componentDidMount y componentDidUpdate
     // useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
       // document.title = `You clicked ${count} times`;
      //});

    const parentToChild = (p) => {
      console.log(p)
      setData("de "+p.descripcion);
      return (<Platos parentToChild={p.descripcion}/>);
    }
    
    return  (
      <div>
        <div className="bg-dark text-bg-dark p-2 ps-5  mb-2 text-center">
          <h3> Menú {data}</h3>
        </div>
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4 text-center">  
        { categoriaMenu.map((p)=>
        ( <Col>
        
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={p.url}  height={'250'}/>
            <Card.Body>
              <Card.Text>
              <Card.Link href="/platos">{p.descripcion}</Card.Link>
               <div>
                    <button primary onClick={() => parentToChild(p)}>Click Parent</button>
              </div>
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