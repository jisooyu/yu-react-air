import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [airData, setAirData] = useState([])

  useEffect(()=> {
      async function fetchAirData(){
        const response = await axios.get('http://localhost:8000')

        const jsonResponseBodyItem = response.data

        console.log("jsonResponseBodyItem from App", jsonResponseBodyItem.pm25)
      
        const airdata = {
          location: jsonResponseBodyItem.location,
          time: jsonResponseBodyItem.time,
          pm10: jsonResponseBodyItem.pm10,
          pm25: jsonResponseBodyItem.pm25,
          no2: jsonResponseBodyItem.no2
        }

        setAirData(airdata)
      }
    fetchAirData()
  }, [])
 

  return (
    <ul>
        <li>위치: {airData.location}</li>
        <li>시각: {airData.time}</li>
        <li>pm10: {airData.pm10}</li>
        <li>pm25: {airData.pm25}</li>
        <li>no2: {airData.no2}</li>
    </ul>
)
}

export default App;