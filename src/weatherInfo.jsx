import InfoBox from "./infoBox"
import SearchBox from "./search"
import "./weather.css"
import { useState } from "react";

export default function WeatherInfo(){
    const [WeatherInfo, setWeatherInfo]= useState({
        city: "City Name",
        feelslike: 0.00,
        temp: 0.00,
        tempMax: 0.00,
        tempMin: 0.00,
        humidity: 0,
        weather: "weather",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div className="tain">
          <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={WeatherInfo}/>
        </div>
      );
}