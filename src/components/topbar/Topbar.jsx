import "./topbar.scss";
import { 
  Container,
  Nav, 
  Navbar,
  Offcanvas
} from 'react-bootstrap/'
import {Home, Beenhere,Phone, Mail, Directions, Description,Instagram } from "@material-ui/icons"
import { InlineWidget } from "react-calendly";
import React, { useState } from 'react';

export default function Topbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="topbar py-4 px-4 content-container" id="topbar" fluid="true">
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top" id="navbar" className="px-3">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
        <img src="https://lh3.googleusercontent.com/p/AF1QipNzVunLTYR_R3EY-GVBN9AUHewv-3gtId7o2Oaf=s1280-p-no-v1" alt=""/>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/">
            <Home className="icon"/>
            &nbsp; Home
          </Nav.Link>
          <Nav.Link href="/movingPackages">
            <Description className="icon"/>
            &nbsp; Moving Packages
          </Nav.Link>
          <Nav.Link href="tel:+1-909-963-6249" target="_blank">
            <Phone className="icon"/>
            &nbsp; Call Now
          </Nav.Link>
          <Nav.Link onClick={handleShow}>
            <Beenhere className="icon"/>
            &nbsp; Book Now
          </Nav.Link>
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
          <Nav.Link href="https://g.page/nitro-moving-company?share" target="_blank">
            <Directions className="icon"/>
            &nbsp; Directions
          </Nav.Link>
          <Nav.Link href="mailto:nitromovingcompany@gmail.com" target="_blank">
            <Mail className="icon"/>
            &nbsp; Contact Us
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/nitromovingcompany/" target="_blank">
            <Instagram className="icon"/>
            &nbsp; Instagram
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}