import React, { useState } from 'react';
import SearchCity from './SearchCity';
import RenderWeather from './RenderWeather';
import Location from './Location';
import DateTime from './DateTime';
import AllWeather from './AllWeather';
import useTodayWeather from '../hooks/useTodayWeather';
import useAllWeather from '../hooks/useAllWeather';

const App = () => {
    const [lang, setLang] = useState('en');
    const [weather, setWeather] = useState({});
    const {searchTodayWeather} = useTodayWeather();
    const {searchAllWeather} = useAllWeather();
    const [longWeather, setLongWeather] = useState([
        {
            max: '',
            min: ''
        },
        {
            max: '',
            min: ''
        },
        {
            max: '',
            min: ''
        },
        {
            max: '',
            min: ''
        },
        {
            max: '',
            min: ''
        },
        {
            max: '',
            min: ''
        },
    ]);

    if(weather.temp === undefined){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
           alert("Мы не можем определить Ваше местоположение, введите город в форму");
        }
    }

    function showPosition (position) {
        searchTodayWeather(setWeather, position, lang, '');
        searchAllWeather(setLongWeather, position, lang, '');
    }

    const changeLanguage = () => {
        if(lang === 'en'){
            setLang('ru');
        }else{
            setLang('en');
        }
    }

    return(
        <>
            <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <div>
                        <a href="" className="navbar-brand">Weather</a>
                        <button
                            className="btn btn-outline-secondary"
                            value={lang}
                            onClick={changeLanguage}
                        >
                            {lang}
                        </button>
                    </div>
                    <SearchCity 
                        lang={lang} 
                        setWeather={setWeather}
                        setLongWeather={setLongWeather}
                    />
                </div>
            </nav>
            <Location country={weather.country} city={weather.city} />
            <DateTime lang={lang} />
            <RenderWeather weather={weather} />
            <AllWeather allWeather={longWeather} lang={lang } />
        </>
    )
}

export default App;