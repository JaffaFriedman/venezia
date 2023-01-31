
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
        const collectionRef = collection(db, "PlatosArray");
        const response = await getDocs(collectionRef);

        const data=response.docs[0].data();
/*
        const docs = response.docs.map((doc) => {
          const data = doc.data(); // firestore guarda la informacion de cada documento en data()
          data.id = doc.id;
          return data;
        });
          setMenu(docs);
*/
        setMenu(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMenu();
    
  }, []);
  console.log('MENU',menu[0]);

  return (
    <div>
      <h1 className="text-center">Menu</h1>
      
      <div>
        {   for(i=0;i<10;i++)   (
          <div key={menu[i].id} >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={menu[i].url} alt={menu[i].descripcion} />
              <Card.Body>
                <Card.Title>{menu[i].categoria}</Card.Title>
                <Card.Text>{menu[i].descripcion}</Card.Text>
                <Button variant="primary">Price: ${menu[i].precio}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
        </div>
      </div>
    
  );
};



export default Prueba;

 