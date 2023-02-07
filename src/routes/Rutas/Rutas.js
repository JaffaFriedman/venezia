import { Routes, Route } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Home from '../../pages/Home/Home';
import Reservas from '../../pages/Reservas/Reservas';
import Locales from '../../pages/Locales/Locales';
import Menu from '../../pages/Menu/Menu';
import Platos from '../../pages/Platos/Platos';
import Nosotros from '../../pages/Nosotros/Nosotros';
import Contacto from '../../pages/Contacto/Contacto';
import Prueba from '../../pages/Prueba/Prueba';
import Contactosadm from '../../pages/Admin/Contactosadm/Contactosadm';
import Reservasadm from '../../pages/Admin/Reservasadm/Reservasadm';
import { useState } from 'react';

function Rutas() {
  const [categoria, setCategoria] = useState('');
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}> 
            <Route path='/' element={<Home />} /> 
            <Route path='/menu'   element={<Menu categoria={categoria} setCategoria={setCategoria}/>} /> 
            <Route path='/platos' element={<Platos categoria={categoria}/>} /> 
            <Route path='/reservas' element={<Reservas />} />  
            <Route path='/locales' element={<Locales />} />  
            <Route path='/nosotros' element={<Nosotros />} />       
            <Route path='/contacto' element={<Contacto />} /> 
            <Route path='/prueba' element={<Prueba />} />  
            <Route path='/contactosadm' element={<Contactosadm />} />  
            <Route path='/reservasadm' element={<Reservasadm />} />  
        </Route>
      </Routes>
    </div>
  );
}

export default Rutas;