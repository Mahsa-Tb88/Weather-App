import axios from "axios";

async function getCity(city) {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b417018ffd79187903328447561cb7c`
  );
  console.log(data);
  return data;
}
export { getCity };
