import { CityFetch, FetchError, WeatherServiceFetch } from "..";

export default class WeatherService {
  private BASE_URL: string = process.env.API_BASE_URL as string;
  private API_KEY: string = process.env.OPEN_WATHER_MAP_API_KEY as string;

  //   constructor(deps: { BASE_URL: string; API_KEY: string }) {
  //     deps.BASE_URL = this.BASE_URL;
  //     deps.API_KEY = this.API_KEY;
  //   }

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
    cityOpenWeather: async (city: string): Promise<CityFetch | FetchError> => {
      const endpoint = `${this.BASE_URL}?q=${city}&lang=tr&appid=${this.API_KEY}`;
      const fetchRequest = await this.genericCityFetch(endpoint);
      return fetchRequest;
    },
    city: async (city: string): Promise<CityFetch | FetchError> => {
      const endpoint = `api/open-weather?city=${city}`;
      const fetchRequest = await this.genericCityFetch(endpoint);
      return fetchRequest;
    },
  };
}
