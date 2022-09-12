import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import './Navbar.css';
import Button from 'react-bootstrap/esm/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../Group1.svg';
import theimage from '../newsimagecard2.svg';
import myimage from '../newsimagecard.svg'
import myimgs from '../cardwithcomment1.svg'
import myigs from '../cardwithcomment2.svg'
import myimages from '../cardwithcomment.svg'

const NavComponent = () => {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
    <Navbar bg="dark" expand="lg">
 <Container>
   <Navbar.Brand href="#home">
      <span class="navbar-toggler-icon"  onClick={handleShow} ></span></Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="me-auto">
       <Nav.Link href="#home" className='mx-3' style={{color:'white'}}>Football</Nav.Link>
       <Nav.Link href="#link" className='mx-3'style={{color:'white'}}>NBA</Nav.Link>
       <Nav.Link href="#home" className='mx-3'style={{color:'white'}}>WWE</Nav.Link>
       <Nav.Link href="#link" className='mx-3'style={{color:'white'}}>Cricket</Nav.Link>
       <NavDropdown title={ <span className="text-light my-auto">More</span>} menuVariant="light" id="basic-nav-dropdown">
         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">
           Another action
         </NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3" style={{color:'white'}}>Something</NavDropdown.Item>
         <NavDropdown.Divider />
         <NavDropdown.Item href="#action/3.4">
           Separated link
         </NavDropdown.Item>
       </NavDropdown>
     </Nav>
     <Form className="d-flex mx-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
   </Navbar.Collapse>
 </Container>
</Navbar>


      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Goal</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      <Container>
        <Row>
          <Col lg="12">
          
              <img src={img} alt='banner' />
  
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg="6">
          <img src={theimage} alt='banner' />
          </Col>
          <Col lg="6">
          <img src={myimage} alt='banner' />
          </Col>
        </Row>
        <Row>
          <Col md="5">
          <img src={myimages} alt='banner' />
          </Col>
          <Col md="5">
            <div>
            <img src={myimgs} alt='banner' />
            </div>
          
          </Col>
          <Col md="2">
          <img src={myigs} alt='banner' />
          </Col>
        </Row>
      </Container>
</div>
  );
}

export default NavComponent;

