
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function Pastas( ) {
   
    let platos=[
      {id: 21,categoria: 'Pastas', descripcion: 'Pappardelle con ragout de filete', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/pasta-pappardelle-beef-ragout-sauce-600w-1494176960.jpg'},
      {id: 22,categoria: 'Pastas', descripcion: 'Risotto en tinta de calamar', precio: '$16.000', url: 'https://www.shutterstock.com/image-photo/delicious-italian-risotto-grilled-big-600w-1419957122.jpg'},
      {id: 23,categoria: 'Pastas', descripcion: 'Gnocchi con camarones', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/freshly-cooked-potato-gnocchi-shrimp-600w-2180689011.jpg'},
      {id: 24,categoria: 'Pastas', descripcion: 'Lasaña con salsa de queso', precio: '$14.500', url: 'https://www.shutterstock.com/image-photo/traditional-lasagna-bolognese-sauce-cheese-600w-1050507389.jpg'},
      {id: 25,categoria: 'Pastas', descripcion: 'Ravioles de ricota', precio: '$14.000', url: 'https://www.shutterstock.com/image-photo/italian-ravioli-stuffed-ricotta-cheese-600w-200672315.jpg'},
      {id: 26,categoria: 'Pastas', descripcion: 'Ravioli con salsa boloñesa', precio: '$14.400', url: 'https://www.shutterstock.com/image-photo/italian-bolognese-ravioli-dish-600w-444287791.jpg'},
      {id: 27,categoria: 'Pastas', descripcion: 'Rissoto de champiñones', precio: '$13.000', url: 'https://www.shutterstock.com/image-photo/rice-mushrooms-greens-600w-1057395554.jpg'},
      {id: 28,categoria: 'Pastas', descripcion: 'Rissoto de mariscos', precio: '$15.500', url: 'https://www.shutterstock.com/image-photo/risotto-italian-foodof-shrimp-food-600w-2113967600.jpg'},
 
     ];
     return (
      <div>
        <div className="bg-dark text-bg-dark p-2 ps-5  mb-2 text-center">
          <h3> Menú de Pastas y Rissotos </h3>
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

export default Pastas;