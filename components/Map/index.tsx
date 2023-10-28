import { useCitiesStore } from "@/features";
import { useRouter } from "next/navigation";
import React from "react";
import TurkeyMap from "turkey-map-react";

const Map = () => {
  const router = useRouter();
  const { add } = useCitiesStore();
  const redirectCity = (name: string) => {
    const time = new Date().getTime();
    add({ name, time });
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
