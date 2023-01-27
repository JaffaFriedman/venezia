import { db } from  "../../config/Firebase";
import { useState } from "react";
//import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

const Prueba = () => {
    let platos=[
        {id: 1,categoria: 'Ensaladas', descripcion: 'Antipasto con prosciutto y queso', precio: '$13.500', url: 'https://www.shutterstock.com/image-photo/fresh-prosciutto-cheese-capers-close-600w-245276638.jpg'},
        {id: 2,categoria: 'Ensaladas', descripcion: 'Antipasto tradicional mixto con prosciutto', precio: '$13.500', url: 'https://www.shutterstock.com/image-photo/traditional-italian-antipasto-mixed-leaf-600w-2087146318.jpg'},
 /*       {id: 3,categoria: 'Ensaladas', descripcion: 'Salmon ahumado con pepino', precio: '$12.000', url: 'https://www.shutterstock.com/image-photo/salad-smoked-salmon-cucumber-on-600w-280333007.jpg'},                  
        {id: 4,categoria: 'Ensaladas', descripcion: 'Ensalada de pollo espinaca y pomelo', precio: '$12.500', url: 'https://www.shutterstock.com/image-photo/salad-chicken-orange-spinach-pomegranate-600w-533617435.jpg'},
        {id: 5,categoria: 'Ensaladas', descripcion: 'Ensalada vegana con brusellas', precio: '$9.500', url: 'https://www.shutterstock.com/image-photo/vegan-fall-salad-squash-brussels-600w-727115203.jpg'},
        {id: 6,categoria: 'Ensaladas', descripcion: 'Ensalada Caprese', precio: '$11.000', url: ' https://www.shutterstock.com/image-photo/italian-caprese-salad-sliced-tomatoes-600w-1018880707.jpg'},                  
        {id: 7,categoria: 'Ensaladas', descripcion: 'Ensalada Cesar con pollo', precio: '$12.000', url: 'https://www.shutterstock.com/image-photo/caesar-salad-chicken-greens-on-600w-95710738.jpg'},                  
        {id: 8,categoria: 'Ensaladas', descripcion: 'Ensalada Griega', precio: '$9.000', url: 'https://www.shutterstock.com/image-photo/greek-salad-vegetable-fresh-vegetables-600w-1911752302.jpg'},                  

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
    
        {id: 41,categoria: 'Pescados', descripcion: 'Atun con vegetales', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/grilled-tuna-steak-vegetables-on-600w-1954733485.jpg'},
        {id: 42,categoria: 'Pescados', descripcion: 'Corvina a la crema', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/parrot-fish-steak-600w-95619760.jpg'},
        {id: 43,categoria: 'Pescados', descripcion: 'Salmon grillado con vegetales', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/grilled-salmon-broccoli-tomatoes-beans-600w-1032826327.jpg'},
        {id: 44,categoria: 'Pescados', descripcion: 'Atun con vegetales', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/grilled-tuna-steak-vegetables-on-600w-1954733485.jpg'},
        {id: 45,categoria: 'Pescados', descripcion: 'Corvina a la crema', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/parrot-fish-steak-600w-95619760.jpg'},
        {id: 46,categoria: 'Pescados', descripcion: 'Salmon grillado con vegetales', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/grilled-salmon-broccoli-tomatoes-beans-600w-1032826327.jpg'},
        {id: 47,categoria: 'Pescados', descripcion: 'Atun con vegetales', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/grilled-tuna-steak-vegetables-on-600w-1954733485.jpg'},
        {id: 48,categoria: 'Pescados', descripcion: 'Corvina a la crema', precio: '$15.000', url: 'https://www.shutterstock.com/image-photo/parrot-fish-steak-600w-95619760.jpg'},
   
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
*/
    ];
/*
    const platosInicial = {
        categoria: '',
        descripcion: '',
        precio: '',
        url: ''
    }*/
    //Variables de estados

    const [cantidad, setCantidad] = useState(0);

      

    //const [platoTmp, setPlatoTmp] = useState(platosInicial);

    // funciones controladoras del form

 
    const agregarPlato = async(e) => {
 /*
        e.preventDefault()
        try {
            const collectionRef = collection(db, 'Platos')
            await addDoc(collectionRef, {
                ...platoTmp
            })
        } catch (error) {
            console.log(error)
        }
        setPlatoTmp({...platosInicial})
*/      e=platos[0]
        setCantidad(cantidad+1);
        await setDoc(doc(db, "Platos", e.id),  
            JSON.stringify(e)
         );  
    }

    return (
        <Container >      
        <h1>Platos </h1>
        {
            
        /*
         platos.map((p)=> 
            {
                return agregarPlato(p);
            } )
          */
          }
        <Button variant="contained" startIcon={<SaveIcon />}
                onClick={agregarPlato}> Cargar Platos
        </Button>
        <h1>Grabados: {cantidad}  </h1>
      </Container>
      );
    };

export default Prueba