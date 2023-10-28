import { CityFetch, FetchError, WeatherServiceFetch } from "..";

export default class WeatherService {
  private BASE_URL: string = process.env.API_BASE_URL as string;
  private API_KEY: string = process.env.OPEN_WATHER_MAP_API_KEY as string;

  //   constructor(deps: { BASE_URL: string; API_KEY: string }) {
  //     deps.BASE_URL = this.BASE_URL;
  //     deps.API_KEY = this.API_KEY;
  //   }

  /* The `genericCityFetch` method is a private method in the `WeatherService` class. It is an
asynchronous function that takes an `endpoint` parameter of type string. */
  private genericCityFetch = async (
    endpoint: string
  ): Promise<CityFetch | FetchError> => {
    try {
      const request = await fetch(endpoint);
      const data = await request.json();
      return data;
    } catch (error) {
      return { cod: "404", message: "Hava durumu verileri alınamadı" };
    }
  };

  fetch: WeatherServiceFetch = {
    /* The `cityOpenWeather` function is a method that fetches weather data for a specific city using the
OpenWeatherMap API. */
    cityOpenWeather: async (city: string): Promise<CityFetch | FetchError> => {
      const endpoint = `${this.BASE_URL}?q=${city}&lang=tr&appid=${this.API_KEY}`;
      const fetchRequest = await this.genericCityFetch(endpoint);
      return fetchRequest;
    },
    /* The `city` function is a method that fetches weather data for a specific city. It takes a `city`
  parameter of type string and returns a promise that resolves to either a `CityFetch` object or a
  `FetchError` object. */
    city: async (city: string): Promise<CityFetch | FetchError> => {
      const endpoint = `api/open-weather?city=${city}`;
      const fetchRequest = await this.genericCityFetch(endpoint);
      return fetchRequest;
    },
  };
}
