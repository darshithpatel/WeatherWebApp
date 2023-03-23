const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b31456c943msh075e4f9da2d4d6cp12a02fjsndb3634420abf',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp1.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity1.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed1.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

// Chicago

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chicago', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            cloud_pct2.innerHTML = response.cloud_pct
            temp2.innerHTML = response.temp
            feels_like2.innerHTML = response.feels_like
            humidity2.innerHTML = response.humidity
            min_temp2.innerHTML = response.min_temp
            max_temp2.innerHTML = response.max_temp
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees2.innerHTML = response.wind_degrees
            sunrise2.innerHTML = response.sunrise
            sunset2.innerHTML = response.sunset
        })
        .catch(err => console.error(err));

// Chicago End

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Houston', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            cloud_pct3.innerHTML = response.cloud_pct
            temp3.innerHTML = response.temp
            feels_like3.innerHTML = response.feels_like
            humidity3.innerHTML = response.humidity
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            wind_speed3.innerHTML = response.wind_speed
            wind_degrees3.innerHTML = response.wind_degrees
            sunrise3.innerHTML = response.sunrise
            sunset3.innerHTML = response.sunset
        })
        .catch(err => console.error(err));

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            cloud_pct4.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp
            feels_like4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            wind_degrees4.innerHTML = response.wind_degrees
            sunrise4.innerHTML = response.sunrise
            sunset4.innerHTML = response.sunset
        })
        .catch(err => console.error(err));

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Los Angeles', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            cloud_pct5.innerHTML = response.cloud_pct
            temp5.innerHTML = response.temp
            feels_like5.innerHTML = response.feels_like
            humidity5.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            wind_degrees5.innerHTML = response.wind_degrees
            sunrise5.innerHTML = response.sunrise
            sunset5.innerHTML = response.sunset
        })
        .catch(err => console.error(err));


submit.addEventListener("click", (c) => {
    c.preventDefault()
    getWeather(city.value)

    
})

// submitt.addEventListener("click", (cc) => {
//     cc.preventDefault()
//     getWeather(dl.value)

    
// })

getWeather("Rajkot")