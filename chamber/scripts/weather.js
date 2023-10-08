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
