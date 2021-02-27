const API_KEY = "b2aec2def45f8b67580ba6bd585f5445";
const COORDS = 'coords';

function saveCoords(coords){
  localStorage.setItem(COORDS, JSON.stringify(coords))
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // latitude: latitude,
    latitude,
    // longitude: longitude
    longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError(){
  console.log("can't find location")
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
  const loadedCords = localStorage.getItem(COORDS);
  if(loadedCords === null){
    askForCoords();
  } else{
    // getweather
  }

}

function init(){
  loadCoords();
}
init();