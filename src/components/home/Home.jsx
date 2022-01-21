import "./home.scss";
import {
 Container, 
 Row,
 Col,
 Button,
 Carousel
} from 'react-bootstrap/'

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
          Trusted by great teams
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="">
          <p className="text-center">
          Company Logo 1
          </p>
        </Col>
        <Col className="">
          <p className="text-center">
          Company Logo 2
          </p>
        </Col>
        <Col className="">
          <p className="text-center">
          Company Logo 3
          </p>
        </Col>
        <Col className="">
          <p className="text-center">
          Company Logo 4
          </p>
        </Col>
        <Col className="">
          <p className="text-center">
          Company Logo 5
          </p>
        </Col>
        <Col className="">
          <p className="text-center">
          Company Logo 6
          </p>
        </Col>
      </Row>
    </Container>
   </Container>
  )
}