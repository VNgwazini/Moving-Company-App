import "./topbar.scss";
import { 
  Container,
  Nav, 
  Navbar
} from 'react-bootstrap/'
import {Home, Phone, Mail, Directions, Instagram } from "@material-ui/icons"

export default function Topbar() {
  return (
    <Container className="topbar py-4 px-4 content-container" id="topbar" fluid="true">
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top" id="navbar" className="px-3">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
        <img src="https://lh3.googleusercontent.com/p/AF1QipNzVunLTYR_R3EY-GVBN9AUHewv-3gtId7o2Oaf=s1280-p-no-v1" alt=""/>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/home">
            <Home className="icon"/>
            &nbsp; Home
          </Nav.Link>
          <Nav.Link href="tel:+1-909-963-6249" target="_blank">
            <Phone className="icon"/>
            &nbsp; Call Now
          </Nav.Link>
          <Nav.Link href="https://g.page/nitro-moving-company?share" target="_blank">
            <Directions className="icon"/>
            &nbsp; Directions
          </Nav.Link>
          <Nav.Link href="mailto:malvinchali@gmail.com" target="_blank">
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