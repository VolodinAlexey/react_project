import React, {useState} from "react";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../img/logo.png"


export default function Navibar() {

  const [show, setShow] = useState(false);

  const handleClose = () =>setShow(false);
  const handleShow = () =>setShow(true);

  return (
    //! Navbar   fixed="top"
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="p-0" ><img src={logo} alt="Логотип" height="45"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/About">О проекте</Nav.Link>
            <Nav.Link as={Link} to="/Capability">Возможности</Nav.Link>
            <Nav.Link as={Link} to="/Documents">Документы</Nav.Link>
            <Nav.Link as={Link} to="/Price">Цены</Nav.Link>

            <NavDropdown title="Справочный материал" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Понятия</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Правовые формы </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Порядок подачи документов</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">Юридическая база</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button variant="primary" className="me-2" onClick={handleShow}>
              Войти
            </Button>
            <Button variant="primary" onClick={handleShow}>Выход</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
      <Modal.Title>Войти через портал Госуслуги</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group controlId="fromBasicEmail">
          <Form.Label>Электронная почта</Form.Label>
          <Form.Control type="email" placeholder="Электронная почта"/>
          {/* <Form.Text className="text-muted">Укажите адрес электронной почты</Form.Text> */}
      </Form.Group>
      <br />
      <Form.Group controlId="fromBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль"/>
      </Form.Group>
      <br />
      <Form.Group controlId="fromBasicCheckbox">
           <Form.Check type="checkbox" label="Принимаю соглашение"/>
      </Form.Group>
    </Form>
  </Modal.Body>
</Modal>

    </>
  );
}
