const apiKey = 'b01bee2e1fa332efe96dba9c1ae83d37';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=San Miguel de Cozumel&appid=${apiKey}&units=metric`;
$.getJSON(apiUrl, function(data) {    
    const currentTemperature = data.main.temp;
    const currentHumidity = data.main.humidity;

    const tempMax = data.main.temp_max;
    $('#temp-max').text(tempMax);

    $('#weather-info').append(`<p><strong>Current Temperature:</strong> ${currentTemperature}°C</p>`);
    $('#weather-info').append(`<p><strong>Current Humidity:</strong> ${currentHumidity}%</p>`);

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=San Miguel de Cozumel=${apiKey}&units=metric`;
    $.getJSON(forecastUrl, function(forecastData) {
        const nextDayForecast = forecastData.list.find(item => item.dt_txt.includes('15:00'));
            
        const nextDayTemperature = nextDayForecast.main.temp;
        $('#weather-info').append(`<p><strong>Next Day's Forecast at 15:00:</strong> ${nextDayTemperature}°C</p>`);
            
        nextDayForecast.weather.forEach(weather => {
            $('#weather-info').append(`<p><strong>${weather.main}:</strong> ${weather.description} <img src="https://openweathermap.org/img/w/${weather.icon}.png" alt="${weather.description}"></p>`);
        });
    });
});
function closeMessage() {
     $('#message').hide();
}