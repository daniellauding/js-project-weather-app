// * Set up some structure, set values 
let timeSeries = 72;

// Objekt med städer och koordinater
const cities = {
  stockholm: {
    name: "Stockholm",
    lat: 59.341952,
    lon: 18.053873
  }
}

const weekdays = [
 'Sunday',
 'Monday',
 'Tuesday',
 'Wednesday',
 'Thursday',
 'Friday',
 'Saturday'
]
const today = new Date(); //59.341952
// const weekdayNow = today.getDay(); //5

console.log(cities.stockholm.lat);

// * The API destination

const API_URL = `https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/geotype/point/lon/${cities.stockholm.lon}/lat/${cities.stockholm.lat}/data.json?timeseries=${timeSeries}`;

//Hämtar wrapper-elementet där vi lägger in UI-komponenterna.
const wrapper = document.getElementById('wrapper') as HTMLElement | null;

// * Component: Meta box

const metaBox = (result: any): HTMLElement => { 
  const div = document.createElement('div');
  div.id = "meta"
  
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

const conditionBox = (): HTMLElement => {
  const div = document.createElement('div');
  div.id = "weather-condition"

  div.innerHTML = `
    <div id="weather-condition-icon">
      <svg width="74" height="53" viewBox="0 0 74 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4924 52.1421C14.3391 52.1421 11.5175 51.6155 9.76739 50.3615C4.34647 46.4777 3.51249 41.3581 3.19898 39.4345C3.15941 39.194 3.13506 39.0083 3.09854 38.8835C2.81851 37.8852 1.37882 37.036 0.897906 36.8168C0.356119 36.5672 0 36.0224 0 35.4258V29.3383C0 28.6779 0.429169 28.0904 1.05922 27.8895C20.6975 21.5981 33.0856 26.7268 35.3623 27.8165H37.6908C39.9644 26.7298 52.3464 21.5981 71.9938 27.8895C72.6208 28.0904 73.05 28.6779 73.05 29.3383V35.4258C73.05 36.0285 72.6939 36.5733 72.146 36.8168C71.6712 37.0329 70.2315 37.8821 69.9514 38.8805C69.918 39.0053 69.8906 39.191 69.851 39.4314C69.5375 41.3581 68.7035 46.4746 63.2856 50.3585C59.6666 52.9578 51.4607 52.4343 45.224 50.5807C38.1899 48.4866 36.6224 40.6367 36.5524 40.2745C36.5433 40.2258 36.5341 40.1863 36.5219 40.1497C36.5189 40.1741 36.5128 40.2015 36.5067 40.2289C36.4367 40.6063 34.8753 48.4805 27.829 50.5776C24.6057 51.5395 20.8619 52.1421 17.4924 52.1421ZM39.5414 39.7084C39.5687 39.8423 40.8715 46.1124 46.0885 47.6648C52.9521 49.7071 59.4383 49.3693 61.5081 47.887C65.9002 44.7397 66.5364 40.8224 66.8438 38.9444C66.9077 38.5579 66.9625 38.2565 67.0173 38.0587C67.5104 36.3085 69.0109 35.1306 70.0062 34.5188V30.4584C50.508 24.5566 38.8869 30.6137 38.7682 30.6776C38.546 30.7963 38.2995 30.8602 38.0469 30.8602H35.0031C34.7535 30.8602 34.5039 30.7963 34.2848 30.6806C34.1691 30.6167 22.4477 24.587 3.04375 30.4584V34.5188C4.03906 35.1306 5.53962 36.3055 6.02967 38.0587C6.0875 38.2535 6.14229 38.5548 6.20316 38.9414C6.51058 40.8224 7.14672 44.7367 11.5389 47.8839C13.6056 49.3632 20.0918 49.7041 26.9585 47.6617C32.209 46.1003 33.4934 39.7662 33.5056 39.7054C33.7643 38.0861 34.9544 36.9538 36.455 36.9325C37.8916 36.9295 39.2278 38.0526 39.5414 39.7084Z" fill="currentColor"/>
        <path d="M71.5281 30.8602C70.9924 30.8602 70.4719 30.5772 70.195 30.0749L55.9319 4.22438C55.4815 3.42996 54.681 3.4604 54.4375 3.48779C54.2031 3.51518 53.4148 3.67955 53.1591 4.5805L51.6433 8.55868C51.345 9.34397 50.4623 9.73661 49.677 9.43528C48.8917 9.13395 48.4991 8.2543 48.8004 7.46902L50.2736 3.61563C50.7454 1.94461 52.2186 0.687544 54.0753 0.462306C55.9258 0.230982 57.6577 1.10758 58.5861 2.7299L72.8582 28.5987C73.263 29.3353 72.9952 30.2606 72.2617 30.6685C72.0303 30.7994 71.7777 30.8602 71.5281 30.8602Z" fill="currentColor"/>
        <path d="M1.52186 30.8602C1.27227 30.8602 1.01964 30.7994 0.788317 30.6715C0.0517296 30.2637 -0.21612 29.3384 0.191742 28.6018L14.4548 2.75121C15.3953 1.10758 17.1211 0.230983 18.9778 0.465352C20.8344 0.690589 22.3076 1.94461 22.822 3.74347L24.2526 7.46902C24.5539 8.25431 24.1613 9.13395 23.376 9.43528C22.5937 9.73357 21.708 9.34397 21.4067 8.55868L19.9335 4.7053C19.6322 3.67955 18.8469 3.51519 18.6095 3.4878C18.366 3.4604 17.5716 3.42692 17.1028 4.24569L2.85198 30.075C2.57804 30.5772 2.05756 30.8602 1.52186 30.8602Z" fill="currentColor"/>
        <path d="M10.8784 39.7297C10.1661 39.7297 9.52998 39.2275 9.38693 38.5031C9.24083 37.7574 9.16473 36.8777 9.16169 35.8885C9.15256 33.6361 10.8144 31.7033 13.0303 31.3959C13.8552 31.265 14.6313 31.8586 14.747 32.6926C14.8626 33.5265 14.2843 34.2936 13.4503 34.4092C12.7503 34.5066 12.2024 35.1519 12.2054 35.8763C12.2085 36.6646 12.2663 37.3708 12.3759 37.9156C12.5372 38.7405 12.0015 39.541 11.1767 39.7023C11.0762 39.7206 10.9758 39.7297 10.8784 39.7297Z" fill="currentColor"/>
        <path d="M44.3718 39.9733C43.6595 39.9733 43.0234 39.471 42.8803 38.7466C42.6794 37.7178 42.5973 36.6951 42.6521 35.7942C42.7738 33.7427 44.2652 32.0291 46.2832 31.6273C47.1081 31.4599 47.9086 32.0017 48.073 32.8265C48.2343 33.6514 47.6986 34.4519 46.8737 34.6163C46.2163 34.7441 45.7293 35.3042 45.6897 35.9738C45.6501 36.613 45.7141 37.3891 45.8663 38.1561C46.0276 38.981 45.4919 39.7815 44.667 39.9459C44.5696 39.9641 44.4692 39.9733 44.3718 39.9733Z" fill="currentColor"/>
      </svg>
    </div>
    <div id="weather-condition-text">
      <h1 class="weather-condition-text-heading">
        Get your sunnies on. Stockholm is looking rather great today!
      </h1>
    </div>
  `;
 
  return div;
};

// * Component: Weather week list

const weatherWeekBox = (result: any): HTMLElement => {
  const div = document.createElement('div');
  div.id = "weather-week";
  let listItems = '';
  
  for (let i = 0; i < weekdays.length; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() + i);
    const week = weekdays[day.getDay()];
    const dayTemp = result.timeSeries[i].data.air_temperature;

    // räkna ut avg väder
    // konvertera air_temp till -> dyngstemp

    listItems += `
      <li class="weather-week-list-item">
        <p class="weather-week-list-item-day">${week}</p> 
        <p class="weather-week-list-item-temp">${dayTemp}°C</p>
      </li>
    `;
  }

  div.innerHTML = `
    <ul class="weather-week-list">${listItems}</ul>
  `

  return div;
};

// * Render: The actual weather with API

const fetchWeatherAPI = async() => {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    if(!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    console.log(result);
    console.log("I stad:", cities.stockholm.name)
    console.log("En nivå in från response:", result.timeSeries[0].data); // Första väderpunkten i listan.
    console.log("Få ut temperatur:", result.timeSeries[0].data.air_temperature);
    console.log("Få ut symbol:", result.timeSeries[0].data.symbol_code);

    let code = result.timeSeries[0].data.symbol_code;
    code = 8
    
    document.body.classList.remove("theme-rainy");
  
    if(code === 1 || code  === 2 || code  === 3 || code === 4) {
      document.body.classList.add("theme-sunny");
      console.log('weather is sunny');
    } else if (code === 5 || code === 6 || code === 7) {
      document.body.classList.add("theme-cloudy");
      console.log('weather is cloudy');
    } else if (code === 8 || code === 9 || code === 10) {
      document.body.classList.add("theme-rainy");
      console.log('weather is rainy');
    }  

    wrapper?.appendChild(metaBox(result));
    wrapper?.appendChild(conditionBox());
    wrapper?.appendChild(weatherWeekBox(result));
//Fångar nätverks/parsefel m.m.    
  } catch(error) {
    console.log(`Error fetching: ${error}`);
  }
}

// * Launch the functionality

fetchWeatherAPI();