async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '9b5767b284mshe697b335505e720p1cb3efjsnf911a38229c4',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        
        document.getElementById('location').innerText = `${data.location.name}, ${data.location.country}`;
        document.getElementById('temperature').innerText = `${data.current.temp_c}°C`;
        document.getElementById('condition').innerText = data.current.condition.text;
        document.getElementById('humidity').innerText = `${data.current.humidity}%`;
        document.getElementById('windSpeed').innerText = `${data.current.wind_kph} km/h`;
    } catch (error) {
        console.error(error);
        document.getElementById('location').innerText = "City not found!";
        document.getElementById('temperature').innerText = "--°C";
        document.getElementById('condition').innerText = "Condition";
        document.getElementById('humidity').innerText = "--%";
        document.getElementById('windSpeed').innerText = "-- km/h";
    }
}
