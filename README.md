# Proyecto aplicación Restoran con React

Este proyecto consiste en una aplicación para un restorant, la idea es probar distintas herramientas. 

![image](https://user-images.githubusercontent.com/112987800/221280527-a5c5bb0a-1326-44f9-b971-31cbd3286eaf.png)


La aplicación tiene las siguientes paginas:

## Aplicación
La aplicación cuenta con paginas para el cliente final y una sección para la administración del personal. Esto debiera estar con perfiles en una aplicación real,

### Sección para el cliente final
Este sitio tiene las siguientes paginas para el cliente final:

Home con un carusel.
Nostros con una reseña y una lista de imagenes tipo quilt.
Locales, muestra los diferentes locales del restoran y como llegar a ellos.
Menu tiene distintas categorias de platos (entradas, pastas, carnes, postres, etc). Al seleccionar la categoria  muestra los platos de esas categorias.
Reservas permite reservar una mesa, desde hoy a 60 dias mas.
Contacto para dejar un mensaje.

### Sección de administración
Sección de administración que permite:
    Revisar los contactos
    Revisar todas las reservas 
    Revisar las reservas de una fecha para uno o todos los locales. En esta opción lee filtrando los datos.
    Modificar o cancelar una reserva. En este caso se lee y actualiza la base de Reservas o se elimina de ella.

## Instalación

Para crear la aplicacion usamos
npx create-react-app venezia 

y luego instalamos las siguientes librerias con npm:

npm install bootstrap@5.2.3

npm install react-bootstrap bootstrap

npm i react-router-dom

npm install @mui/material @emotion/react @emotion/styled

npm install @mui/joy @emotion/react @emotion/styled

npm install @mui/base

npm install @mui/system @emotion/react @emotion/styled

npm install @mui/x-data-grid

npm install @mui/material @mui/styled-engine-sc styled-components

npm install @fontsource/roboto

npm install @mui/icons-material

npm install @fontsource/public-sans

npm install --save firebase

npm install -g firebase-tools 

 
## Deploy
Las aplicaciones se subieron a github y se uso Netlify para el deployment.

