import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Signin.css';


const Signin = () => {
    return (
        <div className='centered-form'>
            <Form className='signin-container'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>USF Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show password" />
                </Form.Group>
                <Button className='submit-button' variant="primary" type="submit">
                    Submit
                </Button>
                <a href="#forgotpassword" className='link-primary forgot-password-text'>Forgot password?</a>
            </Form>
        </div>
    );
}

export default Signin
