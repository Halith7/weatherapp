import { useState } from "react"
import axios from "axios"
function Weather()
{
    const [city,setcity]=useState("")
    const [weather,setweather]=useState("")
    const[temperature,settemperature]=useState("")
    const [desc,setdesc]=useState("")
    function handleCity(event)
    {
        setcity(event.target.value)
    }

    function getWeather()
    {
        var weatherData= axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=417bb6951988e4fffddbc74f58597191`)
        weatherData.then(function(Success){
            console.log(Success.data)
            setweather(Success.data.weather[0].main)
            setdesc(Success.data.weather[0].description)
            settemperature(Success.data.main.temp)
        })
    }
    return(
        <div className="bg-blue-600 p-20">
            <div className="bg-yellow-200 p-10 border rounded-md  hover:bg-purple-200 hover:shadow-lightpurple">
                <div>
                <h1 className="text-2xl font-medium">Weather Report</h1>
                <p>I can give you a weater report about your city !</p>
                <input onChange={handleCity} type="text" placeholder="Enter your city"  className="m-2 border-black border rounded-md p-1"/><br/>
                <button onClick={getWeather} className="bg-blue-600 rounded-md m-2 p-1 ,mx-2 text-white">Get Report</button>
                </div>

                <div className="m-2">
                    <h1><b>Weather: </b>{weather}</h1>
                    <p><b>Temperature: </b>{temperature}</p>
                    <p><b>Description: </b>{desc}</p>

            

                </div>

            </div>

        </div>
    )
}
export default Weather 