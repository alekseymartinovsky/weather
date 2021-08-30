import React from 'react';

const RenderWeather = ({weather}) => {

    return (
        <>
            <div className="row p-0 m-0">
                <div className="col-3 p-0"></div>
                <div className="col-6 text-center p-0">
                    <h1 className="text-white display-1">
                        {weather.temp}°C
                    </h1>
                    <p className="text-white display-10 ">
                        {weather.description}    
                    </p>
                </div>
                <div className="col-3 p-0"></div>
            </div>
        </>
    )
}

export default RenderWeather;