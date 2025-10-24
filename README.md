# ☀️ TypeScript Weather App

A dynamic, responsive weather application built with **TypeScript** and the **SMHI API**. Features dynamic theming, animated weather conditions, and location-based forecasts for Swedish cities.

**Built by:** Daniel, Mikaela, Björn

[Live Demo](https://js-project-weather-app.netlify.app/)

---

## ✨ Features

- 🌦️ **Real-time weather data** from SMHI (Swedish Meteorological and Hydrological Institute)
- 🎨 **Dynamic theming** based on weather conditions (sunny, rainy, cloudy, snowy, stormy)
- 🗓️ **7-day forecast** with daily temperature predictions
- 🌅 **Sunrise & sunset times** for selected location
- 🔍 **City search** with 27+ Swedish cities
- 📍 **Geolocation support** - find weather at your current location
- 🖥️ **Desktop carousel view** - browse multiple cities at once
- 💫 **CSS animations** - sun rays, rain, snow, and clouds based on conditions
- 📱 **Fully responsive** (320px → 1600px)

---

## 🛠️ Tech Stack

- **TypeScript** - Strongly-typed JavaScript
- **SMHI API** - Weather forecast data
- **Sunrise-Sunset API** - Solar time calculations
- **Vanilla CSS** - Custom animations and theming
- **Netlify** - Deployment

---

### Usage

1. The app loads with Stockholm weather by default
2. Click the city name to search for other Swedish cities
3. Use the location button (bottom right) to get weather at your current position
4. On desktop, click the menu (☰) to view all cities in a scrollable carousel

---

## 🎨 Themes

The app dynamically switches between five themes based on weather conditions:

- **Sunny** - Clear skies with animated sun rays
- **Cloudy** - Overcast with drifting clouds
- **Rainy** - Animated rainfall
- **Snowy** - Falling snowflakes
- **Stormy** - Dark theme with storm indicators

---

## 📦 Project Structure

```
├── src/
│   └── script.ts          # Main TypeScript application
├── assets/
│   └── img/               # Icons and images
├── dist/                  # Compiled JavaScript
├── style.css              # Styling and animations
├── index.html             # HTML entry point
└── tsconfig.json          # TypeScript configuration
```

---

## 🌐 API Reference

**SMHI Weather API:**  
`https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/geotype/point/lon/{lon}/lat/{lat}/data.json`

**Sunrise-Sunset API:**  
`https://api.sunrise-sunset.org/json?lat={lat}&lng={lon}`

---

## 📝 License

This project was created as part of the Technigo Bootcamp curriculum.

---

## 🙏 Acknowledgments

- SMHI for providing the weather API
- Technigo for project guidance and design resources