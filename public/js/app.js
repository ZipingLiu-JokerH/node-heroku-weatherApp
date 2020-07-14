console.log("Client side JS file loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const msg = document.querySelector("#msg");

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = search.value;
    msg.textContent = "";
    fetch(`/weather?location=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg.textContent = data.error;
            } else {
                const forecast = `${data.matchLocation} is currently ${data.weather_descriptions} with temperature ${data.temperature} and feels like ${data.feelslike}`;
                msg.textContent = forecast;
            }
        });
    });
});
