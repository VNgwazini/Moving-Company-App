import "./footer.scss";
import { 
  Container
} from 'react-bootstrap/'
import {Directions,Phone, Mail, Instagram} from "@material-ui/icons"

export default function Footer() {
  return (
    <Container className="welcome py-4 content-container" id="welcome" fluid="true">
    <div className="footer d-flex align-items-center justify-content-between px-2 py-4">
      <span className="d-flex justify-content-start">Nitro Moving Company © 2022 </span>
      <span className="d-flex justify-content-between">
        <a 
          target="_blank" 
          href="tel:+1-909-963-6249" 
          rel="noreferrer">
          <Phone className="mx-1"/>
        </a>
        <a 
          target="_blank" 
          href="https://g.page/nitro-moving-company?share" 
          rel="noreferrer">
          <Directions className="mx-1"/>
        </a>
        <a 
          target="_blank" 
          href="mailto:nitromovingcompany@gmail.com" 
          rel="noreferrer">
          <Mail className="mx-1"/>
        </a>
        <a 
          target="_blank" 
          href="https://www.instagram.com/nitromovingcompany/" 
          rel="noreferrer">
          <Instagram className="mx-1"/>
        </a>
      </span>
    </div>
    </Container>
  )
}