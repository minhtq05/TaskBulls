import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import logo from './images/logo.png';

function App() {
  return (
    <Navbar bg="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          TaskBulls</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default App;
