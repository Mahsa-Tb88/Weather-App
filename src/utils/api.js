import axios from "axios";
import toast from "react-hot-toast";

async function getCity(city) {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b417018ffd79187903328447561cb7c`
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.response.data.message);
    toast.error(err.response.data.message);
  }
}
export { getCity };
