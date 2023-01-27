
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import  Chef from '../../images/Chef.png'

const  Navigation = () => {
  return (
  <div className="bg-dark ps-5">
        <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                      src={Chef}
                      width="70"
                      height="70"
                      className="d-inline-block align-top"
                      alt="Logo"
                    />
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                    <Nav.Link as={NavLink} to="/locales">Locales</Nav.Link>
                    <Nav.Link as={NavLink} to="/menu">Menu</Nav.Link>
                    <NavDropdown title='Menu'> 
                      <NavDropdown.Item as={NavLink} to="/ensaladas">Entradas y Antipastos</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/pescados">Pescados y Mariscos </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/carnes">Carnes y Aves</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/pastas">Pastas y Rissoto </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/postres">Postres </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/vinos">Vinos y Bebidas </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to="/reservas">Reservas</Nav.Link>
                    <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
                    <NavDropdown title='Admin'> 
                      <NavDropdown.Item as={NavLink} to="/AdminReservas">Admin Reservas</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/prueba">Prueba </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
  </div>
  );
}

export default Navigation;
