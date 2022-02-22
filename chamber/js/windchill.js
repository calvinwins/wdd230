const temp = parseInt(document.getElementsByClassName('#temp').textContent);
const speed = parseInt(document.getElementsByClassName('#windSpeed').textContent);

if(temp <= 50 && speed > 3) {
    const windChill= Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16)));
    document.getElementById("windChill").innerHTML= windChill;   
}
else {
    document.getElementById("windChill").innerHTML = "N/A"
}

