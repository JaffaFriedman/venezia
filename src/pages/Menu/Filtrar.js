 
import { React, useState}  from 'react'
 
 
function Filtrar = () => {
const [data, setData] = useState('');

const parentToChild = () => {
  setData("This is data from Parent Component to the Child Component.");
}
return(
  <div>
  <Platos/>   
  <div>
    <button primary onClick={() => parentToChild()}>{p.descripcion}</button>
  </div>
 
</div>
)
 }
 

export default Filtrar; 

