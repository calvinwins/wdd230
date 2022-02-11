const temp = document.getElementById('temp');
const speed = document.getElementById('windSpeed');

const windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16));

const roundedWindChill= Math.round(windChill);
document.getElementById("windChill").innerHTML= roundedWindChill;