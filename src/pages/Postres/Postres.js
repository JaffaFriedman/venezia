
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function Postres( ) {
   
    let platos=[
      {id: 50,categoria: 'Postres', descripcion: 'Cheesecake de berries', precio: '8000', url: 'https://www.shutterstock.com/image-photo/tasty-cheesecake-slice-berries-on-600w-639408187.jpg'},
      {id: 51,categoria: 'Postres', descripcion: 'Helado de la casa', precio: '8000', url: 'https://www.shutterstock.com/image-photo/ice-cream-on-black-plate-600w-1919535983.jpg'},
      {id: 52,categoria: 'Postres', descripcion: 'Panqueques de guinda', precio: '8000', url: 'https://www.shutterstock.com/image-photo/rolled-pancakes-cherry-ice-cream-600w-126113297.jpg'},
      {id: 53,categoria: 'Postres', descripcion: 'Mousse Chocolate', precio: '8000', url: 'https://www.shutterstock.com/image-photo/tasteful-chocolate-pastry-mousse-isolated-600w-78632026.jpg'},
      {id: 54,categoria: 'Postres', descripcion: 'Brownie de frutilla', precio: '8000', url: 'https://www.shutterstock.com/image-photo/chocolate-brownie-strawberries-swirls-icing-600w-574642351.jpg'},
      {id: 57,categoria: 'Postres', descripcion: 'Cheesecake con berries', precio: '8000', url: 'https://www.shutterstock.com/image-photo/delicious-cheesecake-berries-on-table-600w-317208716.jpg'},
      {id: 60,categoria: 'Postres', descripcion: 'Volcan de chocolate con helado', precio: '8000', url: 'https://www.shutterstock.com/image-photo/petit-gateau-dessert-600w-245173243.jpg'},
      {id: 62,categoria: 'Postres', descripcion: 'Queue con salsa de miel', precio: '8000', url: 'https://www.shutterstock.com/image-photo/slice-honey-cake-saucer-on-600w-256800817.jpg'},
      {id: 63,categoria: 'Postres', descripcion: 'Torta de chocolate', precio: '8000', url: 'https://www.shutterstock.com/image-photo/slice-layered-chocolate-cream-cake-600w-1787099720.jpg'},
      {id: 64,categoria: 'Postres', descripcion: 'Queque de frambuesa', precio: '8000', url: 'https://www.shutterstock.com/image-photo/sweet-dessert-on-black-background-600w-427677541.jpg'},

    ];
    return (
      <div>
        <div className="bg-dark text-bg-dark p-2 ps-5 mb-2 text-center">
          <h3> Menú de Postres </h3>
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

export default Postres;