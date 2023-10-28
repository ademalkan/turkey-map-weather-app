import { useRouter } from "next/navigation";
import React from "react";
import TurkeyMap from "turkey-map-react";

const Map = () => {
  const router = useRouter();
  const redirectCity = (name: string) => {
    router.push("?city=" + name);
  };

  return (
    <TurkeyMap
      showTooltip={true}
      onClick={({ name }) => redirectCity(name)}
      customStyle={{ idleColor: "#fff", hoverColor: "#3b82f6" }}
    />
  );
};

export default Map;
