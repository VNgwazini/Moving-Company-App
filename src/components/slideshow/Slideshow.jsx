import "./slideshow.scss";
import {
 Container, 
 Row,
 Col,
 Carousel,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';


export default function Slideshow() {
 
 return (
  <Container className="slideshow content-container pb-4" id="slideshow" fluid="true">
    <FadeIn>
      <Container className="content-container testimonials py-4 px-4">
        <Row className="d-flex justify-content-center">
          <Col lg={12} md={12} sm={12} xs={12}>
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
      </Container>
    </FadeIn>
   </Container>
  )
}