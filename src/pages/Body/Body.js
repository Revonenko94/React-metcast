import React from 'react';
import Info from "../../components/Info/Info";
import Weather from "../../components/weather/Weather";
import Form from "../../components/form/Form";
import "./body.css"


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
            // const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_WEATHER}&units=metric`);
            const data = await api_url.json();
            console.log(data);
            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                wind: data.wind.speed,
                icon:data.weather.icon
            })
        }
    };

    render() {
        return <div className="bodyWeather">
            <Info />
            <Form  methodWeather = {this.getWeather}/>
            < Weather
                temp = {this.state.temp}
                city = {this.state.city}
                country = {this.state.country}
                pressure = {this.state.pressure}
                wind = {this.state.wind}
                error = {this.state.error}
                icon = {this.state.icon}
            />
        </div>
    }
}
export default Body;