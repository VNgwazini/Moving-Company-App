import "./home.scss";
import {
 Container, 
 Row,
 Col,
 Button,
 Offcanvas,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';
import { InlineWidget } from "react-calendly";
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
            <Col className="">
              <Button variant="danger" onClick={handleShow}>
              Book an Appointment
              </Button>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Book an Appointment</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <InlineWidget 
                    url="https://calendly.com/nitromovingcompany?hide_gdpr_banner=1" 
                    styles={{
                      height: '100%'
                    }}
                  />
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
            <Col className="">
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