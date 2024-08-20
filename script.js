document.getElementById("btn-search").addEventListener("click", () => {
  console.log("btn got clicked");

  //   console.log("the city name is ", cityValue);
  loadData();
});
async function loadData() {
  var cityName = document.getElementById("input-city-name");
  const city = cityName.value;

  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=1a91dd88fdeb0d727469c028ddbfd0c5"
  );
  const data = await response.json();
  console.log(data);
  console.log(data.cod);
  if (data.cod === 200) {
    document.getElementById("display-city-name").innerText = data.name;

    //const weatherDescription = data.weather[0].description;
    //console.log(weatherDescription + "weather description");
    document.getElementById("display-description").innerText =
      data.weather[0].description;
    const temperature = data.main.temp;
    const celsius = (temperature - 273.15).toFixed(2) + "°C";
    document.getElementById("display-celsius").innerText = celsius;
  } else {
    document.getElementById("display-city-name").innerText = "City not Found";
    document.getElementById("display-description").innerText = "";
    document.getElementById("display-celsius").innerText = "";
  }
  // console.log(data);

  // const stateName = data.name;

  // console.log(celsius);
  // console.log("city name", stateName);
}

//loadData();
