
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import lazo from '../../images/footer/lazo.png';
const  Navigation = () => {
  return (
  <div className="bg-dark ps-5">
        <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                      src={lazo}
                      width="200"
                      height="50"
                      className="d-inline-block align-top"
                      alt="Logo"
                    />
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
                    <Nav.Link as={NavLink} to="/locales">Locales</Nav.Link>
                    <Nav.Link as={NavLink} to="/menu">Menu</Nav.Link>
                    <Nav.Link as={NavLink} to="/reservas">Reservas</Nav.Link>
                    <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
                    <NavDropdown title='Admin'> 
                      <NavDropdown.Item as={NavLink} to="/contactosadm">Contactos</NavDropdown.Item>
                          <NavDropdown.Divider />
                           <NavDropdown.Item as={NavLink} to="/reservasadm">Revisar Reservas</NavDropdown.Item>
                          <NavDropdown.Item as={NavLink} to="/reservashoy">Reservas de hoy</NavDropdown.Item>
                          <NavDropdown.Item as={NavLink} to="/reservasmod">Actualizar Reserva</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
  </div>
  );
}

export default Navigation;
