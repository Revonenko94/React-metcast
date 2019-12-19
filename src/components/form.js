import React from 'react'

class Form extends React.Component{
    render(){
        return(
            <div className="weather-form">
                <form onSubmit={this.props.methodWeather}>
                    <input type="text" name="city" placeholder="Введите название города"/>
                    <button>Узнать погоду</button>
                </form>
            </div>
        )
    }
}
// const Form = props => (
//         <div className="weather-form">
//             <form onSubmit={props.methodWeather}>
//                 <input type="text" name="city" placeholder="Введите название города"/>
//                 <button type="button">Узнать погоду</button>
//             </form>
//         </div>
//     )


export default Form