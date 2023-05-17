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
            <Nav.Link href="#features" className='buttonNav'>Historia</Nav.Link>
            <Nav.Link href="#pricing" className='buttonNav'>Nosotros</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown" className='buttonNav'>
              <NavDropdown.Item>
                <NavLink to={`/category/vinos`} className="Option1" activeClassName="ActiveOption">Vinos</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={`/category/Tabaco`} className="Option1" activeClassName="ActiveOption">Tabaco</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={`/category/Regionales`} className="Option1" activeClassName="ActiveOption">Regionales</NavLink>
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
