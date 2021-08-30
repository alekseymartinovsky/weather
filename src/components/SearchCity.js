import React from 'react';
import useCityState from '../hooks/useCityState';
import useTodayWeather from '../hooks/useTodayWeather';
import useAllWeather from '../hooks/useAllWeather';

const SearchCity = ({lang, setWeather, setLongWeather}) => {
    const {city, changeCity, resetCity} = useCityState('');
    const {searchTodayWeather} = useTodayWeather();
    const {searchAllWeather} = useAllWeather();

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