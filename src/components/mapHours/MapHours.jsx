import "./mapHours.scss";
import {
 Container, 
 Row,
 Col,
 Card,
 ListGroup,
 Badge,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';


export default function MapHours() {
 
 return (
  <Container className="home content-container" id="home" fluid="true">
    <FadeIn>
      <Container className="hours content-container py-4 px-4" id="home" fluid="true">
          <Row>
            <Col className="d-flex justify-content-center py-4" lg={4} md={12} sm={12}>
              <Card className="card-size">
                <Card.Title className="text-center px-2">Business Hours</Card.Title>
                <Card.Body className="text-center">
                  <ListGroup variant="flush">
                    <ListGroup.Item>Mon:	7:00 AM – 8:00 PM</ListGroup.Item>
                    <ListGroup.Item>Tue:	7:00 AM – 8:00 PM</ListGroup.Item>
                    <ListGroup.Item>Wed:	7:00 AM – 8:00 PM</ListGroup.Item>
                    <ListGroup.Item>Thu:	7:00 AM – 8:00 PM</ListGroup.Item>
                    <ListGroup.Item>Fri:	7:00 AM – 8:00 PM</ListGroup.Item>
                    <ListGroup.Item>Sat:	7:00 AM – 8:00 PM</ListGroup.Item>
                    <ListGroup.Item>Sun:	7:00 AM – 8:00 PM</ListGroup.Item>
                  </ListGroup>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="map d-flex justify-content-center align-items-center py-4 px-4" lg={8} md={12} sm={12}>
            <Card className="card-size flex-grow-1">
              <Card.Title className="text-center px-2">Directions</Card.Title>
              <Card.Body className="text-center">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.018165204766!2d-117.19765578478317!3d34.12028468058739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c355fd7936f583%3A0xf523a483338a59b9!2sNitro%20Moving%20Company!5e0!3m2!1sen!2sus!4v1642773253836!5m2!1sen!2sus"
                  frameborder="0"
                  title="Google Maps embed"
                  className=""
                  loading="lazy"
                >
                </iframe>
                <br></br>
                <Card.Text>
                  7428 Boulder Ave, Highland, CA 92346
                </Card.Text>
                <a href="https://g.page/nitro-moving-company?share" target="_blank" rel="noreferrer">
                  <p className="directions d-flex justify-content-center">
                  <Badge bg="danger">Click Here to Open Google Maps</Badge>
                  </p>
                </a>
              </Card.Body>
            </Card>
          </Col>
          </Row>
      </Container>
    </FadeIn>
   </Container>
  )
}