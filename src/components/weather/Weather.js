import React from 'react'
import './weather.css'
import WeatherItem from './weatherItems/weatherItems'

const Weather = props => {
    return(
        <div>
        {props.city &&
            <WeatherItem
            temp={props.temp}
            country={props.country}
            city={props.city}
            wind={props.wind}
            pressure={props.pressure}
            />
        }
    </div>
)};

export default Weather