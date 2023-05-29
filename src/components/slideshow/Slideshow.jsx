import "./slideshow.scss";
import {
 Container, 
 Row,
 Col,
 Carousel,
 Card,
 ListGroup,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';


export default function Slideshow() {
 
 return (
  <Container className="home content-container pb-4" id="home" fluid="true">
    <FadeIn>
      <Container className="content-container testimonials py-4 px-4">
      {/* <Row>
        <Col className="d-flex justify-content-center py-4">
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
        </Row> */}
        <Row className="d-flex justify-content-center">
        <Col className="d-flex justify-content-center pb-4" lg={4} md={12} sm={12}>
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
          <Col lg={6} md={12} sm={12} xs={12}>
            <Carousel>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Nitro_logo_slogan.jpg"
                  alt="Call Us Today!"
                  height={360}
                />
                <Carousel.Caption>
                  <h5>Call Us Today!</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Nitro_blue_wrap.jpg"
                  alt="Commercial Moving Package"
                  height={360}
                />
                <Carousel.Caption>
                  <h5>Residential Moving Package</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Nitro_chairs.jpg"
                  alt="Furniture Assembly &amp; Disassembly Package"
                  height={360}
                />
                <Carousel.Caption>
                <h5>Commercial Moving Package</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Nitro_truck_sideview.jpg"
                  alt="Junk &amp; Trash Hauling Package"
                  height={360}
                />
                <Carousel.Caption>
                  <h5>Junk &amp; Trash Hauling Package</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/Nitro_Assembly.png"
                  alt="Furniture Assembly &amp; Disassembly Package"
                  height={360}
                />
                <Carousel.Caption>
                  <h5>Furniture Assembly &amp; Disassembly Package</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </FadeIn>
   </Container>
  )
}