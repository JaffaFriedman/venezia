import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from 'react-bootstrap/Card';
 
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
    img: '/blog/BLOG01.jpg',
    title: 'Chef preparando carne',
    rows: 2,
    cols: 2,
  },
  {
    img: '/blog/BLOG02.jpg',
    title: 'Chef preparando ensalada',
  },
  {
    img: '/blog/BLOG07.jpg',
    title: 'Chef preparando pasta',
  },
  {
    img: '/blog/BLOG04.jpg',
    title: 'Chef preparando postres',
    cols: 2,
  },
  {
    img: '/blog/BLOG05.jpg',
    title: 'Barman ssirviendo un Coctail',
    cols: 2,
  },
  {
    img: '/blog/BLOG06.jpg',
    title: 'Honey',
    author: 'Restoran en Italia',
    rows: 2,
    cols: 2,
  },
  {
    img: '/blog/BLOG03.jpg',
    title: 'Chef preparando pasta',
  },
  {
    img: '/blog/BLOG08.jpg',
    title: 'Clientes comiendo pasta',
  },
  {
    img: '/blog/BLOG12.jpg',
    title: 'Chef cocinado',
    rows: 2,
    cols: 2,
  },
  {
    img: '/blog/BLOG10.jpg',
    title: 'Chef preparando carne',
  },
  {
    img: '/blog/BLOG09.jpg',
    title: 'Chef cocinado',
  },
  {
    img: '/blog/BLOG11.jpg',
    title: 'Surtido de pastas',
    cols: 2,
  },
];

const Nosotros = () => {
  return (
    <div>
        <div className="bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center">
            <h3> Sobre Nosotros </h3>
        </div>
        <Box sx={{ flexGrow: 1 ,}}>
        <Grid container spacing={{ xs: 1, md: 4, lg: 5 }} 
             columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }} display="flex" justifyContent="center">
            <Grid item >
              <ImageList
                xs={{ width: 400, height: 400 }}
                sx={{ width: 500, height: 500 }}
                md={{ width: 600, height: 600 }}
                lg={{ width: 700, height: 700 }}
                xl={{ width: 900, height: 700 }}
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
            <Grid item style={{ width: '32rem'}}>
            <Card style={{ width: '32rem'}}>
              <Card.Body   >
              <Card.Title> LA COCINA VENECIANA </Card.Title>
              <Card.Text>  
                  <p>Es tradicional, sencilla y se basa en los productos que ofrece la laguna: pescado, hortalizas y carnes. Pero, a estos productos, se une una influencia oriental en el uso de las especias (nuez moscada, canela, pimienta) y en la gran variedad de arroces. </p>
                  <p>La gastronomía veneciana es una de las más variadas de Italia, gracias a las múltiples influencias que la han enriquecido a lo largo de los siglos. Los sabores del mar y de la tierra se unen para crear recetas con un sabor único, que logran sorprender hasta los paladares más refinados. Por lo tanto, hoy recomendamos 12 platos que comer en nuestro restoran, tu eliges los que más te estimulen y nos cuentas los que más te han gustado.</p>
                  <p>Nuestros exquisitos platos han ganado muchos premios gastrómicos. Contamos con una variada carta y chefs de prestigio internacional.</p>
              </Card.Text>
                  </Card.Body>
              </Card>
            </Grid> 
        </Grid> 
               
      </Box>
    </div>
  );
}
export default Nosotros