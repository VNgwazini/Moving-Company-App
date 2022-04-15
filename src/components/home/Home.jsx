import "./home.scss";
import {
 Container, 
 Row,
 Col,
 Button,
 Offcanvas,
 Form,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';
import React, { useState } from 'react';

export default function Home() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
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
            {/* <Col>
              <Button variant="danger" href="https://calendly.com/nitromovingcompany" target="_blank">
              Book an Appointment
              </Button>
            </Col> */}
            <Col>
              <Button variant="danger" onClick={handleShow}>
              Book an Appointment
              </Button>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Book an Appointment</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="name" placeholder="Enter name..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email..." />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label>Number</Form.Label>
                      <Form.Control type="number" placeholder="Enter number..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label>How many bedrooms does your home have?</Form.Label>
                      <Form.Control type="number" placeholder="Enter number of bedrooms..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label>How many large appliances do you need moved?</Form.Label>
                      <Form.Control type="number" placeholder="Enter number of appliances..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label>Do you need help packing?&nbsp;</Form.Label>
                      <Form.Check
                        label="Yes"
                        name="group1"
                        type="radio"
                        id="helpPacking1"
                      />
                      <Form.Check
                        label="No"
                        name="group1"
                        type="radio"
                        id="helpPacking2"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                      <Form.Label>When would you like to move?&nbsp;</Form.Label>
                      <Form.Control type="date" placeholder="Date" />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
            <Col>
              <Button variant="outline-danger" href="tel:+1-909-963-6249">
                Speak with a Representative
              </Button>
            </Col>
          </Row>
          <Row className="h-50">
            <Col className="d-flex justify-content-center" lg={12} md={12} sm={12}>
              <img
              src="assets/NitroTruck.png"
              alt="Headshot"
              className="img-thumbnail"
              />
            </Col>
          </Row>
        </FadeIn>
      </Container>
    </FadeIn>
   </Container>
  )
}