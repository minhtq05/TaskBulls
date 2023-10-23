import { Container, Form, Button } from 'react-bootstrap';

function JobDescription(props) {
    return (
        <Container>
            <Form className="my-4">
                <Form.Group controlId="jobTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Text type="text" value={props.title} readOnly />
                </Form.Group>
                <Form.Group controlId="jobDescription">
                    <Form.Label>Job Description</Form.Label>
                    <Form.Text as="text" rows={4} value={props.description} readOnly />
                </Form.Group>
                <Form.Group controlId="jobRate">
                    <Form.Label>Rate</Form.Label>
                    <Form.Text type="text" value={props.rate} readOnly />
                </Form.Group>
                <Form.Group controlId="jobLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Text type="text" value={props.location} readOnly />
                </Form.Group>
                <Button variant="primary" type="submit" disabled>
                    Apply
                </Button>
            </Form>
        </Container>
    );
}

export default JobDescription;