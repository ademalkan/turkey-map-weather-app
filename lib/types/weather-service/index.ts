// fetch method types

export type WeatherServiceFetch = {
  cityOpenWeather: (city: string) => Promise<CityFetch>;
  city: (city: string) => Promise<CityFetch>;
};

// Endpoint Response

export type CityFetch = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type Clouds = {
  all: number;
};

export type Coord = {
  lon: number;
  lat: number;
};

export type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};
