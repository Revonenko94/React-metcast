import React from 'react'

class Form extends React.Component{
    render(){
        return(
            <div className="weather-form">
                <form onSubmit={this.props.methodWeather}>
                    <input type="text" name="city" placeholder="Введите название города"/>
                    <button className="btn btn-secondary">Узнать погоду</button>
                </form>
            </div>
        )
    }
}



export default Form