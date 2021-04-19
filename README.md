<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a simple website built with node.js. Provide current weather information to the user.

### Built With

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Handlebars](https://handlebarsjs.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This project requires node.js and npm to be installed on your machine. Check their website to learn how to install.  
[node.js official website](https://nodejs.org/en/)  
[npm official website](https://www.npmjs.com/get-npm)

### Installation

1. Get a free API Key at [https://weatherstack.com/](https://weatherstack.com/) and [https://www.mapbox.com/](https://www.mapbox.com/)
1. Clone the repo
   ```sh
   git clone https://github.com/ZipingLiu-JokerH/node-heroku-weatherApp.git
   ```
1. Install NPM packages
   ```sh
   npm install
   ```
1. Create an `.env` file in the root directory and type in the two api key in the floowing format
   ```JS
   WEATHER_TOKEN="Weather stack API key"
   MAP_TOKEN="map box API key"
   ```
1. Start running on your own machine
   ```sh
   npm run start
   ```

<!-- USAGE EXAMPLES -->

## Usage

Type in any location in the search box to get current weather.

<!-- LICENSE -->

## License

Distributed under the MIT License.

<!-- CONTACT -->

## Contact

Ziping Liu - zipingliu_herrick@outlook.com

Project Link: [https://github.com/ZipingLiu-JokerH/node-heroku-weatherApp](https://github.com/ZipingLiu-JokerH/node-heroku-weatherApp)

Project Live: [https://jokerh-weather-webapp.herokuapp.com/](https://jokerh-weather-webapp.herokuapp.com/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Weather Stack](https://weatherstack.com/)
- [Map Box](https://www.mapbox.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Best README Template](https://github.com/othneildrew/Best-README-Template)
- [heroku](https://www.heroku.com/)
