import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'
import { searchProducts } from '../Redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';



function Header({insideHome}) {

  const lengthWishList=useSelector(state=>state.whishListReducer)
  console.log(lengthWishList);
  

  const lengthCart=useSelector(state=>state.cartReducer)

  const dispatch=useDispatch()
  return (
    <>
       <Navbar expand="lg" className="container-fluid bg-info" style={{position:"fixed",zIndex:"1"}}>
      <Container fluid>
        <Navbar.Brand href="#"><Link style={{textDecoration:"none"}} to={'/'}><h5 className='text-light'><i className="fa-solid fa-shirt text-light"></i> &nbsp; Style</h5></Link></Navbar.Brand>
        <Navbar.Toggle className='text-light' aria-controls="navbarScroll" />
        <Navbar.Collapse className='text-light' id="navbarScroll">
        
        {
            insideHome &&
            <Form className="search d-flex text-light align-items-cemter justify-content-center">
            <Form.Control

              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=>dispatch(searchProducts(e.target.value.toLowerCase()))}
              
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          
        } 
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><Link to={'/Whishlist'}><i class="fa-solid fa-heart text-light"></i><Badge >{lengthWishList?.length}</Badge></Link></Nav.Link>
            <Nav.Link href="#action2"><Link to={'/Cart'}><i className="fa-solid fa-cart-shopping text-light"></i><Badge >{lengthCart?.length}</Badge></Link></Nav.Link>
          
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    </>
  )
}

export default Header