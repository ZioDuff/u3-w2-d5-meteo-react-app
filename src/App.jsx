import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyHomePage from "./Components/MyHomePage"
import MyWeatherPage from "./Components/MyWeatherPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyHomePage />} />
        <Route path="/Home/Weather/:lat/:lon" element={<MyWeatherPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
