import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Signup.css';


const Signup = () => {
  return (
    <div className='centered-form'>
        <Form className='Signup-container'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>USF Email</Form.Label>
                <Form.Control type="email" placeholder="yourname@usf.edu" required/>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="At least 8 characters" required/>
            </Form.Group>
            <div class='text-right'><Form.Check type="switch" id="show-password-switch" className='show-password-switch' label="Show password" /></div>
            



            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>USF Student ID</Form.Label>
                <Form.Control placeholder="#U12345678" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone number</Form.Label>
                <Form.Control placeholder="Phone number" required/>
            </Form.Group>

            <Button className='submit-button' variant="primary" type="submit">Submit</Button>

            

    
  </Form>
  </div>
    
  );
}

export default Signup
