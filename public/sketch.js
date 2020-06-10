function setup() {
    noCanvas();
    const video = createCapture(VIDEO);
    video.size(320, 240);
    let lat, long;
    if ('geolocation' in navigator) {
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(async position => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            document.getElementById('latitude').textContent = lat;
            document.getElementById('longitude').textContent = long;

            const button = document.getElementById("btn1");
            button.addEventListener('click', async () => {
                const name = document.getElementById("inbox").value
                video.loadPixels();
                const image64 = video.canvas.toDataURL();
                const data = { lat, long, name , image64 }
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
            });

        });
    } else {
        console.log('geolocation not available');
    }
}