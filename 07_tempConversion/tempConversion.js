const convertToCelsius = function(tempValue) {
  let toCelsius = (tempValue - 32) * (5 / 9);

  if (toCelsius !== 0) {
    toCelsius = +toCelsius.toFixed(1);
  }

  return toCelsius
};

const convertToFahrenheit = function(tempValue) {
  let toFahrenheit = tempValue * (9 / 5) + 32;

  if (toFahrenheit !== 0) {
    toFahrenheit = +toFahrenheit.toFixed(1);
  }

  return toFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
