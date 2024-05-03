import { useState } from "react"
import { Button } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom"
const MySearchBar = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState("")

  const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&appid=98b90f764054011c99e9fe9e13e49d01`

  const handleFieldChange = (e) => {
    e.preventDefault()
    // searchCity()
    searchCity()
    // navigate(`/Home/Weather/${lat}/${lon}`)
    // lat && lon !== 0 ? navigate(`/Home/Weather/${resp[0].lat}/${resp[0].lon}`) : navigate("/")
  }

  const searchCity = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .then((resp) => {
        navigate(`/Home/Weather/${resp[0].lat}/${resp[0].lon}`)
        setSearchValue("")
        console.log(searchValue)
        // navigate(`/Home/Weather/${lat}/${lon}`)
      })
      .catch((err) => console.log(err))
    //   .finally(navigate(`/Home/Weather/${lat}/${lon}`))
  }

  return (
    <>
      <Form
        onSubmit={handleFieldChange}
        className="d-flex flex-column align-items-center"
      >
        <Form.Label htmlFor="inputPassword5">Cerca la tu citta</Form.Label>
        <Form.Control
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          placeholder="Roma,Tokyo,Madrid..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
          required
        />
        <Form.Text id="passwordHelpBlock" muted>
          Scegli una citta alla volta
        </Form.Text>
        <Button type="submit" className=" mt-3">
          Cerca
        </Button>
      </Form>
      {/* <ListGroup>
        {cordinate.map((obj) => {
          return <ListGroup.Item>{obj.name}</ListGroup.Item>
        })}
      </ListGroup> */}
    </>
  )
}

export default MySearchBar
