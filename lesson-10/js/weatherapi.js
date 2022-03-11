
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=50284db3b3fff6d7bb78ac4311f561e2'


fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
      
      const currentTemp = document.querySelector('#current-temp');
      const weathericon = document.querySelector('#weathericon');
      const caption = document.querySelector('figcaption')

      currentTemp.textContent = x.main.temp.toFixed(0);
      let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
      let imgalt = x.weather[0].description;
      imgalt = imgalt.split(' ').map(capitalize).join(' ');
      currentTemp.textContent = x.main.temp.toFixed(0);
      weathericon.setAttribute('src', imgsrc);
      weathericon.setAttribute('alt', imgalt);
      caption.innerHTML = `currently: ${imgalt}`;

    });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
}