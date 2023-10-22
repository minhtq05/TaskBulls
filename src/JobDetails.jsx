import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import jobImage from './images/job1.jpg';

const joblist = [
    {
        "title": "Software Engineer 1",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "rate": "100$/hr",
    },
    {
        "title": "Software Engineer 2",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "rate": "100$/hr",
    },
    {
        "title": "Software Engineer 3",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "rate": "100$/hr",
    },
    {
        "title": "Software Engineer 4",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "rate": "100$/hr",
    },
    {
        "title": "Software Engineer 5",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "rate": "100$/hr",
    },
    {
        "title": "Software Engineer 6",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "rate": "100$/hr",
    },
    {
        "title": "Software Engineer 7",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "rate": "100$/hr",
    },
    {
        "title": "Software Engineer 8",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "rate": "100$/hr",
    },
]

function JobCards() {
    return (
        <Container style={{
            marginTop: '100px',
            marginBottom: '20px'
        }}>
            <Row className=" justify-content-center g-4">
                {joblist.map((job) =>
                    <Card style={{ backgroundColor: '#EFF5F5', width: '18rem', height: '100%', margin: '10px', padding: '0px', color: '#EB6440' }}>
                        <Card.Img variant="top" src={jobImage} />
                        <Card.Body>
                            <Card.Title>{job.title}</Card.Title>
                            <Card.Text>
                                {job.description}
                            </Card.Text>
                            <Row className="justify-content-between">
                                <Col>
                                    <Button style={{ backgroundColor: '#EB6440' }} variant="primary">Apply</Button>
                                </Col>
                                <Col>
                                    <Card.Text className="float-right" style={{ margin: '5px' }}>{job.rate}</Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                )}
            </Row>
        </Container >
    );
}

export default JobCards;