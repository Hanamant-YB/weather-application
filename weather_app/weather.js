
    const apikey="f8e31749651c980a5aba20890a1fa8a0";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response=await fetch(apiurl + city + `&appid=${apikey}`);

        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }
        else{
            var data=await response.json();


        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

        if(data.weather[0].main=="clouds"){
            weatherIcon.src="weather-app-img/images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="weather-app-img/images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="weather-app-img/images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="weather-app-img/images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="weather-app-img/images/mist.png";
        }
        //it will only display information after enter the city name otherwise it will hide the information
        document.querySelector(".weather").style.display="block";
        }
    }
    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
    })

