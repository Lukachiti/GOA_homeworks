let weatherData = [
{
city: "Tbilisi",
temperature: 22, // °C
humidity: 55, // %
windSpeed: 3.5, // m/s
weatherMain: "Clouds",
weatherDescription: "scattered clouds",
weatherIcon: "03d"
},
{
city: "Batumi",
temperature: 25,
humidity: 60,
windSpeed: 4.2,
weatherMain: "Clear",
weatherDescription: "clear sky",
weatherIcon: "01d"
},
{
city: "Kutaisi",
temperature: 20,
humidity: 50,
windSpeed: 2.8,
weatherMain: "Rain",
weatherDescription: "light rain",
weatherIcon: "10d"
},
{
city: "Rustavi",
temperature: 23,
humidity: 58,
windSpeed: 3.0,
weatherMain: "Clouds",
weatherDescription: "broken clouds",
weatherIcon: "04d"
},
{
city: "Gori",
temperature: 21,
humidity: 52,
windSpeed: 3.1,
weatherMain: "Fog",
weatherDescription: "foggy",
weatherIcon: "50d"
}
];
let inp = document.getElementById("inp")
let div = document.getElementById("div")
let h1 = document.getElementById("h1")
let inp2 = document.getElementById("inp2")
let p = document.getElementById("p")

function get_data(){
    for(let i=0;i<5;i++){
        
        if(weatherData[i].city == inp.value){
            
            div.innerHTML = `
            <div>
                <h4>Temperature: ${weatherData[i].temperature}</h4>
                <h4>Humidity: ${weatherData[i].humidity}</h4>
                <h4>WindSpeed: ${weatherData[i].windSpeed}</h4>
                <h4>Weather: ${weatherData[i].weatherMain}</h4>
                <h4>Description: ${weatherData[i].weatherDescription}</h4>
            </div>
            `
            return null
        }
        else {
            div.innerHTML = "   "
        }
    }
}
setTimeout(() => {
    h1.textContent = "Hello, Kocho!"
}, 2000);

function func(){
    document.getElementById("click").style.backgroundColor = "red"
}

inp2.addEventListener("input", () => {
    p.textContent = inp2.value
})
