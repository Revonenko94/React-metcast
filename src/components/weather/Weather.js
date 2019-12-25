import React from 'react'

const Weather = props => {
    return(
        <div className="weather-result">
            {props.city &&
            <div>
                <p>Ваш город: {props.city} {props.country}</p>
                <p>Тимпература: {props.temp} C</p>
                <p>Скорость ветра: {props.wind} м/с. </p>
                <p>Давление: {props.pressure} мбар.</p>
            </div>
            }
        </div>
    )
};




export default Weather