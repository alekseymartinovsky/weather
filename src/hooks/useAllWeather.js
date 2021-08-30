import axios from 'axios';

export default () => {
    const apiKey = "257ac7fe862376912a604e35a0d1975b";
    let url = "https://api.openweathermap.org/data/2.5/forecast?";
    
    return{
        searchAllWeather: (setLongWeather, position, lang, city)=>{
            if(position.status === ''){
                url +="q=";
                url += city + '&units=metric&appid=' + apiKey + '&lang=' + lang;
            }else{
                url+= "lat=" + (Math.round(position.coords.latitude * 1000) / 1000) + "&lon=" + (Math.round(position.coords.longitude * 1000) / 1000);
                url+= '&units=metric&appid=' + apiKey + '&lang=' + lang;
            }

            axios.get(url).then(response => {
                let allWeather = [];
                let min = 100;
                let max = -100;
                let i = 0;
                response.data.list.forEach(el => {
                    if (min > el.main.temp) {
                        min = Number(el.main.temp);
                    }
                    if (max < el.main.temp) {
                        max = Number(el.main.temp);
                    }
                    allWeather[i] = {
                        min: min,
                        max: max,
                    };
                    if (el["dt_txt"].substr(11, 8) === "00:00:00") {
                        i++;
                        min = 100;
                        max = -100;
                        allWeather[i] = {
                            min: min,
                            max: max
                        }
                    }
                });
                setLongWeather(allWeather);
            });
        }
    }
}