const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=46.7167492&lon=-101.0540921&exclude=minutely,hourly&units=imperial&appid=a1a0a55f931ddc473d7fe806f1504796'

//current weather
fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
      
      const currentTemp = document.querySelector('#current-temp');
    //   const temp1 = document.querySelector('#temp1');
    //   const temp2 = document.querySelector('#temp1');
    //   const temp3 = document.querySelector('#temp1');
      const weathericon = document.querySelector('#weathericon');
    //   const weathericon2 = document.querySelector('#weathericon2');
    //   const weathericon3 = document.querySelector('#weathericon3');
    //   const weathericon4 = document.querySelector('#weathericon4');
      const caption = document.querySelector('figcaption');
    //   const caption2 = document.querySelector('#figcaption2');
    //   const caption3 = document.querySelector('#figcaption3');
    //   const caption4 = document.querySelector('#figcaption4')
      const currentHumidity = document.querySelector('#humidity');
    //   const Humidity2 = document.querySelector('#humidity2');
    //   const Humidity3 = document.querySelector('#humidity3');
    //   const Humidity4 = document.querySelector('#humidity4');
      const temp = x.current.temp.toFixed(0)
      const humidity = x.current.humidity.toFixed(0);
    //   const currentAlert = document.querySelector('#alert')
    //   const tempTomorrow = x.daily.temp.day.toFixed(0)
      

      currentHumidity.textContent = humidity;
      currentTemp.textContent = temp;
      let imgsrc = `images/${x.current.weather[0].icon}.png`;
      let imgalt = x.current.weather[0].description;
    //   imgalt = imgalt.split(' ').map(capitalize).join(' ');
      weathericon.setAttribute('src', imgsrc);
      weathericon.setAttribute('alt', imgalt);
      caption.innerHTML = `Currently: ${imgalt}`;
      

    //   let alertName = x.alerts.event;
    //   let alertStart = x.alerts[0].start;
    //   let alertEnd = x.alerts[0].end;
    //   currentAlert.textContent = alertName,alertStart,alertEnd;

    });

    // response.json().then(function (data) {
    //     var fday = "";
    //     data.daily.forEach((value, index) => {
    //         if (index > 0) {
    //             var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
    //                 weekday: "long",
    //             });
    //             var icon = value.weather[0].icon;
    //             var temp = value.temp.day.toFixed(0);
    //             fday = `<div class="forecast-day">
    //                 <p>${dayname}</p>
    //                 <p><span class="ico-${icon}" title="${icon}"></span></p>
    //                 <div class="forecast-day--temp">${temp}<sup>°C</sup></div>
    //             </div>`;
    //             forecastEl[0].insertAdjacentHTML('beforeend', fday);
