import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
 
  let urls=[
    {url:'/home/HOME01.jpg', descripcion:'Gondolas en Venecia'},
    {url:'/home/HOME02.jpg', descripcion:'Ristoranti Manquehue'},
    {url:'/home/HOME03.jpg', descripcion:'Ristoranti Apoquindo'},
    {url:'/home/HOME01.jpg', descripcion:'Gondolas en Venecia'},
    {url:'/home/HOME04.jpg', descripcion:'Ristoranti El Bosque'},
    {url:'/home/HOME05.jpg', descripcion:'Ristoranti El Bosque'},
];

 return (
 
 <div>
        <div className="bg-dark text-bg-dark pb-2 ps-5   text-center">
            <h1> RISTORANTI VENEZIA </h1>
         </div> 
        <Carousel className="bg-dark text-bg-dark pb-2 ps-5 " >
        { urls.map((p)=>
          ( 
            <Carousel.Item>
          <img
              className="d-block w-auto justify-content-center ps-5"
              style={{ height: '550px' }}
              alt={p.descripcion}
              src ={p.url}
            />
            <Carousel.Caption>
              <h5>{p.descripcion}</h5>
            </Carousel.Caption>
          </Carousel.Item>
               ) )
              }
      </Carousel>
      <div className="bg-dark text-bg-dark pt-2 pb-2 ps-5 text-center">
            <h3> EN SANTIAGO DESDE 1960</h3>
            <p>Somos una familia Italiana, que por generaciones hemos tenido un restoran en Venecia. </p>
            <p> Nuestro único propósito es que día a día usted traer a Chile los mismos sabores y calidad de nuestro restoran en Italia.</p>
         </div>
      </div>  
    )
}

export default Home