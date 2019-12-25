import React from 'react';
import Info from "../../components/Info/Info";
import Weather from "../../components/weather/Weather";
import Form from "../../components/form/Form";


const API_WEATHER = "5201082a576111f7618c4445ec41504c";

class Body extends React.Component {
    state = {
        city: undefined,
        temp: undefined,
        country: undefined,
        pressure: undefined,
        wind: undefined
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if(city){
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_WEATHER}&units=metric`);
            const data = await api_url.json();
            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                wind: data.wind.speed,

            })
        }
    };

    render() {
        return <div className="body-weather">
            <Info />
            <Weather
                temp = {this.state.temp}
                city = {this.state. city}
                country = {this.state.country}
                pressure = {this.state.pressure}
                wind = {this.state.wind}
                error = {this.state.error}
            />
            <Form  methodWeather = {this.getWeather}/>
        </div>
    }
}
export default Body;