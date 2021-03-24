/**
 * Usage: getWeather().then(weather => { console.log(weather)});
 * @returns Promise
 */
getNearbyRestaurants();

export default async function getNearbyRestaurants() {	
	// Trondheim
    const lat = "63.4305";
    const lon = "10.3951";

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `${proxy}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&type=restaurant&key=${key}`;
    const ua = "FortaltDigitalt/1.0";

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
	console.log(data);

    return data;
  }