

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Bentonville&units=imperial&appid=50284db3b3fff6d7bb78ac4311f561e2'


fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
      
      const currentTemp = document.querySelector('#current-temp');
      const weathericon = document.querySelector('#weathericon');
      const caption = document.querySelector('figcaption')
      const windSpeed = document.querySelector('#windSpeed')
      const temp = x.main.temp.toFixed(0)
      const speed = x.wind.speed.toFixed(2);

      windSpeed.textContent = x.wind.speed.toFixed(2);
      currentTemp.textContent = x.main.temp.toFixed(0);
      let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
      let imgalt = x.weather[0].description;
      imgalt = imgalt.split(' ').map(capitalize).join(' ');
      currentTemp.textContent = x.main.temp.toFixed(0);
      weathericon.setAttribute('src', imgsrc);
      weathericon.setAttribute('alt', imgalt);
      caption.innerHTML = `Currently: ${imgalt}`;

      if(temp <= 50 && speed > 3) {
        const windChill= Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16)));
        document.querySelector("#windChill").innerHTML= windChill;
        }
        else {
            document.querySelector("#windChill").innerHTML = "N/A"
        }

    });



    

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`

}