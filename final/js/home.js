const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=46.7167492&lon=-101.0540921&units=imperial&appid=a1a0a55f931ddc473d7fe806f1504796'
const apiURLF = 'https://api.openweathermap.org/data/2.5/forecast?lat=46.7167492&lon=-101.0540921&units=imperial&appid=a1a0a55f931ddc473d7fe806f1504796'
//current weather
fetch(apiURL)
    .then((response) => response.json())
    .then((x) => {
      
      const currentTemp = document.querySelector('#current-temp');
      const weathericon = document.querySelector('#weathericon');
      const caption = document.querySelector('figcaption')
      const currentHumidity = document.querySelector('#humidity')
      const temp = x.main.temp.toFixed(0)
      const humidity = x.main.humidity.toFixed(0);

      currentHumidity.textContent = humidity;
      currentTemp.textContent = temp;
      let imgsrc = `images/${x.weather[0].icon}.png`;
      let imgalt = x.weather[0].description;
      imgalt = imgalt.split(' ').map(capitalize).join(' ');
      weathericon.setAttribute('src', imgsrc);
      weathericon.setAttribute('alt', imgalt);
      caption.innerHTML = `Currently: ${imgalt}`;

    });
//forecast
fetch(apiURLf)
.then((response) => response.json())
.then((x) => {

});
    

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`

}
