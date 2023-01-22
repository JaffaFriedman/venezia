import  React from 'react'
import { userState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Menufilter = ({categoriaMenu}) => {
  const [categoria, setCategoria] = userState('')


    function filtraCategoria (e,{categoria})
    {
    e.preventDefault()
    setCategoria={categoria}
    }

    let listaPlatos=[
      {id: 11,categoria: 'Carnes', descripcion: 'Carne grillada', precio: '$18.000', url: 'https://www.shutterstock.com/image-photo/closeup-view-delicious-grilled-beef-600w-1559572103.jpg'},
      {id: 12,categoria: 'Carnes', descripcion: 'Filet mingnon', precio: '$17.500', url: 'https://www.shutterstock.com/image-photo/filet-mignon-mashed-potatoes-pomegranate-600w-1657050667.jpg'},
      {id: 13,categoria: 'Carnes', descripcion: 'Cordero asado con salsa de tomate y verduras frescas', precio: '$19.000', url: 'https://www.shutterstock.com/image-photo/roasted-lamb-tomato-sauce-fresh-600w-141692935.jpg'},
      {id: 14,categoria: 'Carnes', descripcion: 'Pato con papas', precio: '$19.000', url: 'https://www.shutterstock.com/image-photo/roasted-duck-pearmarinated-red-wine-600w-110073662.jpg'},
      {id: 15,categoria: 'Carnes', descripcion: 'Pato con pure de papas', precio: '$18.500', url: 'https://www.shutterstock.com/image-photo/duck-leg-mashed-potatoes-on-600w-2200799771.jpg'},
      {id: 16,categoria: 'Carnes', descripcion: 'Pechuga de pollo con ensalada mixta', precio: '$15.500', url: 'https://www.shutterstock.com/image-photo/mixed-salad-spinach-rocket-grilled-600w-1863491056.jpg'},
      {id: 17,categoria: 'Carnes', descripcion: 'Pollo a la parrilla', precio: '$16.000', url: 'https://www.shutterstock.com/image-photo/grilled-chicken-breast-different-variations-600w-326600723.jpg'},
      {id: 18,categoria: 'Carnes', descripcion: 'Pollo a la parrilla con ensalada verde', precio: '$11.000', url: 'https://www.shutterstock.com/image-photo/grilled-chicken-breast-green-salad-600w-477999013.jpg'},
      {id: 21,categoria: 'Pastas', descripcion: 'Pappardelle con ragout de filete', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/pasta-pappardelle-beef-ragout-sauce-600w-1494176960.jpg'},
      {id: 22,categoria: 'Pastas', descripcion: 'Risotto en tinta de calamar', precio: '$16.000', url: 'https://www.shutterstock.com/image-photo/delicious-italian-risotto-grilled-big-600w-1419957122.jpg'},
      {id: 23,categoria: 'Pastas', descripcion: 'Gnocchi con camarones', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/freshly-cooked-potato-gnocchi-shrimp-600w-2180689011.jpg'},
      {id: 24,categoria: 'Pastas', descripcion: 'Lasaña con salsa de queso', precio: '$14.500', url: 'https://www.shutterstock.com/image-photo/traditional-lasagna-bolognese-sauce-cheese-600w-1050507389.jpg'},
      {id: 25,categoria: 'Pastas', descripcion: 'Ravioles de ricota', precio: '$14.000', url: 'https://www.shutterstock.com/image-photo/italian-ravioli-stuffed-ricotta-cheese-600w-200672315.jpg'},
      {id: 26,categoria: 'Pastas', descripcion: 'Ravioli con salsa boloñesa', precio: '$14.400', url: 'https://www.shutterstock.com/image-photo/italian-bolognese-ravioli-dish-600w-444287791.jpg'},
      {id: 27,categoria: 'Pastas', descripcion: 'Rissoto de champiñones', precio: '$13.000', url: 'https://www.shutterstock.com/image-photo/rice-mushrooms-greens-600w-1057395554.jpg'},
      {id: 28,categoria: 'Pastas', descripcion: 'Rissoto de mariscos', precio: '$15.500', url: 'https://www.shutterstock.com/image-photo/risotto-italian-foodof-shrimp-food-600w-2113967600.jpg'},
 
    ];
    let menuId='Pastas';
    listaPlatos.filter((c) => e.categoria===menuId));

    
    return (
      <Container >
      <Row xs={2} md={3} lg={4} className="g-4 text-center" >  
      { platos.map((p)=> 
      ( <Col key={p.id}>
          <Card style={{ width: '18rem' }}>
          <Card.Img    variant="dark" src={p.url}  height={'200'}  />
          <Card.Body   >
            <Card.Title>{p.descripcion}</Card.Title>
            <Card.Text>
            {p.precio}
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      ) )
      }
      </Row>
      </Container>
    )
}


export default Menufilter
