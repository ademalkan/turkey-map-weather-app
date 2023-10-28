import { CityFetch, Helper } from "@/lib";
import React from "react";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { GiThermometerHot, GiWindsock } from "react-icons/gi";
import { FaWind, FaMoon } from "react-icons/fa";
import { BsFillSunriseFill } from "react-icons/bs";

const WeatherStatus = ({ city }: { city: CityFetch }) => {
  const helper = new Helper();
  const iconClasses = helper.iconClasses;

  const weatherItems = [
    {
      key: "thermomoter",
      description: "Sıcaklık (°C)",
      startContent: <GiThermometerHot className={iconClasses} />,
      value: helper.toCelsius(city.main?.temp),
    },
    {
      key: "wind",
      description: "Hissedilen Hava Sıcaklığı (°C)",
      startContent: <FaWind className={iconClasses} />,
      value: helper.toCelsius(city.main?.feels_like),
    },
    {
      key: "windsock",
      description: "Rüzgar Hızı (m/s)",
      startContent: <GiWindsock className={iconClasses} />,
      value: helper.windSpeedToMs(city.wind?.speed),
    },
    {
      key: "sunrise",
      description: "Güneşin Doğuş Zamanı (HH:mm)",
      startContent: <BsFillSunriseFill className={iconClasses} />,
      value: helper.calculateHourAndMinute(city.sys?.sunrise),
    },
    {
      key: "moon",
      description: "Ayın Doğuş Zamanı (HH:mm)",
      startContent: <FaMoon className={iconClasses} />,
      value: helper.calculateHourAndMinute(city.sys?.sunset),
    },
  ];

  return (
    <Listbox variant="flat" aria-label="Weather Status List">
      <ListboxSection showDivider>
        {weatherItems.map((item) => (
          <ListboxItem
            key={item.key}
            description={item.description}
            startContent={item.startContent}
          >
            {item.value}
          </ListboxItem>
        ))}
      </ListboxSection>
    </Listbox>
  );
};

export default WeatherStatus;
