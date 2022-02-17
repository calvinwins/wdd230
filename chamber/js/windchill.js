const temp = document.querySelector('#temp');
const speed = document.querySelector('#windSpeed');

if(t <= 50 && s > 3) {
    const windChill= Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16)));
    document.getElementById("windChill").innerHTML= windChill;   
}
else {
    document.getElementById("windChill").innerHTML = "N/A"
}

