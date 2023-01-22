import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Reservas from './pages/Reservas/Reservas';
import Locales from './pages/Locales/Locales';
import Menu from './pages/Menu/Menu';
import Postres from './pages/Postres/Postres';
import Pastas from './pages/Pastas/Pastas';
import Vinos from './pages/Vinos/Vinos';
import Carnes from './pages/Carnes/Carnes';
import Pescados from './pages/Pescados/Pescados';
import Ensaladas from './pages/Ensaladas/Ensaladas';
import Platos from './pages/Platos/Platos';
import Blog from './pages/Blog/Blog';
import Contacto from './pages/Contacto/Contacto';
import Prueba from './pages/Prueba/Prueba';
/*
-----------
 
function ProfilePage() {
  let { menuId } = useParams();
}

 
      <Route path="menu">
        <Route path=":menuId" element={<ProfilePage />} />
        <Route path="me" element={...} />
      </Route>
                  <Route path='/menu/:idCategoria' element={<Platos />} /> 
            <Route path='/platos/:idCategoria' element={<Platos />} /> 
 */

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}> 
            <Route path='/' element={<Home />} /> 
            <Route path='/login' element={<Login />} /> 
            <Route path='/menu' element={<Menu />} /> 
            <Route path='/platos' element={<Platos />} /> 

            <Route path='/menu' element={<Menu />} /> 
            <Route path='/postres' element={<Postres />} /> 
            <Route path='/pastas' element={<Pastas />} /> 
            <Route path='/vinos' element={<Vinos />} /> 
            <Route path='/ensaladas' element={<Ensaladas />} /> 
            <Route path='/carnes' element={<Carnes />} /> 
            <Route path='/pescados' element={<Pescados />} /> 
            <Route path='/reservas' element={<Reservas />} />  
            <Route path='/locales' element={<Locales />} />  
            <Route path='/blog' element={<Blog />} />       
            <Route path='/contacto' element={<Contacto />} /> 
            <Route path='/prueba' element={<Prueba />} />  
        </Route>
      </Routes>
    </div>
  );
}

export default App;
