// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CityFetch, WeatherService } from "@/lib";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  city: string;
};

type ApiRequest = {
  city: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CityFetch>
) {
  const { city } = req.query as ApiRequest;
  const weatherService = new WeatherService();

  const cityWeatherData = await weatherService.fetch.cityOpenWeather(city);

  res.status(200).json(cityWeatherData);
}
