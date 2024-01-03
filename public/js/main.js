const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_value = document.getElementById("temp_real_value");

const dataHide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `plz enter city before the search`;
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.weatherapi.com/v1/current.json?key=8ce6d48a16e54e4a810103838240301%20&q=${cityVal}&aqi=yes`;

      const response = await fetch(url);
      const data = await response.json(); // covert json to js object
      const arrData = [data];

      // give location name and country
      city_name.innerText = `${arrData[0].location.name},${arrData[0].location.country}`;

      temp_real_value.innerText = arrData[0].current.temp_c; // give current temp

      dataHide.classList.remove("data_hide"); // agar data mil jaye
    } catch {
      city_name.innerText = `plz enter country name properly`;
      dataHide.classList.add("data_hide"); // agar data nhi milti hai to hide rahe
    }
  }
};
submitBtn.addEventListener("click", getInfo);
