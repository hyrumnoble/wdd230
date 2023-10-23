window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector: ".weatherWidget",
    apiKey: "BSQU8QFJDGDFN7TQNZBFQGF6D", // Replace with your API key
    location: "Swakopmund, Namibia",
    unitGroup: "metric",
    forecastDays: 5,
    title: "Swakopmund, Namibia",
    showTitle: true,
    showConditions: true
});

(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
      const windChill = calculateWindChillIndex(temperature, windSpeed);
      return `Wind Chill: ${windChill.toFixed(1)} °C`;
    } else {
      return "N/A";
    }
  }
  
  function calculateWindChillIndex(temperature, windSpeed) {
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChill;
  }

  const temperature = 10;   
  const windSpeed = 10;      
  
  const windChillValue = calculateWindChill(temperature, windSpeed);

  
  document.querySelector('.wind-chill').textContent = windChillValue;