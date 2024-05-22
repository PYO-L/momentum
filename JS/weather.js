const weat = document.querySelector('#weat');
const posi = document.querySelector('#posi');
const temp = document.querySelector('#temp');
function geoOnOk(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat, lon);
  const API_KEY = 'e59755681c2e7f13537a6461ef2e461c';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      const weather = data.weather[0].main;
      const tem = data.main.temp;
      console.log(data);
      posi.innerHTML = name;
      weat.innerHTML = weather;

      temp.innerHTML = `${tem}°`;
    });
}
function geoOnFail() {
  alert('fail import weather ');
}

navigator.geolocation.getCurrentPosition(geoOnOk, geoOnFail);
