import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="p-20 text-light" style={{ padding: '20px', backgroundColor: 'black' }}>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <h5>About Us</h5>
                        <p>Your footer content goes here.</p>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h5>Contact Us</h5>
                        <p>Email: contact@example.com</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h5>Follow Us</h5>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}

export default Footer