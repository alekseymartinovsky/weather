(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{21:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(15),r=a.n(s),i=(a(20),a(21),a(3)),o=a(4),l=a.n(o),d=function(){var e="257ac7fe862376912a604e35a0d1975b",t="https://api.openweathermap.org/data/2.5/weather?",a={};return{searchTodayWeather:function(n,c,s,r){console.log(c),""===c.status?(t+="q=",t+=r+"&units=metric&appid="+e+"&lang="+s):(t+="lat="+Math.round(1e3*c.coords.latitude)/1e3+"&lon="+Math.round(1e3*c.coords.longitude)/1e3,t+="&units=metric&appid="+e+"&lang="+s),l.a.get(t).then((function(e){a={temp:Math.round(e.data.main.temp),minTemp:e.data.main.temp_min,maxTemp:e.data.main.temp_max,tempFeels:Math.round(e.data.main.feels_like),humidity:e.data.main.humidity,windSpeed:e.data.wind.speed,description:e.data.weather[0].description,status:e.data.weather[0].main,city:e.data.name,country:e.data.sys.country},n(a)}))}}},m=function(){var e="257ac7fe862376912a604e35a0d1975b",t="https://api.openweathermap.org/data/2.5/forecast?";return{searchAllWeather:function(a,n,c,s){""===n.status?(t+="q=",t+=s+"&units=metric&appid="+e+"&lang="+c):(t+="lat="+Math.round(1e3*n.coords.latitude)/1e3+"&lon="+Math.round(1e3*n.coords.longitude)/1e3,t+="&units=metric&appid="+e+"&lang="+c),l.a.get(t).then((function(e){var t=[],n=100,c=-100,s=0;e.data.list.forEach((function(e){n>e.main.temp&&(n=Number(e.main.temp)),c<e.main.temp&&(c=Number(e.main.temp)),t[s]={min:n,max:c},"00:00:00"===e.dt_txt.substr(11,8)&&(s++,n=100,c=-100,t[s]={min:n,max:c})})),a(t)}))}}},u=a(0),h=function(e){var t=e.lang,a=e.setWeather,c=e.setLongWeather,s=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return{city:a,changeCity:function(e){c(e.target.value)},resetCity:function(){c("")}}}(),r=s.city,o=s.changeCity,l=s.resetCity,h=d().searchTodayWeather,j=m().searchAllWeather;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{className:"d-flex",onSubmit:function(e){e.preventDefault(),h(a,{status:""},t,r),j(c,{status:""},t,r),l()},children:[Object(u.jsx)("input",{className:"form-control me-2",value:r,onChange:o,type:"search",placeholder:"Search","aria-label":"Search"}),Object(u.jsx)("button",{className:"btn btn-outline-secondary",type:"submit",onChange:o,children:"Search"})]})})},j=function(e){var t=e.weather;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"row p-0 m-0",children:[Object(u.jsx)("div",{className:"col-3 p-0"}),Object(u.jsxs)("div",{className:"col-6 text-center p-0",children:[Object(u.jsxs)("h1",{className:"text-white display-1",children:[t.temp,"\xb0C"]}),Object(u.jsx)("p",{className:"text-white display-10 ",children:t.description})]}),Object(u.jsx)("div",{className:"col-3 p-0"})]})})},b=function(e){var t=e.country,a=e.city;return Object(u.jsx)("div",{className:"mt-5",children:Object(u.jsxs)("h1",{className:"flex display-8 text-center text-white",children:[a,", ",t]})})},x=function(e){var t=e.lang,a=new Date,c={hours:a.getHours(),min:a.getMinutes(),sec:a.getSeconds()},s=Object(n.useState)(c),r=Object(i.a)(s,2),o=r[0],l=r[1],d="";d+="en"===t?["sanday","monday","tuesday","wednesday","thrusday","friday","saturday"][a.getDay()]:["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043f\u044f\u0442\u043d\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043e\u0442\u0430"][a.getDay()];var m=function(e){return e<10&&(e="0"+String(e)),e};return Object(n.useEffect)((function(){setTimeout((function(){l({hours:m(a.getHours()),min:m(a.getMinutes()),sec:m(a.getSeconds())})}),200)}),[o]),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("h6",{className:"text-white display-10",children:d+",    "+a.toLocaleDateString()+",    "+o.hours+":"+o.min+":"+o.sec})})},p=function(e){var t=e.weather,a=e.nameDay;return Object(u.jsxs)("div",{className:"card col-1",children:[Object(u.jsx)("img",{className:"card-img-top",alt:""}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("p",{className:"card-title text-center",children:[" ",a," "]}),Object(u.jsxs)("p",{className:"card-title text-center",children:[" ",Math.floor(t.min)," "]}),Object(u.jsxs)("p",{className:"card-title text-center",children:[" ",Math.ceil(t.max)," "]})]})]})},O=function(e){var t=e.allWeather,a=e.lang;console.log(t);var n=(new Date).getDay(),c=[];return c="ru"===a?["\u0412\u0441","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u0412\u0441","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431"]:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"row m-0 p-0",children:[Object(u.jsx)("div",{className:"col-3"}),Object(u.jsx)(p,{weather:t[0],nameDay:c[n+0]}),Object(u.jsx)(p,{weather:t[1],nameDay:c[n+1]}),Object(u.jsx)(p,{weather:t[2],nameDay:c[n+2]}),Object(u.jsx)(p,{weather:t[3],nameDay:c[n+3]}),Object(u.jsx)(p,{weather:t[4],nameDay:c[n+4]}),Object(u.jsx)(p,{weather:t[5],nameDay:c[n+5]}),Object(u.jsx)("div",{className:"col-3"})]})})},g=function(){var e=Object(n.useState)("en"),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({}),r=Object(i.a)(s,2),o=r[0],l=r[1],p=d().searchTodayWeather,g=m().searchAllWeather,y=Object(n.useState)([{max:"",min:""},{max:"",min:""},{max:"",min:""},{max:"",min:""},{max:"",min:""},{max:"",min:""}]),f=Object(i.a)(y,2),v=f[0],w=f[1];void 0===o.temp&&(navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){p(l,e,a,""),g(w,e,a,"")})):alert("\u041c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0412\u0430\u0448\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434 \u0432 \u0444\u043e\u0440\u043c\u0443"));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("nav",{className:"navbar navbar-light",style:{backgroundColor:"#e3f2fd"},children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:"",className:"navbar-brand",children:"Weather"}),Object(u.jsx)("button",{className:"btn btn-outline-secondary",value:a,onClick:function(){c("en"===a?"ru":"en")},children:a})]}),Object(u.jsx)(h,{lang:a,setWeather:l,setLongWeather:w})]})}),Object(u.jsx)(b,{country:o.country,city:o.city}),Object(u.jsx)(x,{lang:a}),Object(u.jsx)(j,{weather:o}),Object(u.jsx)(O,{allWeather:v,lang:a})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b7ef87d5.chunk.js.map