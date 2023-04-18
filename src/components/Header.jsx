import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import {Link} from 'react-router-dom';
import "../App.css";



export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to={'/'}>TRAVELVIP</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to={'/'}>Главная</Nav.Link>
        <Nav.Link as={Link} to={'/'}>Туры</Nav.Link>
        <Nav.Link as={Link} to={'/Des'}>Описание</Nav.Link>
        <Nav.Link as={Link} to={'/Favorites'}>Избранные</Nav.Link>
        <Nav.Link as={Link} to={'/Contacts'}>Контакты</Nav.Link>
      </Nav>
    </Container>
    <Nav className='justify-content buttonNavHeader'>    
    <Stack direction="horizontal" gap={2}>
    <Button variant="secondary"><Link to={'/cart'}>Корзина</Link></Button>
    <Button variant="secondary">Войти</Button>
    <Button variant="secondary">Зарегистрироваться</Button>
    </Stack>

      </Nav>
      <Nav className='dropDownHidden'>
      <NavDropdown title="Меню" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1"><Link to={'/cart'}>Корзина</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Войти</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Зарегистрироваться</NavDropdown.Item>
      </NavDropdown>
      </Nav>
  </Navbar>
  )
}

export default Header;