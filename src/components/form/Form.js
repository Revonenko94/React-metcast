import React from 'react'
import './form.css'

class Form extends React.Component{
    render(){
        return(
            <div className="container">
            <div className="row">
            <div className="weatherForm col-md-6">
                <form onSubmit={this.props.methodWeather}>
                    <div className="form-group">
                       <input className="form-control" type="text" name="city" id="nameCity" placeholder="Введите название города"/>
                    </div>
                    <button className="btn btn-secondary ">Узнать погоду</button>
                </form>
            </div>
            </div>
            </div>
        )
    }
}



export default Form