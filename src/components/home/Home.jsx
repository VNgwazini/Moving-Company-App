import "./home.scss";
import {
 Container, 
 Row,
 Col,
 Button,
 Carousel,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';
import Slideshow from "../slideshow/Slideshow";


export default function Home() {
 
 return (
  <Container className="home content-container pt-4" id="home" fluid="true">
    <FadeIn>
      <Container className="content-container py-4 px-4">
        <FadeIn>
          <Row>
            <Col className="">
              <p className="text-center pt-4">
              Nitro Moving Company
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <p className="home-title text-center">
              The Moving Specialists
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <p className="text-center py-2">
              Your source of a stress-free moving experience. 
              Let us take care of your moving needs, from door to door.
              </p>
            </Col>
          </Row>
          <Row className="primary-buttons py-4">
            <Col className="">
              <Button variant="danger" href="https://calendly.com/nitromovingcompany" target="_blank">
              Book an Appointment
              </Button>
            </Col>
            <Col className="">
              <Button variant="outline-danger" href="tel:+1-909-963-6249">
                Speak with a Representative
              </Button>
            </Col>
          </Row>
          {/* <Row className="h-50">
            <Col className="d-flex justify-content-center" lg={12} md={12} sm={12}>
              <img
              src="assets/NitroTruck.png"
              alt="Headshot"
              className="img-thumbnail"
              />
            </Col>
          </Row> */}
          <Row className="h-50">
            <Col className="d-flex justify-content-center" lg={12} md={12} sm={12}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/NitroTruck.png"
                    alt="Call Us Today!"
                  />
                  {/* <Carousel.Caption>
                    <h5>Door-to-door service</h5>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/Nitro_logo_slogan.jpg"
                    alt="Call Us Today!"
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
                  />
                  <Carousel.Caption>
                    <h5>Furniture Assembly &amp; Disassembly Package</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </FadeIn>
      </Container>
    </FadeIn>
   </Container>
  )
}