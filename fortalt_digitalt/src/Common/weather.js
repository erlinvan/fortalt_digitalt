/**
 * Usage: getWeather().then(weather => { console.log(weather)});
 * @returns Promise
 */
export default async function getWeather() {
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

    return data["properties"]["timeseries"][0]["data"]["next_12_hours"]["summary"]["symbol_code"];
  }