const FAHRENHEIT_TO_CELSIUS_FACTOR = 5 / 9;
const CELSIUS_TO_FAHRENHEIT_FACTOR = 9 / 5;
const FAHRENHEIT_OFFSET = 32;

const convertToCelsius = (fahrenheitTemperature) => {
  let celsius = ((fahrenheitTemperature - FAHRENHEIT_OFFSET) * (FAHRENHEIT_TO_CELSIUS_FACTOR)).toFixed(1);
  return parseFloat(celsius);
};

const convertToFahrenheit = (celsiusTemperature) => {
  let fahrenheit = ((celsiusTemperature * (CELSIUS_TO_FAHRENHEIT_FACTOR)) + FAHRENHEIT_OFFSET).toFixed(1);
  return parseFloat(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
