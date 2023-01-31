import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
 
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558473399-6773c890474c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudGUlMjB0ZXJyYXphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1602833334025-5019f046b8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudGUlMjB0ZXJyYXphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661962660197-6c2430fb49a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnRlJTIwdGVycmF6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661641242699-b28016893a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnRlJTIwdGVycmF6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Basketball',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1666922707609-b05c41cb203b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FmZXRlciVDMyVBRGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];

const Blog = () => {
  return (
    <div>
        <div className="bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center">
            <h3> Locales </h3>
        </div>
        <Box sx={{ flexGrow: 1 ,}}>
        <Grid container spacing={{ xs: 1, md: 4, lg: 5 }} columns={{ xs: 1, sm: 1, md: 2, lg: 2 }} display="flex" justifyContent="center">
            <Grid item >
              <ImageList
                sx={{ width: 500, height: 450 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                      {...srcset(item.img, 121, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
            <Grid item >
            <Card style={{ width: '32rem' }}>
              <Card.Body   >
              <Card.Title> NUESTRA HISTORIA </Card.Title>
              <Card.Text>  
                  <p>Somos una familia Italiana, que por generaciones hemos tenido un restoran en Venecia. Nuestro único propósito es que día a día usted traer a Chile los mismos sabores y calidad de nuestro restoran en Italia.</p>
                  <p>La cocina de Venecia es tradicional, sencilla y se basa en los productos que ofrece la laguna: pescado, hortalizas y carnes. Pero, a estos productos, se une una influencia oriental en el uso de las especias (nuez moscada, canela, pimienta) y en la gran variedad de arroces. </p>
                  <p>La gastronomía veneciana es una de las más variadas de Italia, gracias a las múltiples influencias que la han enriquecido a lo largo de los siglos. Los sabores del mar y de la tierra se unen para crear recetas con un sabor único, que logran sorprender hasta los paladares más refinados. Por lo tanto, hay recomendamos 12 platos que comer en nuestro restoran tu eliges loS que más te estimulen y ya nos cuentas los que más te han gustado.</p>
              </Card.Text>
                  </Card.Body>
              </Card>
            </Grid> 
        </Grid> 
               
      </Box>
    </div>
  );
}
export default Blog