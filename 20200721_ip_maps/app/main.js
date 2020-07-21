const map = {
    link : '',
    lat : 45,
    lng : 0,
    ip : 0,
    weather : document.querySelector(".title-weather")
};

function initMap() {
  map.link = new google.maps.Map(document.querySelector("#map"), {
    center: { lat: map.lat, lng: map.lng },
    zoom: 12
  });
}

function getIP(){
    fetch('https://www.cloudflare.com/cdn-cgi/trace')
        .then(resp => resp.text())
        .then(d => formateIP(d));
}

function formateIP(str){
    const ipInfo = str.split(/\n/gm).reduce((acc, keyVal) => {
        const [ key, val ] = keyVal.split('=');
        acc[key] = val;
        return acc;
    }, {});
    map.ip = ipInfo.ip;
    getLocation(ipInfo.ip);
}

function getLocation(ip){
    fetch(`http://ip-api.com/json/${ip}`)
        .then(resp => resp.json())
        .then(data => {
            map.city = data.city;
            map.lat = data.lat;
            map.lng = data.lon;
            map.location = data;
            mapRecenter();
        });
    
}

function mapRecenter(){
    initMap();
    setMarker();
    getWeather();
}

function getWeather(){
    const apiKey = "9ca9045cad5b7186cc352589c8d68cc0";
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${map.lat}&lon=${map.lng}&appid=${apiKey}&units=metric`)
        .then((response) => response.json())
        .then((result) => {
            map.weather.innerHTML = `${result.name}, ${Math.round(result.main.temp)} &deg;C`;
    });
}

function setMarker(){
    map.marker = new google.maps.Marker({
        position: { lat: map.lat, lng: map.lng },
        map: map.link
      });
}
getIP();