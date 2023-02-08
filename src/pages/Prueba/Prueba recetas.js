import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
 
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
let listaPlatos=[  
    {id: '0',
    fecha: 'Septiembre, 2022', 
    titulo: 'Masa de pasta Fresca',
    avatar:'M',
    estrellas: 'e1',
    value: 4,
    descripcion: 'Masa de pasta Fresca',
    url: 'https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/C5053AED-32E1-4A02-BA34-2328C56BEC08/Derivates/C932D501-D74A-4B51-A097-23A35F62250E.jpg', 
    ingredientes: [
    '200 g de harina (y algo más para espolvorear)',
    '2 huevos (53-63 gramos c/u)',
    '1 cucharada de aceite de oliva extra virgen',
    'Agua',
    'Sal'], 
    pasos: [
        '1. Ponga en el vaso la harina, los huevos y el aceite y amase por 2 min. La masa tendrá un aspecto grumoso. Forme una bola con la masa, envuélvala en film transparente y deje reposar durante 15 minutos.',
        '2. Estire la masa (2-3 mm de grosor) por tandas, formando láminas rectangulares, sobre una superficie espolvoreada con harina utilizando un rodillo o con una máquina para pasta. Espolvoree las láminas con un poco más de harina para evitar que se peguen. Corte la pasta en la forma deseada según el tipo de pasta que quiera preparar: Lasaña o ravioli: Corte la masa en láminas rectangulares (aprox. 20 x 10 cm). Tagliatelle: Corte en tiras (2 cm x max. 30 cm). Mariposas o farfalle: Corte en pequeños rectángulos (2 cm x 5 cm) y pellizque el centro de cada uno para darle forma de mariposa.',
        '3. Hierva la pasta en una cantidad considerable de agua salada hirviendo (aprox. 1 cucharadita de sal por litro de agua) durante 3-4 minutos dependiendo de la forma y el grosor de la pasta. Sirva caliente, con la salsa que desee.'
    ],
    
   },
    {id: '1',
     fecha: 'Enero, 1990', 
     titulo: 'Salsa Boloñesa',
     avatar:'S',
     estrellas: 'e2',
     value: 5,
     descripcion: 'Salsa Boloñesa',
     url: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/C4DC5248-05B9-43D4-9EDF-E1976780CBB9/Derivates/eff9d0fa-4171-4ff9-b4a9-6fa0c8aafec3.jpg', 
     ingredientes: [
            '30 g de apio en trozos',
            '70 g de zanahoria en trozos',
            '100 g de cebolla en cuartos',
            '1 ramita de albahaca fresca (solo las hojas) (opcional)',
            '50 g de aceite de oliva virgen extra',
            '400 g de carne picada mixta',
            '70 g de vino tinto',
            '1 cucharada de tomate concentrado (opcional)',
            '400 g de tomate triturado en conserva',
            '1 hoja de laurel seca',
            '1 cucharadita de sal',
            '1 pellizco de pimienta molida',
            '1 pellizco de nuez moscada molida'            ], 
        pasos: [
        '2. Incorpore la carne, mezcle con la espátula para que no quede en un bloque, y rehogue por 5 minutos a 120 grados velocidad cuchara',
        '3. Añada el vino tinto y evapore por 2 minutos varoma velocidad cuchara',
        '4. Agregue el tomate concentrado, el tomate triturado, el laurel, la sal, la pimienta y la nuez moscada.',
        '5. Cocine por 30 minutos a 100 grados velocidad cuchara y utilicela para sus pastas' ],
     },

        {id: '2',
        fecha: 'Abril, 2001', 
        titulo: 'Salsa Bechamel',
        avatar:'S',
        estrellas: 'e3',
        value: 3,
        descripcion: 'Salsa Bechamel',
        url: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/58636d4b-b47f-418d-8061-a7b3e3fcb6b7/Derivates/c7dbc716-7ced-4a0f-b528-b4f21e2a3e61.jpg', 
        ingredientes: [
            '40 - 80 g de mantequilla',
            '500 - 1000 g de leche entera',
            '40 - 80 g de harina de trigo',
            '½ - 1 cucharadita de sal',
            '2 - 4 pellizcos de pimienta molida',
            '2 - 4 pellizcos de nuez moscada molida',
            ], 
        pasos: [
            '1. Para preparar aprox. 600 ml de salsa bechamel utilice la cantidad más baja de cada ingrediente. Por el contrario si quiere preparar aprox. 1100 ml utilice las cantidades más altas de las propuestas a continuación. Cuando la salsa esté cocinada, ajuste el sazonamiento a su gusto.',
            '2. Ponga en el vaso la mantequilla, la leche, la harina, la sal, la pimienta y la nuez moscada e inicie Espesar a 100°C. Utilice a su conveniencia.'],},
           
        ];


  
export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [value, setValue] = React.useState(0);

  return (
    <Container>
            <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >

    </Box>
    <Row xs={1} md={1} lg={3} xl={3}  className="g-4 "> 
    { listaPlatos.map((p)=>(
        <Col sx={{ width: 500 }}>  

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {p.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={p.titulo}
        subheader={p.fecha}
      />
      <CardMedia
        component="img"
        height="194"
        image={p.url}
        alt={p.titulo}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {p.descripcion}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
           
          <Typography component="legend"></Typography>
          <Rating
                name={p.estrellas}
                value={p.value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  p.value=value;
            }}
      />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" gutterBottom>Ingredientes:</Typography>
          {p.ingredientes.map((x)=>(
          <Typography variant="body2" gutterBottom  >
             {x}
          </Typography>
          ))}
          <Typography variant="h6" gutterBottom>Preparación:</Typography>
          {p.pasos.map((x)=>(
          <Typography variant="body2" gutterBottom>
             {x}
          </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
    </Col>
            ))}
        </Row>
        </Container>
  );
}
