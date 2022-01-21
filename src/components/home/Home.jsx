import "./home.scss";
import {
 Container, 
 Row,
 Col,
 Button,
 Card,
 ListGroup,
 Badge,
} from 'react-bootstrap/'
import { AllInbox, BuildOutlined, Delete, EventSeat, HomeTwoTone, LocationCity } from "@material-ui/icons";

import Testimonial from 'react-testimonial';


export default function Home() {
 
 return (
   <Container className="home content-container py-4" id="home" fluid="true">
    <Container className="content-container py-4 px-4" fluid="true">
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
          Your source of truth for every candidate relationship. 
          Track each touchpoint in the talent acquisition funnel and drive better decisions with predictive analytics.
          </p>
        </Col>
      </Row>
      <Row className="primary-buttons py-4">
        <Col className="">
          <Button variant="danger">
          Book an Appointment
          </Button>
        </Col>
        <Col className="">
          <Button variant="outline-danger">
            Speak with a Representative
          </Button>
        </Col>
      </Row>
      <Row className="px-4">
          <Col className="py-4 px-4 d-flex justify-content-center">
            <img src="assets/NitroTruck.png"></img>
          </Col>
      </Row>
    </Container>
    <Container className="content-container trusted py-4 px-4" fluid="true">
      <Row>
        <Col className="">
          <p className=" trusted-title text-center">
            Offered Services
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="" sm={3} md={4} lg={4}>
          <p className="text-center">
          <HomeTwoTone/> &nbsp; Residential Moving
          </p>
        </Col>
        <Col className="" sm={3} md={4} lg={4}>
          <p className="text-center">
          <LocationCity/> &nbsp; Commercial Moving
          </p>
        </Col>
        <Col className="" sm={3} md={4} lg={4}>
          <p className="text-center">
          <BuildOutlined/> &nbsp; Furniture Disassembly
          </p>
        </Col>
        <Col className="" sm={3} md={4} lg={4}>
          <p className="text-center">
          <EventSeat/> &nbsp; Furniture Assembly
          </p>
        </Col>
        <Col className="" sm={3} md={4} lg={4}>
          <p className="text-center">
          <Delete/> &nbsp; Junk/Trash Hauling
          </p>
        </Col>
        <Col className="" sm={3} md={4} lg={4}>
          <p className="text-center">
          <AllInbox/> &nbsp; Packing &amp; Wrapping
          </p>
        </Col>
      </Row>
    </Container>
    <Container className="content-container testimonials py-4" fluid="true">
      <Row>
        <Col>
          <Testimonial>
                <div className="card content">
                  <div className="card-body text-center">
                    <img
                    className="py-2"
                    src="https://lh3.googleusercontent.com/a-/AOh14Gh9B93AFDIVhCHQfKm7rfB4qzRYJAsHBNeSklk9zg=w90-h90-p-rp-mo-br100"
                    alt=""
                    >
                    </img>
                    <h3 className="py-2">Samuel Ekong</h3>
                    <p>
                      Our experience with the Nitro Moving Company was excellent. 
                      We are completely satisfied.  
                    </p>
                  </div>
                </div>
                <div className="card content">
                  <div className="card-body text-center">
                  <img
                  className="py-2"
                  src="https://lh3.googleusercontent.com/a-/AOh14Gi0HGO8VARvl7tJafdvZ26K3u9yeyTUrfUi0Q3BKw=w90-h90-p-rp-mo-br100"
                  alt=""
                  >
                  </img>
                  <h3 className="py-2">John O'Brien</h3>
                  <p>
                    I used them for my move in Lake Arrowhead to San Bernardino and it was AWESOME. 
                  </p>
                  </div>
                </div>
                <div className="card content">
                  <div className="card-body text-center">
                  <img
                  className="py-2"
                  src="https://lh3.googleusercontent.com/a-/AOh14GgHeevMaEqa2DKuCStuXI-kJMxV4DMX3kZlYM5bZQ=w90-h90-p-rp-mo-br100"
                  alt=""
                  >
                </img>
                <h3 className="py-2">Kat DeLong</h3>
                <p>
                  Nigel and his crew were very professional, 
                  handled our furniture with care (wrapped every piece), 
                  courteous and thoughtful. 
                </p>
                  </div>
                </div>
            </Testimonial>
        </Col>
      </Row>
    </Container>
    <Container className="hoursMap content-container py-4 px-4" id="home" fluid="true">
      <Row>
        <Col className="d-flex justify-content-center py-4 px-4" lg={12} md={12} sm={12}>
          <Card className="card-size">
              <Card.Title className="text-center px-2 pb-4">Business Hours</Card.Title>
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
          </Row>
          </Container>
    <Container className="hoursMap content-container py-4 px-4" id="home" fluid="true">
          <Row>
          <Col className="d-flex justify-content-center align-items-center py-4 px-4" lg={12} md={12} sm={12}>
          <Card className="card-size flex-grow-1">
            <Card.Title className="text-center px-2">DIRECTIONS</Card.Title>
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
   </Container>
  )
}