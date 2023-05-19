import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import './NavBarstyle.css'
const NavBar = () => {

  return (
    <Link to="/">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='buttonNav' style={{ textDecoration: 'none' }}>RetroZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="collasible-nav-dropdown" className='buttonNav'>
              <NavDropdown.Item>
                <NavLink as={Link} to={`/category/vinos`} className="Option1" activeclassname="ActiveOption">Vinos</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink as={Link} to={`/category/Tabaco`} className="Option1" activeclassname="ActiveOption">Tabaco</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink as={Link} to={`/category/Regionales`} className="Option1" activeclassname="ActiveOption">Regionales</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Link>
  );
}

export default NavBar;
