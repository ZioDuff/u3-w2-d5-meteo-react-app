import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

const MyOtherDaysCard = () => {
  const param = useParams()
  let lat = param.lat
  let lon = param.lon
  const [days, setDays] = useState(null)
  const fetchOtherDays = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=98b90f764054011c99e9fe9e13e49d01`
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .then((resp) => {
        setDays(resp)
        console.log(days)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    if (lat) {
      fetchOtherDays()
    }
  }, [])

  return (
    days && (
      <Container fluid>
        <h1>Nei prossimi giorni</h1>
        <Row>
          {days.list.slice(0, 5).map((obj) => {
            return (
              <Col key={obj.id}>
                <Card>
                  <Card.Body className="d-flex align-items-center">
                    <div>
                      <Card.Title>
                        {days.city.name},{days.city.country}
                      </Card.Title>
                      <Card.Text>
                        {(obj.main.temp - 273.15).toFixed()}°C
                      </Card.Text>
                      <Card.Text>{obj.dt_txt}</Card.Text>
                    </div>
                    <Card.Img
                      style={{ width: "75px" }}
                      src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
                    />
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  )
}
export default MyOtherDaysCard
