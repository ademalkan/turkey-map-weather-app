import { CityFetch, WeatherServiceFetch } from "..";

export default class WeatherService {
  private BASE_URL: string = process.env.API_BASE_URL as string;
  private API_KEY: string = process.env.OPEN_WATHER_MAP_API_KEY as string;

  //   constructor(deps: { BASE_URL: string; API_KEY: string }) {
  //     deps.BASE_URL = this.BASE_URL;
  //     deps.API_KEY = this.API_KEY;
  //   }

  fetch: WeatherServiceFetch = {
    cityOpenWeather: async (city: string): Promise<CityFetch> => {
      const request = await fetch(
        `${this.BASE_URL}?q=${city}&lang=tr&appid=${this.API_KEY}`
      );
      return request.json();
    },
    city: async (city: string): Promise<CityFetch> => {
      const request = await fetch(`api/open-weather?city=${city}`);
      return request.json();
    },
  };
}
