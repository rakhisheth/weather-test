import { API_KEY, API_URL } from "../../constants/api";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import { getCurrentWeather } from ".";

const mock = new MockAdapter(axios);

const constantDate = new Date("2017-06-13T04:41:20");

Date = class extends Date {
  constructor() {
    return constantDate;
  }
};

describe("getWeatherData helper", () => {
  it("should return current weather data when called with a queryString", async () => {
    mock
      .onGet(`${API_URL}weather?q=london&units=metric&APPID=${API_KEY}`)
      .reply(200, "TheWeather");

    expect(await getCurrentWeather("london")).toEqual("TheWeather");
  });

  it("should return null if the weather call fails", async () => {
    mock
      .onGet(`${API_URL}weather?q=london&units=metric&APPID=${API_KEY}`)
      .reply(500);

    expect(await getCurrentWeather("london")).toEqual(null);
  });
});
