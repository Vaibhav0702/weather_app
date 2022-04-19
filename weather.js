let key = "5c4599f8826400804c089bce7cbbac07";

let container = document.getElementById("container");
let iframe = document.getElementById("gmap_canvas");

async function getWeatherData() {
  try {
    let city = document.getElementById("city").value;

    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`



  //    ` http://api.openweathermap.org/data/2.5/forecast/?q=${city}&cnt=7&appid=${key}`


    );

    let day = await fetch(  ` http://api.openweathermap.org/data/2.5/forecast/?q=${city}&cnt=7&appid=${key}`);

    let day_data = await day.json();

    let data = await res.json();

    console.log("Day_data:", day_data);
 
    
    console.log("data:", data);

    showWeather(data);
    showDayData(day_data);

  } catch (err) {
    console.log("err:", err);
  
  }
}

// for any city , i should  be able to get its weather

// --------------------------------------------Show Weather-----------------------------

function showWeather(D) {
  console.log("D:", D);

  container.innerHTML = null;

  let name = document.createElement("h3");
   name.style.margin="0px"
  name.style.color=" rgb(236,110,76)";

  name.innerText = `${D.name}`;

  // -------
  let weather = document.createElement("div");


  let text = document.createElement("h4");
  text.innerText = `${D.weather[0].main}`;

  let img = document.createElement("img");

   img.src = `http://openweathermap.org/img/wn/${D.weather[0].icon}@2x.png`;

  weather.append(img,text);

  // -------
  let temp = document.createElement("p");

  temp.innerText = `Temp-Min - ${D.main.temp_min}°C`;

  let temp1 = document.createElement("p");

  temp1.innerText = `Temp-Max - ${D.main.temp_max}°C`;
  // --------

  let clouds = document.createElement("p");

  clouds.innerText = `clouds - ${D.clouds.all}`;

  // -------

  let wind = document.createElement("p");

  wind.innerText = `Wind-Speed - ${D.wind.speed}`;

  // --------------------


  iframe.src=`https://maps.google.com/maps?q=${D.name}&t=k&z=13&ie=UTF8&iwloc=&output=embed`;

  container.append(name,weather,temp,temp1,clouds,wind);
}

// -------------- Show Day_data------------------------------------------

var arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"]


function showDayData(Day){

console.log("Day :",Day);

let box =document.getElementById("Day_data");
box.innerHTML = null;
var i = 0;
Day.list.map(function(el){
    
    let div = document.createElement("div");


    let name = document.createElement("h2");

    // name.innerText = `Name - ${el.name}`;
    name.innerText = arr[i];
    name.style.color ="rgb(236,110,76)";
    name.style.margin="0px";
  
    // -------
    let weather = document.createElement("div");
  
  
    let text = document.createElement("h3");
    text.innerText = `${el.weather[0].main}`;
  
    let img = document.createElement("img");
  
     img.src = `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;
  
    weather.append(img,text);
  
    // -------
    let temp = document.createElement("p");
  
    temp.innerText = `Temp-Min - ${el.main.temp_min}°C`;
  
    // let temp1 = document.createElement("p");
  
    // temp1.innerText = `Temp-Max - ${el.main.temp_max}°C`;
    // --------
  
    // let clouds = document.createElement("p");
  
    // clouds.innerText = `clouds - ${el.clouds.all}`;
  
    // -------
  
    let wind = document.createElement("p");
  
    wind.innerText = `Wind-Speed - ${el.wind.speed}`;
    
    i++;

    div.append(name,weather,temp,wind);
    box.append(div);

})


}