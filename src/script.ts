interface City {
  name: string;
  lat: number;
  lon: number;
};

interface WeatherData {
  conditionNow: number;
  temperatureNow: number;
  sunriseToday: number;
  sunsetToday: number;
  dayTemp: number;
  timeSeries: any[];
  /*timeSeries: Array<{
    validTime: string;
    data: {
      air_temperature: number;
      symbol_code: number;
    }
  }>;*/

}

interface Theme {
  className: string;
  iconSvg: string;
  h1Text: string;
}

// * Set up some structure, set values 
let timeSeries: number = 72;

// Objekt med städer och koordinater
const cities: City[] = [
  {
    name: "Stockholm",
    lat: 59.341952,
    lon: 18.053873
  },
  {
    name: "Göteborg",
    lat: 57.702213,
    lon: 11.967860
  },
  {
    name: "Malmö",
    lat: 55.603875,
    lon: 13.007694
  },
  {
    name: "Uppsala",
    lat: 59.860460,
    lon: 17.654294
  },
  {
    name: "Linköping",
    lat: 58.414875,
    lon: 15.614858
  },
  {
    name: "Örebro",
    lat: 59.275162,
    lon: 15.216865
  },
  {
    name: "Västerås",
    lat: 59.604728,
    lon: 16.542310
  },
  {
    name: "Helsingborg",
    lat: 56.065472,
    lon: 12.796159
  },
  {
    name: "Jönköping",
    lat: 57.782668,
    lon: 14.164872
  },
  {
    name: "Norrköping", 
    lat: 58.586242,
    lon: 16.175980
  },
  {
    name: "Umeå",
    lat: 63.824125,
    lon: 20.268025
  },
  {
    name: "Gävle",
    lat: 60.672642,
    lon: 17.147048
  },
  {
    name: "Borås",
    lat: 57.720598,
    lon: 12.946360
  },
  {
    name: "Sundsvall",
    lat: 62.388709,
    lon: 17.306922
  },
  {
    name: "Karlskrona",
    lat: 56.161541,
    lon: 15.601851
  },
  {
    name: "Borlänge",
    lat: 60.483976,
    lon: 15.440760
  },
  {
    name: "Åmål",
    lat: 59.049932,
    lon: 12.701510
  },
  {
    name: "Visby",
    lat: 57.634809,
    lon: 18.294846
  },
  {
    name: "Halmstad",
    lat: 56.675527,
    lon: 12.878813
  },
  {
    name: "Hudiksvall",
    lat: 61.727594,
    lon: 17.107203
  },
  {
    name: "Sveg",
    lat: 62.035289,
    lon: 14.362230
  },
  {
    name: "Östersund",
    lat: 63.175590,
    lon: 14.654874
  },
  {
    name: "Kiruna",
    lat: 67.853888,
    lon: 20.227567
  },
  {
    name: "Luleå",
    lat: 65.586872,
    lon: 22.175487
  },
  {
    name: "Karlstad",
    lat: 59.376372,
    lon: 13.494644
  },
  {
    name: "Örnsköldsvik",
    lat: 63.288635,
    lon: 18.716672
  },
  {
    name: "Borgholm",
    lat: 56.879573,
    lon: 16.654971
  }
]

const weekdays: string[] = [
 'Sunday',
 'Monday',
 'Tuesday',
 'Wednesday',
 'Thursday',
 'Friday',
 'Saturday'
]

type ThemeKey = 'sunny' | 'cloudy' | 'rainy';

const THEMES: Record<ThemeKey, Theme> = { //Detta talar om för TypeScript att objektet har nycklar av typen ThemeKey och att varje värde ska följa Theme interface.

  sunny: {
    className: 'theme-sunny',
    iconSvg: '<svg width="74" height="53" viewBox="0 0 74 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4924 52.1421C14.3391 52.1421 11.5175 51.6155 9.76739 50.3615C4.34647 46.4777 3.51249 41.3581 3.19898 39.4345C3.15941 39.194 3.13506 39.0083 3.09854 38.8835C2.81851 37.8852 1.37882 37.036 0.897906 36.8168C0.356119 36.5672 0 36.0224 0 35.4258V29.3383C0 28.6779 0.429169 28.0904 1.05922 27.8895C20.6975 21.5981 33.0856 26.7268 35.3623 27.8165H37.6908C39.9644 26.7298 52.3464 21.5981 71.9938 27.8895C72.6208 28.0904 73.05 28.6779 73.05 29.3383V35.4258C73.05 36.0285 72.6939 36.5733 72.146 36.8168C71.6712 37.0329 70.2315 37.8821 69.9514 38.8805C69.918 39.0053 69.8906 39.191 69.851 39.4314C69.5375 41.3581 68.7035 46.4746 63.2856 50.3585C59.6666 52.9578 51.4607 52.4343 45.224 50.5807C38.1899 48.4866 36.6224 40.6367 36.5524 40.2745C36.5433 40.2258 36.5341 40.1863 36.5219 40.1497C36.5189 40.1741 36.5128 40.2015 36.5067 40.2289C36.4367 40.6063 34.8753 48.4805 27.829 50.5776C24.6057 51.5395 20.8619 52.1421 17.4924 52.1421ZM39.5414 39.7084C39.5687 39.8423 40.8715 46.1124 46.0885 47.6648C52.9521 49.7071 59.4383 49.3693 61.5081 47.887C65.9002 44.7397 66.5364 40.8224 66.8438 38.9444C66.9077 38.5579 66.9625 38.2565 67.0173 38.0587C67.5104 36.3085 69.0109 35.1306 70.0062 34.5188V30.4584C50.508 24.5566 38.8869 30.6137 38.7682 30.6776C38.546 30.7963 38.2995 30.8602 38.0469 30.8602H35.0031C34.7535 30.8602 34.5039 30.7963 34.2848 30.6806C34.1691 30.6167 22.4477 24.587 3.04375 30.4584V34.5188C4.03906 35.1306 5.53962 36.3055 6.02967 38.0587C6.0875 38.2535 6.14229 38.5548 6.20316 38.9414C6.51058 40.8224 7.14672 44.7367 11.5389 47.8839C13.6056 49.3632 20.0918 49.7041 26.9585 47.6617C32.209 46.1003 33.4934 39.7662 33.5056 39.7054C33.7643 38.0861 34.9544 36.9538 36.455 36.9325C37.8916 36.9295 39.2278 38.0526 39.5414 39.7084Z" fill="currentColor"/><path d="M71.5281 30.8602C70.9924 30.8602 70.4719 30.5772 70.195 30.0749L55.9319 4.22438C55.4815 3.42996 54.681 3.4604 54.4375 3.48779C54.2031 3.51518 53.4148 3.67955 53.1591 4.5805L51.6433 8.55868C51.345 9.34397 50.4623 9.73661 49.677 9.43528C48.8917 9.13395 48.4991 8.2543 48.8004 7.46902L50.2736 3.61563C50.7454 1.94461 52.2186 0.687544 54.0753 0.462306C55.9258 0.230982 57.6577 1.10758 58.5861 2.7299L72.8582 28.5987C73.263 29.3353 72.9952 30.2606 72.2617 30.6685C72.0303 30.7994 71.7777 30.8602 71.5281 30.8602Z" fill="currentColor"/><path d="M1.52186 30.8602C1.27227 30.8602 1.01964 30.7994 0.788317 30.6715C0.0517296 30.2637 -0.21612 29.3384 0.191742 28.6018L14.4548 2.75121C15.3953 1.10758 17.1211 0.230983 18.9778 0.465352C20.8344 0.690589 22.3076 1.94461 22.822 3.74347L24.2526 7.46902C24.5539 8.25431 24.1613 9.13395 23.376 9.43528C22.5937 9.73357 21.708 9.34397 21.4067 8.55868L19.9335 4.7053C19.6322 3.67955 18.8469 3.51519 18.6095 3.4878C18.366 3.4604 17.5716 3.42692 17.1028 4.24569L2.85198 30.075C2.57804 30.5772 2.05756 30.8602 1.52186 30.8602Z" fill="currentColor"/><path d="M10.8784 39.7297C10.1661 39.7297 9.52998 39.2275 9.38693 38.5031C9.24083 37.7574 9.16473 36.8777 9.16169 35.8885C9.15256 33.6361 10.8144 31.7033 13.0303 31.3959C13.8552 31.265 14.6313 31.8586 14.747 32.6926C14.8626 33.5265 14.2843 34.2936 13.4503 34.4092C12.7503 34.5066 12.2024 35.1519 12.2054 35.8763C12.2085 36.6646 12.2663 37.3708 12.3759 37.9156C12.5372 38.7405 12.0015 39.541 11.1767 39.7023C11.0762 39.7206 10.9758 39.7297 10.8784 39.7297Z" fill="currentColor"/><path d="M44.3718 39.9733C43.6595 39.9733 43.0234 39.471 42.8803 38.7466C42.6794 37.7178 42.5973 36.6951 42.6521 35.7942C42.7738 33.7427 44.2652 32.0291 46.2832 31.6273C47.1081 31.4599 47.9086 32.0017 48.073 32.8265C48.2343 33.6514 47.6986 34.4519 46.8737 34.6163C46.2163 34.7441 45.7293 35.3042 45.6897 35.9738C45.6501 36.613 45.7141 37.3891 45.8663 38.1561C46.0276 38.981 45.4919 39.7815 44.667 39.9459C44.5696 39.9641 44.4692 39.9733 44.3718 39.9733Z" fill="currentColor"/></svg>',
    h1Text: `Get your sunnies on. <span id="btn-search">${cities[0]?.name}</span> is looking rather great today!`
  },
  cloudy: {
    className: 'theme-cloudy',
    iconSvg: '<svg width="74" height="73" viewBox="0 0 74 73" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.7349 70.2109C38.2722 70.2069 35.4662 67.4009 35.4622 63.9382V35.5935C35.4622 34.9039 36.0212 34.3448 36.7108 34.3448C37.4004 34.3448 37.9595 34.9039 37.9595 35.5935V63.9382C37.8983 65.3254 38.6035 66.6343 39.7956 67.3462C40.9878 68.0581 42.4746 68.0581 43.6668 67.3462C44.8589 66.6343 45.5641 65.3254 45.5029 63.9382C45.5029 63.2486 46.0619 62.6896 46.7516 62.6896C47.4412 62.6896 48.0002 63.2486 48.0002 63.9382C47.9962 67.398 45.1946 70.2028 41.7349 70.2109Z" fill="currentColor"/><path d="M73.4509 40.6689H71.2474L70.9169 39.9344C69.9071 37.6546 67.6481 36.1844 65.1547 36.1844C62.6612 36.1844 60.4022 37.6546 59.3924 39.9344L59.0619 40.6689H57.0934L56.7629 39.9344C55.7531 37.6546 53.4941 36.1844 51.0007 36.1844C48.5072 36.1844 46.2482 37.6546 45.2384 39.9344L44.9079 40.6689H42.9394L42.6162 39.9344C41.6084 37.6501 39.3471 36.1761 36.8503 36.1761C34.3536 36.1761 32.0922 37.6501 31.0844 39.9344L30.7612 40.6689H28.7928L28.4622 39.9344C27.4525 37.6546 25.1935 36.1844 22.7 36.1844C20.2065 36.1844 17.9475 37.6546 16.9378 39.9344L16.6073 40.6689H14.6461L14.3156 39.9344C13.3058 37.6546 11.0468 36.1844 8.55336 36.1844C6.05989 36.1844 3.80088 37.6546 2.79113 39.9344L2.46061 40.6689H0V39.4203C0.0202496 20.525 15.3329 5.21238 34.2281 5.19214H39.2228C58.1181 5.21238 73.4307 20.525 73.4509 39.4203V40.6689ZM22.7037 33.6764C25.4935 33.6798 28.117 35.0038 29.777 37.2461C31.44 35.0093 34.0631 33.691 36.8503 33.691C39.6376 33.691 42.2606 35.0093 43.9237 37.2461C45.5867 35.0093 48.2097 33.691 50.997 33.691C53.7843 33.691 56.4073 35.0093 58.0703 37.2461C59.5072 35.3105 61.6743 34.0478 64.0668 33.7523C66.4593 33.4567 68.8684 34.1539 70.7333 35.6816C68.8235 19.722 55.2963 7.70202 39.2228 7.68213L34.2281 7.68212C18.0648 7.70439 4.49251 19.8544 2.6883 35.9167C4.53599 34.2705 6.99058 33.4769 9.45226 33.7298C11.9139 33.9826 14.1559 35.2587 15.6304 37.2461C17.2903 35.0038 19.9138 33.6798 22.7037 33.6764Z" fill="currentColor"/><path d="M37.012 2.44507C38.2533 2.44507 39.2596 3.45135 39.2596 4.69267V5.81647H34.7644V4.69267C34.7644 3.45135 35.7707 2.44507 37.012 2.44507Z" fill="currentColor"/><path d="M15.6083 40.0006C14.9187 40.0006 14.3596 39.4415 14.3596 38.7519C14.2086 28.6107 18.3014 18.8675 25.649 11.8762C28.9349 8.6774 32.7687 6.09498 36.9678 4.25201C37.6108 4.0005 38.3359 4.31784 38.5874 4.96081C38.8389 5.60377 38.5216 6.32889 37.8786 6.5804C33.9602 8.32792 30.3818 10.7549 27.309 13.7492C20.3753 20.4406 16.8937 28.8507 16.8937 38.7519C16.8938 39.0895 16.7572 39.4128 16.5151 39.6481C16.2729 39.8833 15.9458 40.0105 15.6083 40.0006Z" fill="currentColor"/><path d="M57.9087 40.0006C57.2191 40.0006 56.66 39.4416 56.66 38.752C56.66 15.6223 35.822 6.6539 35.609 6.56576C35.1693 6.4139 34.8505 6.03026 34.7817 5.57024C34.7129 5.11023 34.9055 4.65009 35.2815 4.37623C35.6574 4.10236 36.1544 4.06017 36.5712 4.26674C40.7639 6.19983 44.5888 8.8467 47.8753 12.0893C55.1565 19.0382 59.2421 28.6873 59.1647 38.752C59.1607 39.4428 58.5995 40.0006 57.9087 40.0006Z" fill="currentColor"/><path d="M29.6374 39.67C28.9728 39.6709 28.4239 39.1511 28.3887 38.4874C28.3447 37.5399 27.2576 15.1227 36.0864 5.3537C36.5543 4.86787 37.3234 4.84141 37.8235 5.29393C38.3237 5.74645 38.3741 6.51439 37.9373 7.02838C29.799 16.0335 30.8493 38.1348 30.8861 38.3552C30.9041 38.6865 30.7895 39.0113 30.5676 39.258C30.3457 39.5047 30.0348 39.6529 29.7035 39.67H29.6374Z" fill="currentColor"/><path d="M43.7841 39.67H43.7107C43.0235 39.6306 42.4979 39.0425 42.5355 38.3553C42.5355 38.1349 43.6078 16.0262 35.4842 7.02843C35.1683 6.70043 35.056 6.22647 35.1912 5.79162C35.3264 5.35677 35.6876 5.02998 36.1337 4.93886C36.5799 4.84774 37.0403 5.00673 37.3351 5.35375C46.1492 15.1227 45.0769 37.5399 45.0255 38.4875C44.9904 39.1483 44.4459 39.6671 43.7841 39.67Z" fill="currentColor"/></svg>',
    h1Text: `Don’t forget your umbrella. It’s wet in <span id="btn-search">${cities[0]?.name}</span> today.`,
  },
   rainy: {
    className: 'theme-rainy',
    iconSvg: '<svg width="78" height="54" viewBox="0 0 78 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.4621 52.2606C28.0663 52.2606 23.1056 49.2145 20.6687 44.5149C18.7541 45.4722 16.6654 45.9074 14.5766 45.9074C7.09208 45.9074 1 39.8153 1 32.3307C1 25.0202 6.831 19.0152 14.1415 18.7541C14.0545 18.0578 13.9674 17.2746 13.9674 16.5783C13.9674 7.96238 20.9298 1 29.5458 1C36.6822 1 42.9484 5.9607 44.6019 12.8361C46.4296 11.8787 48.5183 11.4436 50.694 11.4436C57.6564 11.4436 63.4004 16.5783 64.1836 23.5407C70.6238 23.5407 76.0197 28.9366 76.1937 35.4638C76.1937 42.0781 70.8849 47.3869 64.2707 47.3869C62.1819 47.3869 60.1803 46.8647 58.3526 45.8203C56.612 48.3442 53.8271 49.8237 50.781 49.8237C48.4312 49.8237 46.1685 48.9534 44.4279 47.2999C41.7299 50.4329 37.7266 52.2606 33.4621 52.2606ZM20.9298 43.4705C21.0169 43.4705 21.0169 43.4705 21.1039 43.4705C21.1909 43.4705 21.2779 43.5576 21.365 43.7316C23.5407 48.4312 28.3274 51.3903 33.5491 51.3903C37.7266 51.3903 41.6429 49.5626 44.1668 46.2555C44.2538 46.1685 44.3408 46.0814 44.5149 46.0814C44.689 46.0814 44.776 46.0814 44.863 46.2555C46.4296 47.9091 48.6053 48.8664 50.9551 48.8664C53.8271 48.8664 56.438 47.3869 58.0045 44.9501C58.0915 44.776 58.4397 44.689 58.6137 44.776C60.3543 45.9074 62.356 46.4296 64.4447 46.4296C70.5368 46.4296 75.4975 41.4689 75.4975 35.3768C75.3234 29.2847 70.2757 24.324 64.2707 24.324H63.8355C63.5744 24.324 63.4004 24.1499 63.4004 23.8888C62.7912 17.2746 57.3953 12.2268 50.781 12.2268C48.6053 12.2268 46.5166 12.749 44.6019 13.7934C44.5149 13.8804 44.3408 13.8804 44.1668 13.7934C44.0798 13.7064 43.9057 13.6193 43.9057 13.4453C42.5132 6.65694 36.5082 1.69624 29.5458 1.69624C21.452 1.69624 14.8377 8.31051 14.8377 16.4043C14.8377 17.2746 14.9248 18.1449 15.0988 18.9281C15.0988 19.0152 15.0988 19.1892 15.0118 19.2763C14.9248 19.3633 14.8377 19.4503 14.6637 19.4503C7.61427 19.4503 1.8703 25.1943 1.8703 32.1567C1.8703 39.2061 7.61427 44.863 14.5767 44.863C16.6654 44.863 18.7541 44.3408 20.6687 43.3835C20.7558 43.4705 20.8428 43.4705 20.9298 43.4705Z" fill="currentolor" stroke="currentColor" stroke-width="2"/></svg>',
    h1Text: `Light a fire and get cosy. <span id="btn-search">${cities[0]?.name}</span> is looking grey today.`,
  },
};
const symbolCodeText = [
 "Clear sky",
 "Nearly clear sky",
 "Variable cloudiness",
 "Halfclear sky",
 "Cloudy sky",
 "Overcast",
 "Fog",
 "Light rain showers",
 "Moderate rain showers",
 "Heavy rain showers",
 "Thunderstorm",
 "Light sleet showers",
 "Moderate sleet showers",
 "Heavy sleet showers",
 "Light snow showers",
 "Moderate snow showers",
 "Heavy snow showers",
 "Light rain",
 "Moderate rain",
 "Heavy rain",
 "Thunder",
 "Light sleet",
 "Moderate sleet",
 "Heavy sleet",
 "Light snowfall",
 "Moderate snowfall",
 "Heavy snowfall"
];

const today = new Date(); //59.341952
// const weekdayNow = today.getDay(); //5


if(cities[0]) {
  console.log(cities[0].lat);
}

// * The API destination

// const SUNRISE_SUNSET_API_URL = `https://api.sunrise-sunset.org/json?lat=${cities[0]?.lat}&lng=${cities[0]?.lon}`;
// const SMHI_API_URL:string = `https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/geotype/point/lon/${cities[0]?.lon}/lat/${cities[0]?.lat}/data.json?timeseries=${timeSeries}`;

//Hämtar wrapper-elementet där vi lägger in UI-komponenterna.
const wrapper = document.getElementById('wrapper') as HTMLElement | null;

// * Component: Meta box

const metaBox = async (result: any, city: City): Promise<HTMLElement> => { 
  const div = document.createElement('div');
  div.id = "meta"
  
  let symbolCodeFromAPI = result.timeSeries[0].data.symbol_code;
  let conditionNow = symbolCodeText[symbolCodeFromAPI -1] || "Unknown condition";
  let temperatureNow = result.timeSeries[0].data.air_temperature;
  let sunriseToday = "Not sure when :O";
  let sunsetToday = "Not sure when :/";

  try {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${city.lat}&lng=${city.lon}`
    );
    const sunResult = await response.json();

    const todayDate = new Date().toISOString().split("T")[0]; // t.ex. "2025-10-21"

    sunriseToday = new Date(`${todayDate} ${sunResult.results.sunrise} UTC`)
      .toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Stockholm" }); // Convert to AM/PM

    sunsetToday = new Date(`${todayDate} ${sunResult.results.sunset} UTC`)
      .toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Stockholm" }); // Convert to AM/PM

  } catch (error) {
    console.log(`Error fetching sunrise/sunset: ${error}`);
  }

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

const conditionBox = (h1Text: string, iconSvg:string): HTMLElement => {
  const div = document.createElement('div');
  div.id = "weather-condition"

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

const weatherWeekBox = (result: WeatherData): HTMLElement => {
  const div = document.createElement('div');
  div.id = "weather-week";
  let listItems:string = '';
  
  const day = new Date(today);

  console.log("få ut tiden:", day);
  // få ut tiden, vad visar vi
  // Tue Oct 28 2025 08:42:36 GMT+0100 (Central European Standard Time)

  const dailyData = result.timeSeries.filter(item => item.time.includes("T12:00:00Z"));
  // vad för tids-epoker finns det, här ser vi att vi kan få mitt på dagen
  // https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/times.json 
  // så då går vi igenom hela time objektet och plockar ut bara de som är för kl 12:00

  console.log("få ut temp mitt på dagen:", dailyData);
  
  for (let i = 0; i < weekdays.length; i++) {
    day.setDate(today.getDate() + i);

    const weekday:any = weekdays[day.getDay()];
    // const dayTemp = result.timeSeries[i].data.air_temperature;
    const dayTemp = dailyData[i].data.air_temperature;
    // då använder vi denna data-punkt istället för alla weekdays

    listItems += `
      <li class="weather-week-list-item">
        <p class="weather-week-list-item-day">${weekday}</p> 
        <p class="weather-week-list-item-temp">${dayTemp}°C</p>
      </li>
    `;
  }

  div.innerHTML = `
    <ul class="weather-week-list">${listItems}</ul>
  `

  return div;
};

// Search feature

const search = () => {
  const div = document.createElement('div');
  div.className = "search-wrapper";

  const searchButton = document.getElementById('btn-search');
  if (!searchButton) return;
  // console.log(searchButton);

  const originalHTML = searchButton.innerHTML;

  searchButton?.addEventListener("click", function (e) {
      e.stopPropagation();

    // ⏱ small delay lets the click finish before DOM changes
    setTimeout(() => {
      searchButton.innerHTML = `
        <div id="search-wrapper">
          <input type="search" id="input-search" placeholder="Sök stad..." />
          <ul id="search-results"></ul>
        </div>
      `;

      const input = document.getElementById("input-search") as HTMLInputElement;
      const resultsList = document.getElementById("search-results") as HTMLUListElement;
      input?.focus();

      input?.addEventListener("input", () => {

        const searchText = input.value.trim().toLowerCase();
        resultsList.innerHTML = "";

        if (searchText === "") return;

        const matches = cities.filter(city =>
          city.name.toLowerCase().includes(searchText)
        );

        matches.forEach(city => {
          const li = document.createElement("li");
          li.textContent = city.name;
          li.className = "search-result-item";
          li.addEventListener("click", async () => {
            console.log("✅ Vald stad:", city.name);

            const newSMHI = `https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/geotype/point/lon/${city.lon}/lat/${city.lat}/data.json?timeseries=${timeSeries}`;
            console.log("New API URL:", newSMHI);

            await fetchWeatherAPI(city);
            
            closeSearch();
          });
          resultsList.appendChild(li);
        });

      });

      const closeSearch = () => {
        searchButton.innerHTML = originalHTML
        document.removeEventListener("click", outsideHandler);
      };

      const outsideHandler = (event:any) => {
        const wrapper = document.getElementById("search-wrapper");
        if (wrapper && !wrapper.contains(event.target)) {
          closeSearch();
        }
      };

      document.addEventListener("click", outsideHandler);
      
    }, 50);
  
  });

}

// * Render: The actual weather with API

const fetchWeatherAPI = async(city: City = cities[0]!) => {
  
  const SMHI_API_URL = `https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/geotype/point/lon/${city.lon}/lat/${city.lat}/data.json?timeseries=${timeSeries}`;
  const SUNRISE_SUNSET_API_URL = `https://api.sunrise-sunset.org/json?lat=${city.lat}&lng=${city.lon}`;

  try {
    const response: Response = await fetch(SMHI_API_URL);
    const result = await response.json();

    if(!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    wrapper!.innerHTML = "";
    
    console.log(result);
    console.log(`Stad: ${city.name}`);
    console.log("I stad:", cities[0]?.name)
    console.log("En nivå in från response:", result.timeSeries[0].data); // Första väderpunkten i listan.
    console.log("Få ut temperatur:", result.timeSeries[0].data.air_temperature);
    console.log("Få ut symbol:", result.timeSeries[0].data.symbol_code);

    let themeKey: ThemeKey = 'sunny';
    let code = result.timeSeries[0].data.symbol_code;
    document.body.classList.remove("theme-rainy");
    
    if(code === 1 || code  === 2 || code  === 3 || code === 4) {
      document.body.classList.add("theme-sunny");
      themeKey = 'sunny';
    } else if (code === 5 || code === 6 || code === 7) {
      document.body.classList.add("theme-cloudy");
      themeKey = 'cloudy';
    } else if (code === 8 || code === 9 || code === 10) {
      document.body.classList.add("theme-rainy");
      themeKey = 'rainy';
    }  

    const theme = THEMES[themeKey]
    const meta = await metaBox(result, city);
    
    wrapper?.appendChild(meta);
    wrapper?.appendChild(conditionBox(theme.h1Text.replace(cities[0]!.name, city.name), theme.iconSvg));
    wrapper?.appendChild(weatherWeekBox(result));
    search();
//Fångar nätverks/parsefel m.m.    
  } catch(error) {
    console.log(`Error fetching: ${error}`);
  }
}

// * Launch the functionality

fetchWeatherAPI();