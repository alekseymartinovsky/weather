import axios from 'axios';

export default () => {
    const apiKey = "257ac7fe862376912a604e35a0d1975b";
    let url = "https://api.openweathermap.org/data/2.5/weather?";

    let pog = {};
    
    return{
        searchTodayWeather: (setWeather, position, lang, city)=>{
            console.log(position);
            if(position.status === ''){
                url+='q=';
                url += city + '&units=metric&appid=' + apiKey + '&lang=' + lang;
            }else{
                url += "lat=" + (Math.round(position.coords.latitude*1000)/1000) + "&lon=" + (Math.round(position.coords.longitude*1000)/1000); 
                url += "&units=metric&appid=" + apiKey + '&lang=' + lang;
            }
        
            axios.get(url).then(response => {
                pog = {
                    temp: Math.round(response.data.main.temp),
                    minTemp: response.data.main["temp_min"],
                    maxTemp: response.data.main["temp_max"],
                    tempFeels: Math.round(response.data.main.feels_like),
                    humidity: response.data.main.humidity,
                    windSpeed: response.data.wind.speed,
                    description: response.data.weather[0].description,
                    status: response.data.weather[0].main,
                    city: response.data.name,
                    country: response.data.sys.country
                }
                setWeather(pog);
            });
        }
    }
}