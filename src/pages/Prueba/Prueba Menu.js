
import {useState, useEffect} from 'react';
import {db} from '../../config/Firebase'
import {collection, getDocs } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Prueba = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const collectionRef = collection(db, "Menu");
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
    <div>
      <h1 className="text-center">Menu</h1>
      <div>
        {  
           menu.map((plato) => (
          <div key={plato.id} >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={plato.url} alt={plato.descripcion} />
              <Card.Body>
                <Card.Title>{plato.categoria}</Card.Title>
                <Card.Text>{plato.descripcion}</Card.Text>
                <Button variant="primary">Price: ${plato.precio}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Prueba;