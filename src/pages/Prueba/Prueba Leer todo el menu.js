
import {useState, useEffect} from 'react';
import {db} from '../../config/Firebase'
import {collection, getDocs } from "firebase/firestore";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const Prueba = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const collectionRef = collection(db, "Plato");
        const response = await getDocs(collectionRef);

        const docs = response.docs.map((doc) => {
          const data = doc.data(); // firestore guarda la informacion de cada documento en data()
          data.id = doc.id;
          return data;
        });

        setMenu(docs);
      } catch (error) {
        console.log(error);
      }
    };

    getMenu();
    
  }, []);

  console.log(menu)
  return (
        <Container >
        <h1>Platos  </h1>
        <Row xs={2} md={3} lg={4} className="g-4 text-center" >  
        { menu.map((p)=> 
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
  );
};



export default Prueba;