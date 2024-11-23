
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './style.css';
function OnNavbar()
{
    return(
        <>
    <Navbar expand="lg" className=" bg-dark newText">
      <Container>
        <Navbar.Brand className='text-white mr-2 design-text' >Ecommerce </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/"><Nav  className='text-white mr-2 design-text'>Home</Nav></Link>
          <Link to="/product"><Nav className='text-white mr-2 design-text'>Add Product</Nav></Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default OnNavbar;