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
    
    if (temperature <= 50 && windSpeed > 3.0) {
      const windChill = calculateWindChillIndex(temperature, windSpeed);
      return `Wind Chill: ${windChill.toFixed(1)} °F`;
    } else {
      return "N/A";
    }
  }
  
  function calculateWindChillIndex(temperature, windSpeed) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill;
  }
  
  
  const temperature = 32; 
  const windSpeed = 10;  
  const windChillValue = calculateWindChill(temperature, windSpeed);
  

  document.querySelector('.wind-chill').textContent = windChillValue;