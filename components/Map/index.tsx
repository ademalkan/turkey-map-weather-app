import { useRouter } from "next/navigation";
import React from "react";
import TurkeyMap from "turkey-map-react";

const Map = () => {
  const router = useRouter();
  const redirectCity = (name: string) => {
    const cityName = name.toLowerCase();
    router.push("?city=" + cityName);
  };



  return (
    <TurkeyMap
      onClick={({ name }) => redirectCity(name)}
      customStyle={{ idleColor: "#fff", hoverColor: "#282b66" }}
    />
  );
};

export default Map;
