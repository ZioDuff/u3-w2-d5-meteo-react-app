import { Col, Container, Row } from "react-bootstrap"
import MySearchBar from "./MySearchBar"

const MyHomePage = () => {
  return (
    <Container fluid className="mt-5 ">
      <Row className="justify-content-center">
        <Col xs={6} className="text-center form p-5 rounded-3">
          <img
            className="logo"
            src="https://m.media-amazon.com/images/I/61nuuPxUvaL.png"
            alt="WeatherLogo"
          />
          <h1>MeteoJDM</h1>
          <p> il meteo di tutto il mondo a portata di mano</p>

          <MySearchBar />
        </Col>
      </Row>
    </Container>
  )
}
export default MyHomePage
