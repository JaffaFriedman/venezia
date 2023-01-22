import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';


const Footer = () => {
  let urlFacebook="https://www.facebook.com/dekkochile?_ga=2.167551419.444347090.1673651620-1259506142.1671285130";
  let urlInstagram="https://www.instagram.com/dekkochile/?_ga=2.234637339.444347090.1673651620-1259506142.1671285130";
  let urlTwitter="https://twitter.com/?lang=es";
  return (
    <div className="bg-dark text-bg-dark">  
        <Row className="mt-2 pt-3">
              <Col className="ps-5 col-6">        
              <ul className="list-unstyled">
                    <li>DATOS DE CONTACTO</li>    
                    <li> contacto@dekko.cl</li>
                    <li>Lunes a Domingo: 12:00-24:00</li>
                    <li>Dirección: Isabel la Católica 7350, Las Condes</li>
                    <li>Reservas y Whatsapp: +569 3251 3550</li>
                    </ul>
              </Col>
              <Col>
              <p>
                   <img
                      src="https://www.shutterstock.com/image-vector/italian-flag-heart-shaped-ribbon-600w-1812716509.jpg"
                      width="500"
                      height="150"
                      className="d-inline-block"
                      alt="Logo"
                    /></p>
              </Col>
              <Col  className='pt-3' >
              <h5>SIGUENOS EN</h5>     
              <a href={urlFacebook}  className="text-decoration-none"><img width={40} height={40} alt="facebook" src={facebook} /> </a>
              <a href={urlInstagram}  className="text-decoration-none"><img width={40} height={40} alt="instagram" src={instagram} /> </a>
              <a href={urlTwitter}  className="text-decoration-none"><img width={40} height={40} alt="twitter" src={twitter} /> </a>
              </Col>

          </Row> 
    </div>
  )
}


export default Footer