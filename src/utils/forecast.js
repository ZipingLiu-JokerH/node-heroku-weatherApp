const request = require("request");

// const weatherToken = "74a02bf619d4a05c431c7338f4f7039b";
// const url = `http://api.weatherstack.com/current?access_key=${weatherToken}&query=New%20York`;
// request(url, (error, response) => {
//     if (error) {
//         console.log("unable to connect to weather service!");
//     } else {
//         const data = JSON.parse(response.body);

//         if (data.error) {
//             console.log("unable to find location");
//         } else {
//             console.log(
//                 `${data.current.weather_descriptions[0]}. It is currently ${data.current.temperature} degrees out. It feels like ${data.current.feelslike} degrees out.`
//             );
//         }
//     }
// });

const forecast = (latitude, longitude, callback) => {
    const weatherToken = "74a02bf619d4a05c431c7338f4f7039b";
    const url = `http://api.weatherstack.com/current?access_key=${weatherToken}&query=${latitude},${longitude}`;
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
