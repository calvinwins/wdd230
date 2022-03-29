const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=46.7167492&lon=-101.0540921&exclude=minutely,hourly&units=imperial&appid=a1a0a55f931ddc473d7fe806f1504796'

//current weather
fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
      
      const currentTemp = document.querySelector('#current-temp');

      const weathericon = document.querySelector('#weathericon');
      

      const caption = document.querySelector('figcaption');

      const currentHumidity = document.querySelector('#humidity');

      const temp = x.current.temp.toFixed(0)
      const humidity = x.current.humidity.toFixed(0);

      

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
    
    fetch(apiURL)
    .then((response) => response.json())
    .then(function (x) {
      const daily = jsonObject['daily'];
      daily.slice(-3).forEach(displayDaily);  // loop through each business
    });
    function display(day) {

      let weatherimg = `images/${x.daily.weather[0].icon}.png`;
      let weatheralt = x.daily.weather[0].description;
    
      let temperature = x.daily.weather.temp.toFixed(0);
    
      let humidity = x.daily.weather.humidity.toFIxed(0);
    }
