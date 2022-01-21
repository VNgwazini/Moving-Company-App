import "./home.scss";
import {
 Container, 
 Row,
 Col,
 Button,
 Carousel
} from 'react-bootstrap/'
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
    <Container className="content-container testimonials py-4" fluid="true">
      <Row>
        <Col>
          <Testimonial>
                <div className="card content">
                  <div className="card-body text-center">
                    <img
                    className="py-2"
                    src="https://lh3.googleusercontent.com/a-/AOh14Gh9B93AFDIVhCHQfKm7rfB4qzRYJAsHBNeSklk9zg=w90-h90-p-rp-mo-br100"
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
   </Container>
  )
}