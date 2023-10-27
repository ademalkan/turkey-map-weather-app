// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  API_BASE_URL: string;
  API_KEY: string;
};

type ApiRequest = {
  city: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { city } = req.query as ApiRequest;
  const API_BASE_URL = process.env.API_BASE_URL as string;
  const API_KEY = process.env.OPEN_WATHER_MAP_API_KEY as string;
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  res.status(200).json({ API_BASE_URL, API_KEY });
}
