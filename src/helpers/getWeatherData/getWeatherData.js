import { API_KEY, API_URL } from "../../constants/api";
import Axios from "axios";

const getCurrentWeather = async queryString => {
  let currentWeather;
  try {
    const { data } = await Axios.get(
      `${API_URL}weather?q=${queryString}&units=metric&APPID=${API_KEY}`
    );
    console.log(data);
    currentWeather = data;
  } catch (err) {
    currentWeather = null;
  }

  return currentWeather;
};

const getThreeDayWeather = async locationId => {
  let threeDayWeather;
  try {
    const {
      data: { list }
    } = await Axios.get(
      `${API_URL}forecast?id=${locationId}&units=metric&appid=${API_KEY}`
    );

    const zeroPrefix = val => (val < 10 ? 0 + val : val);
    const day = zeroPrefix(new Date().getDate());
    const month = zeroPrefix(new Date().getMonth() + 1);
    const year = new Date().getFullYear();
    const fullDate = `${year}-${month}-${day}`;
    const regex = new RegExp(fullDate, "g");

    threeDayWeather = list
      .filter(
        weather =>
          !weather.dt_txt.match(regex) && weather.dt_txt.match(/12:00:00/)
      )
      .slice(0, 3);
  } catch (err) {
    threeDayWeather = null;
  }

  return threeDayWeather;
};

export { getCurrentWeather, getThreeDayWeather };
