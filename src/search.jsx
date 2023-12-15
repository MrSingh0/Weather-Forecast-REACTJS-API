import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css'
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    const [error, setError] = useState(null); 


    const url = "http://api.openweathermap.org/data/2.5/weather"
    const key = "a28a24054f662ef99e8052e61e8eb048";

    let getweather = async () => {
        try {
            let response = await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            
            return result;
        } catch (error) {
            setError('Error fetching data. Please try again.');
            throw error; 
        }
    }


    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        setError(null);
        getweather().then((newInfo) => {
            updateInfo(newInfo);
        }).catch((error) => {
            console.error('Error getting weather:', error);
        });
    };

    return (
        <div className="searchbox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City-Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /> <br />
                <Button variant="contained" type="submit" style={{ backgroundColor: 'grey', border: '1.5px solid black'}}>Submit</Button>
                {error && <h3 className='error'>Please check city name!</h3>}
            </form>
        </div>
    );
}