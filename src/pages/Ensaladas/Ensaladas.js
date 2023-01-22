
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function Ensaladas( ) {
   
    let platos=[

        {id: 1,categoria: 'Ensaladas', descripcion: 'Antipasto con prosciutto y queso', precio: '$13.500', url: 'https://www.shutterstock.com/image-photo/fresh-prosciutto-cheese-capers-close-600w-245276638.jpg'},
        {id: 2,categoria: 'Ensaladas', descripcion: 'Antipasto tradicional mixto con prosciutto', precio: '$13.500', url: 'https://www.shutterstock.com/image-photo/traditional-italian-antipasto-mixed-leaf-600w-2087146318.jpg'},
        {id: 3,categoria: 'Ensaladas', descripcion: 'Salmon ahumado con pepino', precio: '$12.000', url: 'https://www.shutterstock.com/image-photo/salad-smoked-salmon-cucumber-on-600w-280333007.jpg'},                  
        {id: 4,categoria: 'Ensaladas', descripcion: 'Ensalada de pollo espinaca y pomelo', precio: '$12.500', url: 'https://www.shutterstock.com/image-photo/salad-chicken-orange-spinach-pomegranate-600w-533617435.jpg'},
        {id: 5,categoria: 'Ensaladas', descripcion: 'Ensalada vegana con brusellas', precio: '$9.500', url: 'https://www.shutterstock.com/image-photo/vegan-fall-salad-squash-brussels-600w-727115203.jpg'},
        {id: 6,categoria: 'Ensaladas', descripcion: 'Ensalada Caprese', precio: '$11.000', url: ' https://www.shutterstock.com/image-photo/italian-caprese-salad-sliced-tomatoes-600w-1018880707.jpg'},                  
        {id: 7,categoria: 'Ensaladas', descripcion: 'Ensalada Cesar con pollo', precio: '$12.000', url: 'https://www.shutterstock.com/image-photo/caesar-salad-chicken-greens-on-600w-95710738.jpg'},                  
        {id: 8,categoria: 'Ensaladas', descripcion: 'Ensalada Griega', precio: '$9.000', url: 'https://www.shutterstock.com/image-photo/greek-salad-vegetable-fresh-vegetables-600w-1911752302.jpg'},                  
        ];
        return (
          <div>
            <div className="bg-dark text-bg-dark p-2 ps-5 mb-2 text-center">
              <h3> Menú de Ensaladas y Antipastos </h3>
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

export default Ensaladas;