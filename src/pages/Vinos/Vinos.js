
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function Vinos( ) {
   
    let platos=[

     ];
    return (
      <div>
        <div className="bg-dark text-bg-dark p-2 ps-5  mb-2 text-center">
          <h3> Menú de Vinos y Bebidas </h3>
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

export default Vinos;