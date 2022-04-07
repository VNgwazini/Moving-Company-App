import "./offeredServices.scss";
import {
 Container, 
 Row,
 Col,
} from 'react-bootstrap/'
import { AllInbox, BuildOutlined, Delete, EventSeat, HomeTwoTone, LocationCity } from "@material-ui/icons";
import FadeIn from 'react-fade-in';


export default function OfferedServices() {
 
 return (
  <Container className="home content-container" id="home" fluid="true">
    <FadeIn>
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
    </FadeIn>
   </Container>
  )
}