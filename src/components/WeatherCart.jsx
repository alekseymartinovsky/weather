import React from 'react';

const WeatherCart = ({weather, nameDay}) => {
    return(
        <div className="card col-1">
            <img className="card-img-top" />
            <div className="card-body">
                <p className="card-title text-center"> {nameDay} </p>
                <p className="card-title text-center"> {Math.floor(weather.min)} </p>
                <p className="card-title text-center"> {Math.ceil(weather.max)} </p>
            </div>
        </div>
    );
}

export default WeatherCart;