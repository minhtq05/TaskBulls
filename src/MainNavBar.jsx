import React from 'react'
import { Navbar, Container, Button, Form, InputGroup, Row, Col } from 'react-bootstrap';
// import './App.css';
import logo from './images/logo.png';

function NavBar() {
    return (
        <Navbar className="bg-body-tertiary justify-content-between">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    TaskBulls
                </Navbar.Brand>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <InputGroup>
                                <InputGroup.Text id="base-addon1">@</InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="base-addon1"
                                    className="mr-sm-2"
                                />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Login</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Navbar>
    );
}

export default NavBar;
