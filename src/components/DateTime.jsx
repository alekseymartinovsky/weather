import React, {useEffect, useState} from 'react';

const DateTime = ({lang}) => {
    const date = new Date();

    const enDay = ['sanday', 'monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday'];
    const ruDay = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    const startTime = {
        hours: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds()
    }

    const [time, setTime] = useState(startTime);
  
    let day = '';
    
    if(lang === 'en'){
        day += enDay[date.getDay()];
    }else{
        day += ruDay[date.getDay()];
    }

    const editTime = (num) => {
        if(num < 10){
            num = '0' + String(num);
        }
        return num;
    }

    useEffect(() => {
        setTimeout(()=>{
            setTime({
                hours: editTime(date.getHours()),
                min: editTime(date.getMinutes()),
                sec: editTime(date.getSeconds()),
            });
        }, 200); 
    }, [time]);


    return(
        <div className="text-center">
            <h6 className="text-white display-10">
              {day + ',    '+ date.toLocaleDateString() + ',    ' + time.hours + ':' + time.min + ':' + time.sec}
            </h6>
        </div>
    );
}

export default DateTime;