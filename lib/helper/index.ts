import { useRouter } from "next/router";

export default class Helper {
  /* The line `public iconClasses = "text-4xl text-default-500 pointer-events-none flex-shrink-0";` is
  declaring a public property `iconClasses` in the `Helper` class. The property is assigned a string
  value `"text-4xl text-default-500 pointer-events-none flex-shrink-0"`. This property can be
  accessed and used by other parts of the code that have an instance of the `Helper` class. */
  public iconClasses =
    "text-4xl text-default-500 pointer-events-none flex-shrink-0";

  /* The `capitalizeFirstLetter` method is a function that takes a string as input and returns a new
string with the first letter capitalized. It does this by using the `charAt` method to get the first
character of the input string, then using the `toUpperCase` method to convert it to uppercase. The
`slice` method is then used to get the rest of the input string starting from the second character.
Finally, the capitalized first letter and the rest of the string are concatenated together and
returned. */
  capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  /* The `celsiusPrefix` method is a function that takes a parameter `celsius` which can be either a
string or a number. */
  celsiusPrefix = (celsius: string | number): string => {
    if (typeof celsius === "string") celsius = Number(celsius);
    return `${celsius.toFixed(2)}°C`;
  };

  /* The `toCelsius` method is a function that takes a parameter `kelvin` which represents a temperature
in Kelvin. It subtracts 273 from the `kelvin` value to convert it to Celsius and then calls the
`celsiusPrefix` method to format the result as a string with the Celsius symbol (°C). The converted
temperature in Celsius is then returned. */

  toCelsius = (kelvin: number) => {
    return this.celsiusPrefix(kelvin - 273);
  };

  /**
   * The function calculates the wind chill factor based on the temperature in Celsius and wind speed in
   * kilometers per hour.
   * @param {number} temperatureCelsius - The temperature in Celsius.
   * @param {number} windSpeedKph - The windSpeedKph parameter represents the wind speed in kilometers
   * per hour.
   * @returns The function `calculateWindChill` returns a string value.
   */

  calculateWindChill(temperatureCelsius: number, windSpeedKph: number): string {
    if (temperatureCelsius >= 10 && windSpeedKph >= 4.8) {
      const windChill =
        13.12 +
        0.6215 * temperatureCelsius -
        11.37 * Math.pow(windSpeedKph, 0.16) +
        0.3965 * temperatureCelsius * Math.pow(windSpeedKph, 0.16);
      return this.celsiusPrefix(windChill);
    } else {
      return this.celsiusPrefix(temperatureCelsius);
    }
  }
  /* The `windSpeedToMs` method is a function that takes a parameter `windSpeedKph` which represents the
wind speed in kilometers per hour. */

  windSpeedToMs = (windSpeedKph: number): string => {
    return (windSpeedKph * 0.27778).toFixed(3);
  };

  /* The `calculateHourAndMinute` method is a function that takes a `timestamp` parameter, which
 represents a Unix timestamp (the number of seconds since January 1, 1970). */
  calculateHourAndMinute = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "shortGeneric",
    };
    const formattedTime = date.toLocaleString("tr-TR", options);
    return formattedTime;
  };
}
