import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

const MyWeatherPage = () => {
  const param = useParams()
  let lat = param.lat
  let lon = param.lon

  const URL2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=98b90f764054011c99e9fe9e13e49d01`
  const [generateCity, setGenerateCity] = useState({})

  //   const celsiusTemp= (generateCity.main.temp - 273.15)*5/9
  const generateCardWeather = () => {
    fetch(URL2)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .then((generateCity) => {
        setGenerateCity(generateCity)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    generateCardWeather()
  }, [])

  return (
    generateCity && (
      <Container>
        <Row className="justify-content-center">
          <Col lg={4}>
            <Card
              className="text-center mt-4 py-5 rounded-5 weather-card"
              key={generateCity.id}
            >
              <Card.Title>
                {generateCity.name},{generateCity.sys.country}
              </Card.Title>

              <Card.Body>
                <Card.Img
                  style={{ width: "75px" }}
                  src={`https://openweathermap.org/img/wn/${generateCity.weather[0].icon}@2x.png`}
                />
                <Card.Text className="fs-1">
                  {(generateCity.main.temp - 273.15).toFixed()}°C
                </Card.Text>
                <Card.Text className="fs-3">
                  {generateCity.weather[0].main}
                </Card.Text>
              </Card.Body>
              <Card.Body className="  d-flex justify-content-evenly align-items-center">
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="m-0">
                    <i className="bi bi-wind"></i>
                  </Card.Text>
                  <Card.Text className="m-0">Wind</Card.Text>
                  <Card.Text className="m-0">
                    {generateCity.wind.speed}
                  </Card.Text>
                </Card.Body>

                <Card.Body className="border-start border-end  d-flex flex-column align-items-center">
                  <Card.Text className="m-0">
                    <i className="bi bi-moisture"></i>
                  </Card.Text>
                  <Card.Text className="m-0">Humidity:</Card.Text>

                  <Card.Text>{generateCity.main.humidity}%</Card.Text>
                </Card.Body>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="m-0">
                    <i className="bi bi-thermometer-sun"></i>
                  </Card.Text>
                  <Card.Text className="m-0">Feeling</Card.Text>
                  <Card.Text className="m-0">
                    {(generateCity.main.feels_like - 273.15).toFixed(1)}
                  </Card.Text>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  )
}
export default MyWeatherPage
