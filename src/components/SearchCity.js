import React from 'react';
import useCityState from '../hooks/useCityState';
import useTodayWeather from '../hooks/useTodayWeather';
import useAllWeather from '../hooks/useAllWeather';

const SearchCity = ({lang, setWeather, setLongWeather}) => {
    const {city, changeCity, resetCity} = useCityState('');
    const {weather, searchTodayWeather} = useTodayWeather();
    const {searchAllWeather} = useAllWeather();

    const apiKey = "257ac7fe862376912a604e35a0d1975b";

    const search = (e) => {
        e.preventDefault();
        searchTodayWeather(setWeather, {status: ''}, lang, city);
        searchAllWeather(setLongWeather, {status: ''}, lang, city);
        resetCity();
    }

    return (
        <>
            <form className="d-flex" onSubmit={search}>
                <input 
                    className="form-control me-2" 
                    value={city} 
                    onChange={changeCity}
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                />
                <button 
                    className="btn btn-outline-secondary" 
                    type="submit"
                    onChange={changeCity}
                >Search</button>
            </form>
        </>
    )
}

export default SearchCity;