const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_TOKEN}&query=${latitude},${longitude}`;
  request(url, (error, response) => {
    if (error) {
      callback("unable to connect to weather service!", undefined);
    } else {
      const data = JSON.parse(response.body);

      if (data.error) {
        callback("unable to find location", undefined);
      } else {
        callback(undefined, {
          weather_descriptions: data.current.weather_descriptions[0],
          temperature: data.current.temperature,
          feelslike: data.current.feelslike,
        });
      }
    }
  });
};

module.exports = forecast;
