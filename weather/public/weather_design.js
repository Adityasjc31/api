let lat, long;
if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(async position => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = long;
        const api_url = `http://maps.openweathermap.org/maps/2.0/weather/${TA2}/${50}/${lat}/${long}`
        const response = await fetch(api_url);
        const json = await response.json();
        console.log(json);

    });
    /*const button = document.getElementById("btn1");
    button.addEventListener('click', async () => {
        const data = { lat, long }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('/api', options)
        const json = await response.json();
        console.log(json)
    });*/
} else {
    console.log('geolocation not available');
}