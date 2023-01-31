import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  

  let urls=[
{url:'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVuZXppYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', descripcion:'Gondolas tradicionales'},
{url:'https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80',descripcion:'Venezia'},
{url:'https://images.unsplash.com/photo-1558271736-cd043ef2e855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',descripcion:'Ciudad de Venezia'},
{url:'https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8VmVuZWNpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',descripcion:'Interior de nuestro restaurant'},
{url:'https://www.shutterstock.com/shutterstock/photos/1721872819/display_1500/stock-photo-pasta-assortment-of-italian-pasta-dishes-including-spaghetti-bolognese-penne-with-chicken-1721872819.jpg',descripcion:'Pastas'},
{url:'https://www.shutterstock.com/image-photo/view-grand-canal-stunning-baroque-600w-155638679.jpg',descripcion:'Grand canal'},
{url:'https://www.shutterstock.com/image-photo/cozy-old-street-trastevere-rome-600w-525414181.jpg',descripcion:'Calle Trastevera Eoma'},
]
 return (
 
        <Carousel className="bg-dark text-bg-dark pb-2 ps-5  mb-1" >
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