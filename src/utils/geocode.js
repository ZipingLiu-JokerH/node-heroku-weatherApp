const request = require("request");

// const mapURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/waterloo.json?access_token=${mapToken}`;
// request(mapURL, (error, response) => {
//     if (error) {
//         console.log("unable to connect to loaction service");
//     } else {
//         const data = JSON.parse(response.body);
//         if (data.message === "Not Found" || data.features.length === 0) {
//             console.log("unable to find location");
//         } else {
//             console.log(data.features[0].center);
//         }
//     }
// });

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.MAP_TOKEN}`;

  request(url, (error, response) => {
    if (error) {
      callback("unable to connect to loaction service", undefined);
    } else {
      console.log(process.env.MAP_TOKEN);
      const data = JSON.parse(response.body);
      if (data.message === "Not Found" || data.features.length === 0) {
        callback("unable to find location", undefined);
      } else {
        callback(undefined, {
          latitude: data.features[0].center[1],
          longitude: data.features[0].center[0],
          location: data.features[0].place_name,
        });
      }
    }
  });
};

module.exports = geoCode;
