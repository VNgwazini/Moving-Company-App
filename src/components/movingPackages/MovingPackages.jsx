import "./movingPackages.scss";
import { 
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap/'

export default function MovingPackages() {
const url = "https://drive.google.com/file/d/1w_uV7HSoVg_yAu7VXPimw_SSL6GmkkRm/preview"
  return (
    <>
    <Container className="movingPackages content-container py-4" id="movingPackages" fluid="true">
      <Row>
        <Col className="d-flex justify-content-center pt-4">
          <h5>Moving Packages</h5>
        </Col>
      </Row>
      <Row>
          <Col className="d-flex justify-content-center py-2">
            <Button variant="danger">
              <a 
                href="https://drive.google.com/uc?id=1w_uV7HSoVg_yAu7VXPimw_SSL6GmkkRm&export=download" 
                target="_blank" 
                rel="noreferrer" 
                class="btn">Download Package
              </a>
              
            </Button>
          </Col>
        </Row>
          <iframe
            src={url+"#toolbar=1&navpanes=0&scrollbar=0"}
            className="px-4"
            frameBorder="0"
            scrolling="auto"
            title="Moving Packages">
          </iframe>
    </Container>
    </>
  )

}

