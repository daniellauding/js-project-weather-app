;
// * Set up some structure, set values 
let timeSeries = 72;
// Objekt med städer och koordinater
const cities = [
    {
        name: "Stockholm",
        lat: 59.341952,
        lon: 18.053873
    }
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
const THEMES = {
    sunny: {
        className: 'theme-sunny',
        iconSvg: 'Svg code here',
        h1Text: `Get your sunnies on. ${cities[0]?.name} is looking rather great today!`
    },
    cloudy: {
        className: 'theme-cloudy',
        iconSvg: 'Svg code here',
        h1Text: `Don’t forget your umbrella. It’s wet in ${cities[0]?.name} today.`,
    },
    rainy: {
        className: 'theme-rainy',
        iconSvg: 'Svg code here',
        h1Text: `Light a fire and get cosy. ${cities[0]?.name} is looking grey today.`,
    },
};
const today = new Date(); //59.341952
// const weekdayNow = today.getDay(); //5
if (cities[0]) {
    console.log(cities[0].lat);
}
// * The API destination
const API_URL = `https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/geotype/point/lon/${cities[0]?.lon}/lat/${cities[0]?.lat}/data.json?timeseries=${timeSeries}`;
//Hämtar wrapper-elementet där vi lägger in UI-komponenterna.
const wrapper = document.getElementById('wrapper');
// * Component: Meta box
const metaBox = (result) => {
    const div = document.createElement('div');
    div.id = "meta";
    let conditionNow = result.timeSeries[0].data.symbol_code;
    let temperatureNow = result.timeSeries[0].data.air_temperature;
    let sunriseToday = "07:00";
    let sunsetToday = "20:00";
    //Bygger våran Meta information högst upp på sidan. I index.html
    div.innerHTML = `
    <ul class="meta-list">
      <li class="meta-list-item">${conditionNow} | ${temperatureNow}°C</li>
      <li class="meta-list-item">Sunrise ${sunriseToday}</li>
      <li class="meta-list-item">Sunset ${sunsetToday}</li>
    </ul>
  `;
    return div;
};
// * Component: Condition box
const conditionBox = (h1Text, iconSvg) => {
    const div = document.createElement('div');
    div.id = "weather-condition";
    div.innerHTML = `
    <div id="weather-condition-icon">
      ${iconSvg}
    </div>
    <div id="weather-condition-text">
      <h1 class="weather-condition-text-heading">
       ${h1Text}
      </h1>
    </div>
  `;
    return div;
};
// * Component: Weather week list
const weatherWeekBox = (result) => {
    const div = document.createElement('div');
    div.id = "weather-week";
    let listItems = '';
    for (let i = 0; i < weekdays.length; i++) {
        const day = new Date(today);
        day.setDate(today.getDate() + i);
        const weekday = weekdays[day.getDay()];
        console.log(typeof weekday);
        const dayTemp = result.timeSeries[i].data.air_temperature;
        // räkna ut avg väder
        // konvertera air_temp till -> dyngstemp
        listItems += `
      <li class="weather-week-list-item">
        <p class="weather-week-list-item-day">${weekday}</p> 
        <p class="weather-week-list-item-temp">${dayTemp}°C</p>
      </li>
    `;
    }
    div.innerHTML = `
    <ul class="weather-week-list">${listItems}</ul>
  `;
    return div;
};
// * Render: The actual weather with API
const fetchWeatherAPI = async () => {
    try {
        const response = await fetch(API_URL);
        const result = await response.json();
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        console.log(result);
        console.log("I stad:", cities[0]?.name);
        console.log("En nivå in från response:", result.timeSeries[0].data); // Första väderpunkten i listan.
        console.log("Få ut temperatur:", result.timeSeries[0].data.air_temperature);
        console.log("Få ut symbol:", result.timeSeries[0].data.symbol_code);
        let themeKey = 'sunny';
        let code = result.timeSeries[0].data.symbol_code;
        code = 1;
        document.body.classList.remove("theme-rainy");
        if (code === 1 || code === 2 || code === 3 || code === 4) {
            document.body.classList.add("theme-sunny");
            themeKey = 'sunny';
        }
        else if (code === 5 || code === 6 || code === 7) {
            document.body.classList.add("theme-cloudy");
            themeKey = 'cloudy';
        }
        else if (code === 8 || code === 9 || code === 10) {
            document.body.classList.add("theme-rainy");
            themeKey = 'rainy';
        }
        const theme = THEMES[themeKey];
        wrapper?.appendChild(metaBox(result));
        wrapper?.appendChild(conditionBox(theme.h1Text, theme.iconSvg));
        wrapper?.appendChild(weatherWeekBox(result));
        //Fångar nätverks/parsefel m.m.    
    }
    catch (error) {
        console.log(`Error fetching: ${error}`);
    }
};
// * Launch the functionality
fetchWeatherAPI();
export {};
//# sourceMappingURL=script.js.map