import React from 'react';


class WeatherItem extends React.Component{
   render() {
       return <div>
           <div className="container">
           <div className="row">
           <div className="col-md-6 weatherResult">
               <h3 className="nameCity">{this.props.city} {this.props.country}</h3>
               <p>Details</p>
               <hr />
               <div className="row">
               <div className="col-sm-4">
               <div className="card">
               <div className="card-body">
                   <h5 className="card-title">{this.props.temp} C</h5>
                   <img src={process.env.PUBLIC_URL + '/temp.svg'} />
               </div>
               </div>
               </div>
               <div className="col-sm-4">
               <div className="card">
               <div className="card-body">
                   <h5 className="card-title">{this.props.wind} м/с.</h5>
                   <img src={process.env.PUBLIC_URL + '/temp.svg'} />
               </div>
               </div>
               </div>
               <div className="col-sm-4">
               <div className="card">
               <div className="card-body">
                   <h5 className="card-title">{this.props.pressure} мбар.</h5>
                   <img src={process.env.PUBLIC_URL + '/temp.svg'} />
               </div>
               </div>
               </div>
               </div>
           </div>
           </div>
           </div>
       </div>
   }
}

export default  WeatherItem