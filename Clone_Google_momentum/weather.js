const weather = document.querySelector(".js-weather")

const API_KEY = "b2aec2def45f8b67580ba6bd585f5445";
const COORDS = 'coords';

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
  // 왜 function()을 계속 만들어서 해주는 것인지?
  // 동작들을 나눠서 지정해주기 위해서 함수로 나눠준 것인가?
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`;
  });
}


function saveCoords(coords){
  localStorage.setItem(COORDS, JSON.stringify(coords))
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // latitude: latitude,
    latitude,
    // longitude: longitude
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude)
}

function handleGeoError(){
  console.log("can't find location")
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  } else{
    const parsedCoords = JSON.parse(loadedCoords)
    getWeather(parsedCoords.latitude, parsedCoords.longitude)
  }

}

function init(){
  loadCoords();
}
init();