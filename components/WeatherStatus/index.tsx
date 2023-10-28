import { CityFetch, Helper } from "@/lib";
import React from "react";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { GiThermometerHot, GiWindsock } from "react-icons/gi";
import { FaWind, FaMoon } from "react-icons/fa";
import { BsFillSunriseFill } from "react-icons/bs";

const WeatherStatus = ({ city }: { city: CityFetch }) => {
  const helper = new Helper();
  const iconClasses = helper.iconClasses;

  return (
    <Listbox variant="flat" aria-label="Weather Status List">
      <ListboxSection showDivider>
        <ListboxItem
          key="thermomoter"
          description="Sıcaklık (°C)"
          startContent={<GiThermometerHot className={iconClasses} />}
        >
          {helper.toCelsius(city.main?.temp)}
        </ListboxItem>
        <ListboxItem
          key="wind"
          description="Hissedilen Hava Sıcaklığı (°C)"
          startContent={<FaWind className={iconClasses} />}
        >
          {helper.toCelsius(city.main?.feels_like)}
        </ListboxItem>
        <ListboxItem
          key="windsock"
          description="Rüzgar Hızı (m/s)"
          startContent={<GiWindsock className={iconClasses} />}
        >
          {helper.windSpeedToMs(city.wind?.speed)}
        </ListboxItem>
        <ListboxItem
          key="sunrise"
          description="Güneşin Doğuş Zamanı (HH:mm)"
          startContent={<BsFillSunriseFill className={iconClasses} />}
        >
          {helper.calculateHourAndMinute(city.sys?.sunrise)}
        </ListboxItem>
        <ListboxItem
          key="moon"
          description="Ayın Doğuş Zamanı (HH:mm)"
          startContent={<FaMoon className={iconClasses} />}
        >
          {helper.calculateHourAndMinute(city.sys?.sunset)}
        </ListboxItem>
      </ListboxSection>
    </Listbox>
  );
};

export default WeatherStatus;
