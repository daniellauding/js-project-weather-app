console.log('hello');

const myname: string = "daniel";

console.log(myname);

console.log('hej');

const weatherURL = `https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/geotype/point/lon/18.062639/lat/59.329468/data.json?timeseries=24`
// const placesURL = `https://wpt-a-tst.smhi.se/backend-startpage/geo/autocomplete/places/${city}?pmponly=true`

interface currentWeatherData {
  airTemp: number,
  condition: string
}

let currentWeather: currentWeatherData

const fetchWeather = async() => {
  try {
    const response = await fetch(weatherURL)

    // if(!response.ok) throw new Error(`HTTP error: ${response.status}`)

    const data = await response.json()

    console.log('data', data)

    // currentWeather = data.timeSeries[0].data //.air_temperature;

    currentWeather = {
      airTemp: data.timeSeries[9].data.air_temperature,
      condition: data.timeSeries[9].data.symbol_code,
    }

    console.log(currentWeather);

  } catch (error) {
    console.log(`caught an error`)
  }
 }

 fetchWeather();




// const fetchAPI = async() => {
//   try {
//     const response = await fetch('https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/geotype/point/lon/18.062639/lat/59.329468/data.json?timeseries=24');
//     const data = await response.json();
//     console.log('got data', data);
//   }
//   catch(error) {
//     console.log('dont work', data)
//   }
// }

// fetchAPI();