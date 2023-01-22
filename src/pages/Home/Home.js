import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  

  let urls=[
{url:'https://www.shutterstock.com/image-photo/beautiful-view-traditional-gondolas-on-600w-428991877.jpg', descripcion:'Gondolas tradicionales'},
{url:'https://www.shutterstock.com/image-photo/castellammare-del-golfo-beautiful-coastal-600w-1050171218.jpg',descripcion:'Golfo de carellmmare'},
{url:'https://www.shutterstock.com/image-photo/panorama-colosseum-constantine-arch-sunrise-600w-1177201579.jpg',descripcion:'Coliseo y arco de Constantino'},
{url:'https://www.shutterstock.com/image-photo/modern-restaurant-interior-600w-449920291.jpg',descripcion:'Interior de nuestro restaurant'},
{url:'https://www.shutterstock.com/shutterstock/photos/1721872819/display_1500/stock-photo-pasta-assortment-of-italian-pasta-dishes-including-spaghetti-bolognese-penne-with-chicken-1721872819.jpg',descripcion:'Pastas'},
{url:'https://www.shutterstock.com/image-photo/view-grand-canal-stunning-baroque-600w-155638679.jpg',descripcion:'Grand canal'},
{url:'https://www.shutterstock.com/image-photo/cozy-old-street-trastevere-rome-600w-525414181.jpg',descripcion:'Calle Trastevera Eoma'},
]
 return (
 
        <Carousel className="bg-dark text-bg-dark p-5" >
        { urls.map((p)=>
          ( 
            <Carousel.Item>
            <img
              className="d-block w-auto justify-content-center ps-5"
              style={{ height: '600px' }}
              src={p.url}
              alt={p.descripcion}
            />
            <Carousel.Caption>
              <h5>{p.descripcion}</h5>
            </Carousel.Caption>
          </Carousel.Item>
               ) )
              }
      </Carousel>
  
    )
}

export default Home