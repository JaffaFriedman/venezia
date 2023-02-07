import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import facebook from '../../images/footer/facebook.png';
import instagram from '../../images/footer/instagram.png';
import twitter from '../../images/footer/twitter.png';
import lazo from '../../images/footer/lazo.png';
import tarjetas from '../../images/footer/tarjetas.png';


const Footer = () => {
  let urlFacebook="https://www.facebook.com/dekkochile?_ga=2.167551419.444347090.1673651620-1259506142.1671285130";
  let urlInstagram="https://www.instagram.com/dekkochile/?_ga=2.234637339.444347090.1673651620-1259506142.1671285130";
  let urlTwitter="https://twitter.com/?lang=es";
  return (
    <div className="bg-dark text-bg-dark">  
        <Row className="pt-3">
              <Col className="ps-5 col-6">        
              <ul className="list-unstyled">
                    <li>DATOS DE CONTACTO</li>    
                    <li>contacto@venezzia.cl</li>
                    <li>Abierto de Lunes a Domingo de 12:00-24:00</li>
                    <li>Whatsapp: +569 3251 3550</li>
                    </ul>
              </Col>
              <Col>
              <img src={lazo} width="400" height="100" className="d-inline-block" alt="Logo"/>
              </Col> 
              <Col  className='pt-3' >   
              <a href={urlFacebook}  className="text-decoration-none"><img width={40} height={40} alt="facebook" src={facebook} /> </a>
              <a href={urlInstagram}  className="text-decoration-none"><img width={40} height={40} alt="instagram" src={instagram} /> </a>
              <a href={urlTwitter}  className="text-decoration-none"><img width={40} height={40} alt="twitter" src={twitter} /> </a>
              <img src={tarjetas} width="150" height="30" className="d-inline-block align-top" alt="Logo"/>
              </Col>



          </Row> 
    </div>
  )
}


export default Footer