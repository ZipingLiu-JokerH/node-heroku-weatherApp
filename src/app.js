const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecase = require("./utils/forecast");

const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static derectory to serve
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "jokerH"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "about me",
        name: "jokerH"
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        message: "This is a help message.",
        title: "Help",
        name: "jokerH"
    });
});

app.get("/weather", (req, res) => {
    const searchLocation = req.query.location;
    if (!searchLocation) {
        return res.send({
            error: "You must provide a search term."
        });
    }

    geocode(
        searchLocation,
        (error, { latitude, longitude, location: matchLocation } = {}) => {
            if (error) {
                return res.send({ error });
            }

            forecase(latitude, longitude, (error, weatherData) => {
                if (error) {
                    return res.send({ error });
                }
                res.send({
                    weather_descriptions: weatherData.weather_descriptions,
                    temperature: weatherData.temperature,
                    feelslike: weatherData.feelslike,
                    location: searchLocation,
                    matchLocation: matchLocation
                });
            });
        }
    );
});

app.get("/help/*", (req, res) => {
    res.render("notFound", {
        message: "Help artical not found!",
        name: "jokerH",
        title: "404"
    });
});

app.get("*", (req, res) => {
    res.render("notFound", {
        message: "My 404 page!",
        name: "jokerH",
        title: "404"
    });
});

app.listen(port, () => {
    console.log(`Srever is up on port ${port}. Yeah!`);
});
