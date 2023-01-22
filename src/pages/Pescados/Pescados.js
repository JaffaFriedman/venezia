
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function Pescados( ) {
   
    let platos=[
      {id: 41,categoria: 'Pescados', descripcion: 'Atun con vegetales', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/grilled-tuna-steak-vegetables-on-600w-1954733485.jpg'},
      {id: 42,categoria: 'Pescados', descripcion: 'Corvina a la crema', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/parrot-fish-steak-600w-95619760.jpg'},
      {id: 43,categoria: 'Pescados', descripcion: 'Salmon grillado con vegetales', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/grilled-salmon-broccoli-tomatoes-beans-600w-1032826327.jpg'},
      {id: 44,categoria: 'Pescados', descripcion: 'Atun con vegetales', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/grilled-tuna-steak-vegetables-on-600w-1954733485.jpg'},
      {id: 45,categoria: 'Pescados', descripcion: 'Corvina a la crema', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/parrot-fish-steak-600w-95619760.jpg'},
      {id: 46,categoria: 'Pescados', descripcion: 'Salmon grillado con vegetales', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/grilled-salmon-broccoli-tomatoes-beans-600w-1032826327.jpg'},
      {id: 47,categoria: 'Pescados', descripcion: 'Atun con vegetales', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/grilled-tuna-steak-vegetables-on-600w-1954733485.jpg'},
      {id: 48,categoria: 'Pescados', descripcion: 'Corvina a la crema', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/parrot-fish-steak-600w-95619760.jpg'},
 
       ];
       return (
        <div>
          <div className="bg-dark text-bg-dark p-2 ps-5  mb-2 text-center">
            <h3> Menú de Pescados y Mariscos </h3>
          </div>
          <Container >
            <Row xs={2} md={3} lg={4} className="g-4">  
            { platos.map((p)=>
            ( <Col key={p.categoria}>
                <Card style={{ width: '18rem' }}>
                <Card.Img    variant="dark" src={p.url}  height={'200'}  />
                <Card.Body>
                  <Card.Title>{p.descripcion}</Card.Title>
                  <Card.Text>
                  {p.categoria}{p.id} 
                  ${p.precio}
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

export default Pescados;