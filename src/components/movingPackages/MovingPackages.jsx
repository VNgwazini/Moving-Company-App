import "./movingPackages.scss";
import { 
  Container,
  Row,
  Col,
  Button,
  Accordion,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';
import Slideshow from "../slideshow/Slideshow";


export default function MovingPackages() {
  const url2Man = "https://drive.google.com/file/d/1fk1qOUiDmOkhxxX_Y3d8wz1NHpGVKQ-0/preview"
  const url3Man = "https://drive.google.com/file/d/1aXGZ7Qviic5oQ-AYJ4xhhWu3i7jqMQlU/preview"
  const url4Man = "https://drive.google.com/file/d/1PopJC7AuFYUpbcaTwRMXwxM0_jgz7mH6/preview"
  return (
    <>
    <Container className="movingPackages content-container py-4 text-center" id="movingPackages" fluid="true">
      <FadeIn>
        <Row>
          <Col className="d-flex justify-content-center">
              <p className="text-center pt-4">
              Nitro Moving Company
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <p className="home-title text-center">
              Moving Packages
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <p className="text-center py-2 px-4">
              Here at Nitro Moving, we have several moving packages created to address your specific needs.
              </p>
              {/* <p className="text-center py-2 px-4">
              Please select your moving below and send your downloaded contract to nitromovingcompany@gmail.com
              </p> */}
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col lg={6} md={12} sm={12} xs={12}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Residential 2-Man Moving Package</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col className="d-flex justify-content-center py-2">
                        <Button variant="danger">
                          <a 
                            href="https://drive.google.com/uc?id=1fk1qOUiDmOkhxxX_Y3d8wz1NHpGVKQ-0&export=download" 
                            target="_blank" 
                            rel="noreferrer" 
                            class="btn">Download Contract
                          </a>
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <h6 className="text-center py-2 px-4">
                        Please send your signed contract to nitromovingcompany@gmail.com
                      </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center py-2">
                        <iframe
                          src={url2Man+"#toolbar=1&navpanes=0&scrollbar=0"}
                          className="px-4"
                          frameBorder="0"
                          scrolling="auto"
                          title="Moving Packages">
                        </iframe>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Residential 3-Man Moving Package</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col className="d-flex justify-content-center py-2">
                        <Button variant="danger">
                          <a 
                            href="https://drive.google.com/uc?id=1aXGZ7Qviic5oQ-AYJ4xhhWu3i7jqMQlU&export=download" 
                            target="_blank" 
                            rel="noreferrer" 
                            class="btn">Download Contract
                          </a>
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <h6 className="text-center py-2 px-4">
                        Please send your signed contract to nitromovingcompany@gmail.com
                      </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center py-2">
                        <iframe
                          src={url3Man+"#toolbar=1&navpanes=0&scrollbar=0"}
                          className="px-4"
                          frameBorder="0"
                          scrolling="auto"
                          title="Moving Packages">
                        </iframe>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                <Accordion.Header>Residential 4-Man Moving Package</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col className="d-flex justify-content-center py-2">
                        <Button variant="danger">
                          <a 
                            href="https://drive.google.com/uc?id=1PopJC7AuFYUpbcaTwRMXwxM0_jgz7mH6&export=download" 
                            target="_blank" 
                            rel="noreferrer" 
                            class="btn">Download Contract
                          </a>
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <h6 className="text-center py-2 px-4">
                        Please send your signed contract to nitromovingcompany@gmail.com
                      </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center py-2">
                        <iframe
                          src={url4Man+"#toolbar=1&navpanes=0&scrollbar=0"}
                          className="px-4"
                          frameBorder="0"
                          scrolling="auto"
                          title="Moving Packages">
                        </iframe>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
'                {/* <Accordion.Item eventKey="3">
                  <Accordion.Header>Junk &amp; Trash Hauling Package</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col className="d-flex justify-content-center py-2">
                        <Button variant="danger">
                          <a 
                            href="https://drive.google.com/uc?id=1w_uV7HSoVg_yAu7VXPimw_SSL6GmkkRm&export=download" 
                            target="_blank" 
                            rel="noreferrer" 
                            class="btn">Download Contract
                          </a>
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <h6 className="text-center py-2 px-4">
                        Please send your signed contract to nitromovingcompany@gmail.com
                      </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center py-2">
                        <iframe
                          src={url+"#toolbar=1&navpanes=0&scrollbar=0"}
                          className="px-4"
                          frameBorder="0"
                          scrolling="auto"
                          title="Moving Packages">
                        </iframe>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>' */}
                {/* <Accordion.Item eventKey="4">
                  <Accordion.Header>Packing &amp; Wrapping Package</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col className="d-flex justify-content-center py-2">
                        <Button variant="danger">
                          <a 
                            href="https://drive.google.com/uc?id=1w_uV7HSoVg_yAu7VXPimw_SSL6GmkkRm&export=download" 
                            target="_blank" 
                            rel="noreferrer" 
                            class="btn">Download Contract
                          </a>
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <h6 className="text-center py-2 px-4">
                        Please send your signed contract to nitromovingcompany@gmail.com
                      </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center py-2">
                        <iframe
                          src={url+"#toolbar=1&navpanes=0&scrollbar=0"}
                          className="px-4"
                          frameBorder="0"
                          scrolling="auto"
                          title="Moving Packages">
                        </iframe>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item> */}
              </Accordion>
              <p className="text-center px-4">
                *Rates are subject to change based on location.*
              </p>
            </Col>
          </Row>
        </FadeIn>
    </Container>
    <FadeIn>
      <Slideshow/>
    </FadeIn>
    </>
  )

}

