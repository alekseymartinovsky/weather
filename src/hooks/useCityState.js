import {useState} from 'react';

export default () => {
    const [city, setCity] = useState('');

    return{
        city,
        changeCity: (e) => {
            setCity(e.target.value);
        },
        resetCity: () => {
            setCity('');
        }
    }
}