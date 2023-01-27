const Prueba = () => {
  let packArray= [
    { fila:1, columna: 1, figuras: 2, hojas: 0},
    { fila:1, columna: 2, figuras: 2, hojas: 0},
    { fila:1, columna: 3, figuras: 2, hojas: 0},
    { fila:1, columna: 4, figuras: 5, hojas: 0},
    { fila:2, columna: 1, figuras: 2, hojas: 0},
    { fila:2, columna: 2, figuras: 2, hojas: 0},
    { fila:2, columna: 3, figuras: 2, hojas: 0},
    { fila:2, columna: 4, figuras: 2, hojas: 0},
    { fila:3, columna: 1, figuras: 2, hojas: 0},
    { fila:3, columna: 2, figuras: 2, hojas: 0},
    { fila:3, columna: 3, figuras: 3, hojas: 0},
    { fila:3, columna: 4, figuras: 2, hojas: 0},
    { fila:4, columna: 1, figuras: 5, hojas: 0},
    { fila:4, columna: 2, figuras: 1, hojas: 0},
    { fila:4, columna: 3, figuras: 2, hojas: 0},
    { fila:4, columna: 4, figuras: 3, hojas: 0},
    { fila:5, columna: 1, figuras: 3, hojas: 0},
    { fila:5, columna: 2, figuras: 2, hojas: 0},
    { fila:5, columna: 3, figuras: 1, hojas: 0},
    { fila:5, columna: 4, figuras: 1, hojas: 0},
    { fila:6, columna: 1, figuras: 1, hojas: 0},
    { fila:6, columna: 2, figuras: 1, hojas: 0},
    { fila:6, columna: 3, figuras: 1, hojas: 0},
    { fila:6, columna: 4, figuras: 1, hojas: 0},
    { fila:7, columna: 1, figuras: 1, hojas: 0},
    { fila:7, columna: 2, figuras: 1, hojas: 0},
    { fila:7, columna: 3, figuras: 1, hojas: 0},
    { fila:7, columna: 4, figuras: 1, hojas: 0},
    { fila:8, columna: 1, figuras: 1, hojas: 0},
    { fila:8, columna: 2, figuras: 1, hojas: 0},
    { fila:8, columna: 3, figuras: 1, hojas: 0},
    { fila:8, columna: 4, figuras: 5, hojas: 0},
    { fila:9, columna: 1, figuras: 5, hojas: 0},
    { fila:9, columna: 2, figuras: 1, hojas: 0},
    { fila:9, columna: 3, figuras: 3, hojas: 0},
    { fila:9, columna: 4, figuras: 3, hojas: 0},
    { fila:10, columna: 1, figuras: 2, hojas: 0},
    { fila:10, columna: 2, figuras: 2, hojas: 0},
    { fila:10, columna: 3, figuras: 4, hojas: 0},
    { fila:10, columna: 4, figuras: 4, hojas: 0},
    { fila:11, columna: 1, figuras: 4, hojas: 0},
    { fila:11, columna: 2, figuras: 4, hojas: 0},
      
 ];
  
 let figuraArray= [
    {fila:1, columna: 1, idFigura: 1, descripcion: 'mariposa', alto: 100, ancho: 70, cantidad: 12},
    {fila:1, columna: 1, idFigura: 2, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 5},
    {fila:1, columna: 2, idFigura: 1, descripcion: 'mariposa', alto: 100, ancho: 70, cantidad: 12},
    {fila:1, columna: 2, idFigura: 2, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 5},
    {fila:1, columna: 3, idFigura: 1, descripcion: 'mariposa', alto: 100, ancho: 70, cantidad: 12},
    {fila:1, columna: 3, idFigura: 2, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 5},
    {fila:1, columna: 4, idFigura: 1, descripcion: 'rosada', alto: 80, ancho: 72, cantidad: 3},
    {fila:1, columna: 4, idFigura: 2, descripcion: 'rosada verde', alto: 80, ancho: 75, cantidad: 3},
    {fila:1, columna: 4, idFigura: 3, descripcion: 'naranja verde', alto: 80, ancho: 80, cantidad: 3},
    {fila:1, columna: 4, idFigura: 4, descripcion: 'verde', alto: 80, ancho: 76, cantidad: 3},
    {fila:1, columna: 4, idFigura: 5, descripcion: 'naranja ', alto: 80, ancho: 76, cantidad: 3},
    {fila:2, columna: 1, idFigura: 1, descripcion: 'arcoiris', alto: 105, ancho: 81, cantidad: 9},
    {fila:2, columna: 1, idFigura: 2, descripcion: 'corazon', alto: 29, ancho: 48, cantidad: 9},
    {fila:2, columna: 2, idFigura: 1, descripcion: 'arcoiris', alto: 105, ancho: 90, cantidad: 9},
    {fila:2, columna: 2, idFigura: 2, descripcion: 'corazon', alto: 33, ancho: 42, cantidad: 9},
    {fila:2, columna: 3, idFigura: 1, descripcion: 'arcoiris', alto: 105, ancho: 77, cantidad: 9},
    {fila:2, columna: 3, idFigura: 2, descripcion: 'corazon', alto: 28, ancho: 40, cantidad: 9},
    {fila:2, columna: 4, idFigura: 1, descripcion: 'arcoiris', alto: 105, ancho: 85, cantidad: 9},
    {fila:2, columna: 4, idFigura: 2, descripcion: 'corazon', alto: 31, ancho: 48, cantidad: 9},
    {fila:3, columna: 1, idFigura: 1, descripcion: 'arcoiris', alto: 105, ancho: 85, cantidad: 9},
    {fila:3, columna: 1, idFigura: 2, descripcion: 'corazon', alto: 33, ancho: 42, cantidad: 9},
    {fila:3, columna: 2, idFigura: 1, descripcion: 'arcoiris', alto: 105, ancho: 61, cantidad: 9},
    {fila:3, columna: 2, idFigura: 2, descripcion: 'corazon', alto: 33, ancho: 50, cantidad: 9},
    {fila:3, columna: 3, idFigura: 3, descripcion: 'luna', alto: 178, ancho: 200, cantidad: 1},
    {fila:3, columna: 3, idFigura: 1, descripcion: 'estrella chica', alto: 29, ancho: 30, cantidad: 15},
    {fila:3, columna: 3, idFigura: 2, descripcion: 'estrella grande', alto: 41, ancho: 39, cantidad: 32},
    {fila:3, columna: 4, idFigura: 1, descripcion: 'estrella chica', alto: 29, ancho: 30, cantidad: 9},
    {fila:3, columna: 4, idFigura: 2, descripcion: 'estrella grande', alto: 41, ancho: 39, cantidad: 56},
    {fila:4, columna: 1, idFigura: 1, descripcion: 'auto 1', alto: 100, ancho: 42, cantidad: 3},
    {fila:4, columna: 1, idFigura: 2, descripcion: 'auto 2', alto: 100, ancho: 42, cantidad: 3},
    {fila:4, columna: 1, idFigura: 3, descripcion: 'auto 3', alto: 100, ancho: 42, cantidad: 3},
    {fila:4, columna: 1, idFigura: 4, descripcion: 'auto 4', alto: 100, ancho: 57, cantidad: 3},
    {fila:4, columna: 1, idFigura: 5, descripcion: 'auto 5', alto: 100, ancho: 41, cantidad: 3},
    {fila:4, columna: 2, idFigura: 1, descripcion: 'auto', alto: 91, ancho: 61, cantidad: 16},
    {fila:4, columna: 3, idFigura: 1, descripcion: 'auto rojo', alto: 100, ancho: 56, cantidad: 9},
    {fila:4, columna: 3, idFigura: 2, descripcion: 'auto azul', alto: 100, ancho: 47, cantidad: 9},
    {fila:4, columna: 4, idFigura: 1, descripcion: 'taxi', alto: 100, ancho: 90, cantidad: 3},
    {fila:4, columna: 4, idFigura: 2, descripcion: 'policia', alto: 100, ancho: 100, cantidad: 3},
    {fila:4, columna: 4, idFigura: 3, descripcion: 'bombero', alto: 100, ancho: 87, cantidad: 3},
    {fila:5, columna: 1, idFigura: 1, descripcion: 'Camion 1', alto: 100, ancho: 81, cantidad: 3},
    {fila:5, columna: 1, idFigura: 2, descripcion: 'Camion 2', alto: 100, ancho: 73, cantidad: 3},
    {fila:5, columna: 1, idFigura: 3, descripcion: 'Camion 3', alto: 100, ancho: 72, cantidad: 3},
    {fila:5, columna: 2, idFigura: 1, descripcion: 'estrella grande', alto: 80, ancho: 77, cantidad: 15},
    {fila:5, columna: 2, idFigura: 2, descripcion: 'estrella chica', alto: 26, ancho: 27, cantidad: 13},
    {fila:5, columna: 3, idFigura: 1, descripcion: 'estrella', alto: 50, ancho: 48, cantidad: 36},
    {fila:5, columna: 4, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 35},
    {fila:6, columna: 1, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 35},
    {fila:6, columna: 2, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 35},
    {fila:6, columna: 3, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 35},
    {fila:6, columna: 4, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 35},
    {fila:7, columna: 1, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 35},
    {fila:7, columna: 2, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 35},
    {fila:7, columna: 3, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 35},
    {fila:7, columna: 4, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 35},
    {fila:8, columna: 1, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 35},
    {fila:8, columna: 2, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 35},
    {fila:8, columna: 3, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 35},
    {fila:8, columna: 4, idFigura: 1, descripcion: 'planeta 1', alto: 254, ancho: 131, cantidad: 1},
    {fila:8, columna: 4, idFigura: 2, descripcion: 'planeta 2', alto: 127, ancho: 124, cantidad: 1},
    {fila:8, columna: 4, idFigura: 3, descripcion: 'planeta 3', alto: 96, ancho: 95, cantidad: 1},
    {fila:8, columna: 4, idFigura: 4, descripcion: 'planeta 4', alto: 129, ancho: 127, cantidad: 1},
    {fila:8, columna: 4, idFigura: 5, descripcion: 'estrella', alto: 50, ancho: 48, cantidad: 10},
    {fila:9, columna: 1, idFigura: 1, descripcion: 'planeta', alto: 127, ancho: 127, cantidad: 1},
    {fila:9, columna: 1, idFigura: 2, descripcion: 'tierra', alto: 127, ancho: 127, cantidad: 1},
    {fila:9, columna: 1, idFigura: 3, descripcion: 'nube1', alto: 152, ancho: 63, cantidad: 1},
    {fila:9, columna: 1, idFigura: 4, descripcion: 'nube2', alto: 113, ancho: 63, cantidad: 1},
    {fila:9, columna: 1, idFigura: 5, descripcion: 'estrella', alto: 50, ancho: 48, cantidad: 17},
    {fila:9, columna: 2, idFigura: 1, descripcion: 'estrella', alto: 50, ancho: 48, cantidad: 42},
    {fila:9, columna: 3, idFigura: 1, descripcion: 'pez1', alto: 76, ancho: 60, cantidad: 8},
    {fila:9, columna: 3, idFigura: 2, descripcion: 'pez2', alto: 121, ancho: 60, cantidad: 4},
    {fila:9, columna: 3, idFigura: 3, descripcion: 'pez3', alto: 100, ancho: 60, cantidad: 4},
    {fila:9, columna: 4, idFigura: 1, descripcion: 'pez4', alto: 67, ancho: 60, cantidad: 8},
    {fila:9, columna: 4, idFigura: 2, descripcion: 'pez5', alto: 100, ancho: 53, cantidad: 4},
    {fila:9, columna: 4, idFigura: 3, descripcion: 'pez6', alto: 100, ancho: 55, cantidad: 4},
    {fila:10, columna: 1, idFigura: 1, descripcion: 'corazon', alto: 50, ancho: 42, cantidad: 24},
    {fila:10, columna: 1, idFigura: 2, descripcion: 'corazon', alto: 50, ancho: 44, cantidad: 18},
    {fila:10, columna: 2, idFigura: 1, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 24},
    {fila:10, columna: 2, idFigura: 2, descripcion: 'circulo', alto: 50, ancho: 50, cantidad: 18},
    {fila:10, columna: 3, idFigura: 1, descripcion: 'leon', alto: 59, ancho: 70, cantidad: 6},
    {fila:10, columna: 3, idFigura: 2, descripcion: 'elefante', alto: 85, ancho: 70, cantidad: 4},
    {fila:10, columna: 3, idFigura: 3, descripcion: 'raton', alto: 64, ancho: 70, cantidad: 6},
    {fila:10, columna: 3, idFigura: 4, descripcion: 'oso', alto: 55, ancho: 70, cantidad: 6},
    {fila:10, columna: 4, idFigura: 1, descripcion: '', alto: 68, ancho: 70, cantidad: 6},
    {fila:10, columna: 4, idFigura: 2, descripcion: 'cebra', alto: 68, ancho: 70, cantidad: 7},
    {fila:10, columna: 4, idFigura: 3, descripcion: 'zorro1', alto: 47, ancho: 70, cantidad: 8},
    {fila:10, columna: 4, idFigura: 4, descripcion: 'zorro2', alto: 55, ancho: 70, cantidad: 7},
    {fila:11, columna: 1, idFigura: 1, descripcion: 'mapache', alto: 0, ancho: 0, cantidad: 6},
    {fila:11, columna: 1, idFigura: 2, descripcion: 'buho', alto: 47, ancho: 58, cantidad: 6},
    {fila:11, columna: 1, idFigura: 3, descripcion: 'jirafa', alto: 44, ancho: 100, cantidad: 8},
    {fila:11, columna: 1, idFigura: 4, descripcion: 'tortuga', alto: 44, ancho: 26, cantidad: 8},
    {fila:11, columna: 1, idFigura: 1, descripcion: 'loro', alto: 39, ancho: 70, cantidad: 9},
    {fila:11, columna: 1, idFigura: 2, descripcion: 'mono', alto: 71, ancho: 70, cantidad: 5},
    {fila:11, columna: 1, idFigura: 3, descripcion: 'leon', alto: 63, ancho: 70, cantidad: 6},
    {fila:11, columna: 1, idFigura: 4, descripcion: 'mapache', alto: 46, ancho: 43, cantidad: 7},
 ];
  return (
    <div>
      <p>fila;columna;idFigura;descripcion;alto;ancho;cantidad;</p>
    { figuraArray.map((p)=> 
    ( 
     <p>{p.fila};{p.columna};{p.idFigura};{p.descripcion};{p.alto};{p.ancho};{p.cantidad};</p>
     ))
    }
    <p>fila;columna;figuras;hojas;</p>
    { packArray.map((p)=> 
    ( 
     <p>{p.fila};{p.columna};{p.figuras};{p.hojas};</p>
     ))
    }
    </div>)

}

export default Prueba