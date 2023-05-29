import "./testimonials.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';
import Testimonial from 'react-testimonial';


export default function Testimonials() {

  return (
    <Container className="home content-container" id="home" fluid="true">
      <FadeIn>
        <Container className="content-container testimonials py-4 px-4">
          <Row>
            <Col className="d-flex justify-content-center py-4" lg={4} md={6} sm={12}>
              <Card className="card-size">
                <Card.Title className="text-center px-2">Business Hours</Card.Title>
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
            <Col lg={8} md={6} sm={12}>
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
                          src="https://lh3.googleusercontent.com/a-/AOh14GgY7tD91KtvCyRJpEpKBrTnl_GmJzK4rgrTWxnY-g=w90-h90-p-rp-mo-br100"
                          alt=""
                        >
                        </img>
                        <h3 className="py-2">Nomsa Chali</h3>
                        <p>
                          These guys were fast, and professional, I will definately call them again.
                        </p>
                      </div>
                    </div>
                    {/* <div className="card content">
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
                    handled our furniture with care. 
                  </p>
                </div>
              </div>
              <div className="card content">
                <div className="card-body text-center">
                  <img
                  className="py-2"
                  src="https://lh3.googleusercontent.com/a-/AOh14GjdRlkDORxkUZcaavRVTVqtFFrxQFFEwRfkNr6Ypg=w90-h90-p-rp-mo-br100"
                  alt=""
                  >
                  </img>
                  <h3 className="py-2">Brad Cave</h3>
                  <p>
                    Malvin is highly knowledgable with every aspect of the moving industry.   
                  </p>
                </div>
              </div> */}
                  </Testimonial>
                </Col>
              </Row>
              <Row className="primary-buttons py-4 d-flex justify-content-center">
                <Col className="">
                  <Button variant="danger" href="https://search.google.com/local/writereview?placeid=ChIJg_U2ef1Vw4ARuVmKM4OkI_U" target="_blank">
                    WRITE A REVIEW
                  </Button>
                </Col>
                <Col className="">
                  <Button variant="outline-danger" href="https://search.google.com/local/reviews?placeid=ChIJg_U2ef1Vw4ARuVmKM4OkI_U" target="_blank">
                    READ MORE
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </FadeIn>
    </Container>
  )
}