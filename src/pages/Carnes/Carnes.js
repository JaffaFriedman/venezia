import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function Carnes( ) {
   
    let platos=[
      {id: 11,categoria: 'Carnes', descripcion: 'Carne grillada', precio: '$18.000', url: 'https://www.shutterstock.com/image-photo/closeup-view-delicious-grilled-beef-600w-1559572103.jpg'},
      {id: 12,categoria: 'Carnes', descripcion: 'Filet mingnon', precio: '$17.500', url: 'https://www.shutterstock.com/image-photo/filet-mignon-mashed-potatoes-pomegranate-600w-1657050667.jpg'},
      {id: 13,categoria: 'Carnes', descripcion: 'Cordero asado con salsa de tomate y verduras frescas', precio: '$19.000', url: 'https://www.shutterstock.com/image-photo/roasted-lamb-tomato-sauce-fresh-600w-141692935.jpg'},
      {id: 14,categoria: 'Carnes', descripcion: 'Pato con papas', precio: '$19.000', url: 'https://www.shutterstock.com/image-photo/roasted-duck-pearmarinated-red-wine-600w-110073662.jpg'},
      {id: 15,categoria: 'Carnes', descripcion: 'Pato con pure de papas', precio: '$18.500', url: 'https://www.shutterstock.com/image-photo/duck-leg-mashed-potatoes-on-600w-2200799771.jpg'},
      {id: 16,categoria: 'Carnes', descripcion: 'Pechuga de pollo con ensalada mixta', precio: '$15.500', url: 'https://www.shutterstock.com/image-photo/mixed-salad-spinach-rocket-grilled-600w-1863491056.jpg'},
      {id: 17,categoria: 'Carnes', descripcion: 'Pollo a la parrilla', precio: '$16.000', url: 'https://www.shutterstock.com/image-photo/grilled-chicken-breast-different-variations-600w-326600723.jpg'},
      {id: 18,categoria: 'Carnes', descripcion: 'Pollo a la parrilla con ensalada verde', precio: '$11.000', url: 'https://www.shutterstock.com/image-photo/grilled-chicken-breast-green-salad-600w-477999013.jpg'},
        ];
        return (
          <div>
            <div className="bg-dark text-bg-dark p-2 ps-5  mb-2 text-center">
              <h3> Menú de Carnes y Aves</h3>
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

export default Carnes;