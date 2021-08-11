import './App.css';
import{Nav, Navbar, Container, NavDropdown, Carousel, Col, Form, Button, Row} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
    <h4>L'art de la Haute Couture</h4></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <NavDropdown title="Formations" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Information</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        <h6>Contact us</h6>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<div>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://formation-couture.com/wp-content/uploads/2017/10/Couture-gif.gif"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.lignes-formations.com/wp-content/uploads/sites/45/2019/06/devenir-couturier-600.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Cours de couture en atelier</h3>
      <p>Nos cours en atelier sont disponibles dans 18 villes</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://edito.regionsjob.com/xjob/wp-content/uploads/sites/3/2015/09/styliste.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>La boutique en ligne</h3>
      <p>Afin de proposer du matériel de qualité toute l’année, nous avons développé notre propre boutique et machine à coudre</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<div>
  <Form>
    <h1>
      Sign up !
    </h1>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>



  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  </div>
  );
}

export default App;
