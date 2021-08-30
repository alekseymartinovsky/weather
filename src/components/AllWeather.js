import React from 'react';
import WeatherCart from './WeatherCart';

const AllWeather = ({allWeather, lang}) => {
    console.log(allWeather);
    const numDay = new Date().getDay();
    const enName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const ruName = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let nameDay = [];

    if(lang === 'ru'){
        nameDay = ruName;
    }else{
        nameDay = enName;
    }

    return(
        <>  
            <div className="row m-0 p-0">
                <div className="col-3"></div>
                <WeatherCart weather={allWeather[0]} nameDay={nameDay[numDay + 0]}/>
                <WeatherCart weather={allWeather[1]} nameDay={nameDay[numDay + 1]}/>
                <WeatherCart weather={allWeather[2]} nameDay={nameDay[numDay + 2]}/>
                <WeatherCart weather={allWeather[3]} nameDay={nameDay[numDay + 3]}/>
                <WeatherCart weather={allWeather[4]} nameDay={nameDay[numDay + 4]}/>
                <WeatherCart weather={allWeather[5]} nameDay={nameDay[numDay + 5]}/>
                <div className="col-3"></div>
            </div>
        </>
    )
}

export default AllWeather;