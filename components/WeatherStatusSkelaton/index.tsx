import React from "react";
import { Skeleton } from "@nextui-org/react";
import { CityFetch } from "@/lib";
import { WeatherStatus } from "..";

const WeatherStatusSkelaton = () => {
  return (
    <Skeleton className="rounded-lg">
      <WeatherStatus city={{} as CityFetch} />
    </Skeleton>
  );
};

export default WeatherStatusSkelaton;
