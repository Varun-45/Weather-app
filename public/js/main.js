var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");
var dayy = document.getElementById("day");
dayy.innerText = daylist[day];
//////
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
///
const p = new Date();
var v = p.getDate();
var today = document.getElementById('todaydata')
today.innerText = v + " " + month
console.log(v)
////////
const cityName = document.getElementById('cityName');
const subbtn = document.getElementById('subbtn');
const cityname = document.getElementById('cityname');
const temp = document.getElementById('temp');
const stat = document.getElementById('infowe');
const humid = document.getElementById('humid');
const infoo = document.getElementById('infoo');
const tempinfo = document.getElementsByClassName('tempinfo');
// const val = document.getElementsById('cityName').value;

const info = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;
    // tempinfo.style.display = "inline";
    if (cityval === "") {
        cityname.innerText = "Kindly enter the city name";
    }

    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=9a8f36c988912f74ac36469e91c1c4cf&units=metric`;
            const response2 = await fetch(url);
            const data2 = await response2.json();
            // console.log(response);
            console.log(data2);
            const arrData2 = [data2];
            const icon2 = arrData2[0].weather[0].icon;
            let urll2 = ` http://openweathermap.org/img/wn/${icon2}@2x.png`;
            temp.innerText = arrData2[0].main.temp + "°C";
            cityname.innerText = arrData2[0].name + "," + arrData2[0].sys.country;
            st = arrData2[0].weather[0].main;
            stat.innerHTML = `<img src= http://openweathermap.org/img/wn/${icon2}@2x.png>`
            infoo.innerText = arrData2[0].weather[0].description;
            humid.innerText = "Humidity:" + arrData2[0].main.humidity;

        }
        catch {
            cityname.innerText = "Kindly enter the correct city name";
            cityName.innerText = "";
            temp.innerText = "";
            stat.innerText = "";
            infoo.innerText = "";
            tempinfo.innerText = "";
            humid.innerText = "";

            // setTimeout(function () {
            //     window.location.reload();
            // }, 4000);
        }

    }
}
subbtn.addEventListener('click', info);
//////////////////
const locbt = document.getElementById('locbt');
var x = document.getElementById('demo')
function info2() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

const showPosition = async (position) => {
    const a = position.coords.latitude;
    const b = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=9a8f36c988912f74ac36469e91c1c4cf&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(response);
    console.log(data);
    const arrData = [data];
    const icon = arrData[0].weather[0].icon;
    let urll = ` http://openweathermap.org/img/wn/${icon}@2x.png`;
    temp.innerText = arrData[0].main.temp + "°C";
    cityname.innerText = arrData[0].name + "," + arrData[0].sys.country;
    st = arrData[0].weather[0].main;
    stat.innerHTML = `<img src= http://openweathermap.org/img/wn/${icon}@2x.png>`
    infoo.innerText = arrData[0].weather[0].description;
    humid.innerText = "Humidity:" + arrData[0].main.humidity;
}

locbt.addEventListener('click', info2);

////////////////
document.querySelector('.first-button').addEventListener('click', function () {

    document.querySelector('.animated-icon1').classList.toggle('open');
});




cityName.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();
        document.getElementById("subbtn").click();
    }
});
// const reloadtButton = document.querySelector("#reload");
// // Reload everything:
// function reload() {
//     reload = location.reload();
// }
// // Event listeners for reload
// reloadButton.addEventListener("click", reload, false);