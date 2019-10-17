import { API_KEY, API_URL } from "../../constants/api";
import axios from "axios";

const getCurrentWeather = async queryString => {
  let currentWeather;
  try {
    const { data } = await axios.get(
      `${API_URL}weather?q=${queryString}&units=metric&APPID=${API_KEY}`
    );

    currentWeather = data;
  } catch (err) {
    currentWeather = null;
  }

  return currentWeather;
};

export { getCurrentWeather };
