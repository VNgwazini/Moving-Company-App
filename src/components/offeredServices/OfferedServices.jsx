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
  <Container className="offeredServices content-container" id="offeredServices" fluid="true">
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
            <a href="/movingPackages">
              <p className="text-center">
              <HomeTwoTone/> &nbsp; Residential Moving
              </p>
            </a>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <a href="/movingPackages">
              <p className="text-center">
              <LocationCity/> &nbsp; Commercial Moving
              </p>
            </a>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <a href="/movingPackages">
              <p className="text-center">
              <BuildOutlined/> &nbsp; Furniture Disassembly
              </p>
            </a>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <a href="/movingPackages">
              <p className="text-center">
              <EventSeat/> &nbsp; Furniture Assembly
              </p>
            </a>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <a href="/movingPackages">
              <p className="text-center">
              <Delete/> &nbsp; Junk &amp; Trash Hauling
              </p>
            </a>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <a href="/movingPackages">
              <p className="text-center">
              <AllInbox/> &nbsp; Packing &amp; Wrapping
              </p>
            </a>
          </Col>
        </Row>
      </Container>
    </FadeIn>
   </Container>
  )
}