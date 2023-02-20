import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

let listaPlatos=[  
  {id: 1,categoria: 'Ensaladas y Antipastos', descripcion: 'Ensalada de tomate, albahaca y mozarella', precio: '$9.500', url: '/platos/ensaladas/ENSALADAS01.jpg'},
  {id: 2,categoria: 'Ensaladas y Antipastos', descripcion: 'Ensalada Cesar con pollo', precio: '$9.500', url: '/platos/ensaladas/ENSALADAS02.jpg'},
  {id: 3,categoria: 'Ensaladas y Antipastos', descripcion: 'Antipasto de proschutto, queso, aceitunas y alcaparras', precio: '$9.000', url: '/platos/ensaladas/ENSALADAS03.jpg'},                  
  {id: 4,categoria: 'Ensaladas y Antipastos', descripcion: 'Timbal de salmon y palta con salsa de yogurt', precio: '$10.500', url: '/platos/ensaladas/ENSALADAS04.jpg'},
  {id: 5,categoria: 'Ensaladas y Antipastos', descripcion: 'Ensalada de hojas verdes, camarones y naranja y grandas', precio: '$8.500', url: '/platos/ensaladas/ENSALADAS05.jpg'},
  {id: 6,categoria: 'Ensaladas y Antipastos', descripcion: 'Ensalada de hojas verdes, apio, manzana y nueces', precio: '$9.000', url: '/platos/ensaladas/ENSALADAS06.jpg'},                  
  {id: 7,categoria: 'Ensaladas y Antipastos', descripcion: 'Ensalada Griega', precio: '$7.000', url: '/platos/ensaladas/ENSALADAS07.jpg'},                  
  {id: 8,categoria: 'Ensaladas y Antipastos', descripcion: 'Proschutto con queso mozarella sobre hojas verdes y tomate cherry', precio: '$11.000', url: '/platos/ensaladas/ENSALADAS08.jpg'},

  {id: 11,categoria: 'Carnes y Pescados', descripcion: 'Carne grillada', precio: '$16.000', url: '/platos/carnes/CARNES01.jpg'},
  {id: 12,categoria: 'Carnes y Pescados', descripcion: 'Filete al oporto', precio: '$16.500', url: '/platos/carnes/CARNES08.jpg'},
  {id: 13,categoria: 'Carnes y Pescados', descripcion: 'Cordero asado con salsa de tomate y verduras frescas', precio: '$15.000', url: '/platos/carnes/CARNES03.jpg'},
  {id: 24,categoria: 'Carnes y Pescados', descripcion: 'Cordero con costra a la italiana', precio: '$13.000', url: '/platos/carnes/CARNES12.jpg'},
  {id: 15,categoria: 'Carnes y Pescados', descripcion: 'Pato con verduras y papas', precio: '$14.000', url: '/platos/carnes/CARNES02.jpg'},
  {id: 16,categoria: 'Carnes y Pescados', descripcion: 'Pato con pure de papas', precio: '$14.500', url: '/platos/carnes/CARNES10.jpg'},
  {id: 17,categoria: 'Carnes y Pescados', descripcion: 'Pechuga de pollo con ensalada mixta', precio: '$12.500', url: '/platos/carnes/CARNES09.jpg'},
  {id: 18,categoria: 'Carnes y Pescados', descripcion: 'Pollo a la parrilla', precio: '$12.000', url: '/platos/carnes/CARNES05.jpg'},
  {id: 19,categoria: 'Carnes y Pescados', descripcion: 'Pollo a la parrilla con ensalada verde', precio: '$11.000', url: '/platos/carnes/CARNES04.jpg'},
  {id: 20,categoria: 'Carnes y Pescados', descripcion: 'Salmon grillado con verduras', precio: '$14.000', url: '/platos/carnes/CARNES11.jpg'},
  {id: 21,categoria: 'Carnes y Pescados', descripcion: 'Corvina con salsa blanca', precio: '$13.000', url: '/platos/carnes/CARNES06.jpg'},
  {id: 22,categoria: 'Carnes y Pescados', descripcion: 'Reineta a la plancha con verduras', precio: '$13.000', url: '/platos/carnes/CARNES07.jpg'},
 
  {id: 31,categoria: 'Pastas', descripcion: 'Ravioles de ricota', precio: '$12.000', url: '/platos/pastas/PASTAS01.jpg'},
  {id: 32,categoria: 'Pastas', descripcion: 'Ravioli con salsa boloñesa', precio: '$12.400', url: '/platos/pastas/PASTAS02.jpg'},
  {id: 33,categoria: 'Pastas', descripcion: 'Lasaña con salsa de queso', precio: '$13.500', url: '/platos/pastas/PASTAS03.jpg'},
  {id: 34,categoria: 'Pastas', descripcion: 'Rissoto de champiñones', precio: '$11.000', url: '/platos/pastas/PASTAS04.jpg'},
  {id: 35,categoria: 'Pastas', descripcion: 'Risotto en tinta de calamar', precio: '$14.000', url: '/platos/pastas/PASTAS05.jpg'},
  {id: 36,categoria: 'Pastas', descripcion: 'Pappardelle con ragout de filete', precio: '$13.000', url: '/platos/pastas/PASTAS06.jpg'},
  {id: 37,categoria: 'Pastas', descripcion: 'Rissoto de mariscos', precio: '$14.500', url: '/platos/pastas/PASTAS07.jpg'},
  {id: 38,categoria: 'Pastas', descripcion: 'Gnocchi con salsa boloñesa', precio: '$14.000', url: '/platos/pastas/PASTAS08.jpg'},

 
  {id: 41,categoria: 'Pizzas', descripcion: 'Pizza mozarella y peperoni', precio: '$11.000', url: '/platos/pizzas/PIZZAS01.jpg'},
  {id: 42,categoria: 'Pizzas', descripcion: 'Pizza vegatariana', precio: '$10.000', url: '/platos/pizzas/PIZZAS02.jpg'},
  {id: 43,categoria: 'Pizzas', descripcion: 'Pizza de jamon', precio: '$11.000', url: '/platos/pizzas/PIZZAS03.jpg'},
  {id: 44,categoria: 'Pizzas', descripcion: 'Pizza Hawaiana', precio: '$10.500', url: '/platos/pizzas/PIZZAS04.jpg'},
  {id: 45,categoria: 'Pizzas', descripcion: 'Pizza napolitana', precio: '$10.000', url: '/platos/pizzas/PIZZAS06.jpg'},
  {id: 46,categoria: 'Pizzas', descripcion: 'Pizza mozarella, tomate  y ricotta', precio: '$10.500', url: '/platos/pizzas/PIZZAS07.jpg'},
  {id: 47,categoria: 'Pizzas', descripcion: 'Pizza mozarella, tomate y rucula', precio: '$10.500', url: '/platos/pizzas/PIZZAS08.jpg'},
  {id: 48,categoria: 'Pizzas', descripcion: 'Pizza de carne', precio: '$11.000', url: '/platos/pizzas/PIZZAS05.jpg'},

 
  {id: 51,categoria: 'Vinos y Bebidas', descripcion: 'Botella de Vino tinto', precio: '$9.000', url: '/platos/vinos/VINOS01.jpg'},
  {id: 52,categoria: 'Vinos y Bebidas', descripcion: 'Botella Vino blanco', precio: '$9.000', url: '/platos/vinos/VINOS05.jpg'},
  {id: 53,categoria: 'Vinos y Bebidas', descripcion: 'Bebidas', precio: '2.000', url: '/platos/vinos/VINOS04.jpg'},
  {id: 54,categoria: 'Vinos y Bebidas', descripcion: 'Jugos de fruta de estación', precio: '$4.000', url: '/platos/vinos/VINOS03.jpg'},
  {id: 55,categoria: 'Vinos y Bebidas', descripcion: 'Jugos de verduras', precio: '$4.000', url: '/platos/vinos/VINOS07.jpg'},
  {id: 56,categoria: 'Vinos y Bebidas', descripcion: 'Variedes de Café', precio: '$3.500', url: '/platos/vinos/VINOS06.jpg'},
  {id: 57,categoria: 'Vinos y Bebidas', descripcion: 'Infusiones de hierbas', precio: '$3.000', url: '/platos/vinos/VINOS02.jpg'},
  {id: 58,categoria: 'Vinos y Bebidas', descripcion: 'Te twinings', precio: '$3.000', url: '/platos/vinos/VINOS08.jpg'},
 

  {id: 60,categoria: 'Postres', descripcion: 'Cheesecake de berries', precio: '7.000', url: '/platos/postres/POSTRES05.jpg'},
  {id: 61,categoria: 'Postres', descripcion: 'Helado de la casa', precio: '5.000', url: '/platos/postres/POSTRES10.jpg'},
  {id: 62,categoria: 'Postres', descripcion: 'Panqueques de guinda', precio: '8.000', url: '/platos/postres/POSTRES02.jpg'},
  {id: 63,categoria: 'Postres', descripcion: 'Mousse 3 Chocolates', precio: '6.000', url: '/platos/postres/POSTRES01.jpg'},
  {id: 64,categoria: 'Postres', descripcion: 'Brownie de frutilla', precio: '5.000', url: '/platos/postres/POSTRES07.jpg'},
  {id: 65,categoria: 'Postres', descripcion: 'Mousse de maracuya con berries', precio: '6.000', url: '/platos/postres/POSTRES08.jpg'},
  {id: 66,categoria: 'Postres', descripcion: 'Volcan de chocolate con helado', precio: '8.000', url: '/platos/postres/POSTRES03.jpg'},
  {id: 67,categoria: 'Postres', descripcion: 'Queque con salsa de miel', precio: '4.000', url: '/platos/postres/POSTRES04.jpg'},
  {id: 68,categoria: 'Postres', descripcion: 'Torta de chocolate', precio: '6.000', url: '/platos/postres/POSTRES09.jpg'},
  {id: 69,categoria: 'Postres', descripcion: 'Queque de frambuesa', precio: '5.000', url: '/platos/postres/POSTRES06.jpg'},
  {id: 70,categoria: 'Postres', descripcion: 'Tiramisú de frutos del bosque', precio: '5.000', url: '/platos/postres/POSTRES11.jpg'},
  {id: 71,categoria: 'Postres', descripcion: 'Panna Cotta', precio: '5.000', url: '/platos/postres/POSTRES12.jpg'},
];


function Platos({categoria} ) {
 
    return (
      <div>
        <div className="bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center">
          <h3>Menú de {categoria}</h3>
        </div>
      <Container >

      <Row xs={1}sm={1} md={2} lg={3} xl={4} className="g-4 text-center" >  
      { listaPlatos.filter((c ) =>  c.categoria===categoria.toString()).map((p,idx)=> 
      ( <Col  p={p} key={idx}>
          <Card style={{ width: '17rem', height: '20rem'} } >
          <Card.Img    variant="dark" src={p.url}  height={'200'}  />
          <Card.Body   >
            <Card.Text>{p.descripcion}</Card.Text>
            <Card.Title>
            {p.precio}
            </Card.Title>
          </Card.Body>
        </Card>
        </Col>
        
      ) )
      }
      </Row>
          <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '36ch',  mt: 1 }   }}>
              <Button  
                      variant="contained" 
                      size="small" 
                      className="mt-3" 
                      color="success"  
                       href='/menu'>Volver 
               </Button>
           </Box>
      </Container>
      </div>
    )
}

export default Platos;