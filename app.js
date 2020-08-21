// Init storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();

// Init weather class

const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI();

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // change loc
    weather.changeLocation(city, state);

    // set location in local storage
    storage.setLocationData(city, state);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
})

function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.paint();
        })
        .catch(err => console.log(err));
}