// Cache data
let weather_icon = "";
let weather = "";

/**
 * Usage: getWeatherIcon().then(weather => { console.log(weather)});
 * @returns Promise
 */
export async function getWeatherIcon() {
    if (weather_icon === "") {
        // Trondheim
        const lat = "63.4305";
        const lon = "10.3951";
        
        const proxy = "https://cors.mroctopus.workers.dev?";
        const url = `${proxy}https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=${lat}&lon=${lon}`;
        const ua = "FortaltDigitalt/1.0";

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': ua,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        weather_icon = data["properties"]["timeseries"][0]["data"]["next_6_hours"]["summary"]["symbol_code"]
    }

    return weather_icon;
}

export async function getWeatherType() {
    if (weather === "") {
        let tmp_weather_icon = await getWeatherIcon();

        if (tmp_weather_icon.includes("rain") || tmp_weather_icon.includes("snow")) {
            weather = "bad";
        }
        else {
            weather = "good";
        }
    }

    return weather;
}