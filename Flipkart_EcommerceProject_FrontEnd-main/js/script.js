var coupon=document.getElementById('coupon')

function loadCoupon(){
coupon.style.visibility="visible"
document.getElementById('mainDarkMode0').classList.add('overlay')

}

function closeCoupon(){
coupon.style.visibility="hidden"
document.getElementById('mainDarkMode0').classList.remove('overlay')


}

function changeMode(){
    document.body.classList.toggle('mydark')    
    document.getElementById('darkmode').classList.toggle('mydark')
    document.getElementById('mainDarkMode0').classList.toggle('mydark')
    document.getElementById('mainDarkMode1').classList.toggle('mydark')
    document.getElementById('mainDarkMode2').classList.toggle('mydark')
    document.getElementById('mainDarkMode3').classList.toggle('mydark')
    document.getElementById('mainDarkMode4').classList.toggle('mydark')
    document.getElementById('mainDarkMode5').classList.toggle('mydark')
    document.getElementById('mainDarkMode6').classList.toggle('mydark')
    document.getElementById('mainDarkMode7').classList.toggle('mydark')
}

window.onload=loadCoupon();

let x = document.getElementById('out')
let y = document.getElementById('weatherOut')
let weatherIcon=document.getElementById('weatherIcon')
let allowedlocation=document.getElementById('allowedlocation')
window.onload = function geolocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
}
async function showPosition(data) {
    console.log(data)
    console.log(data.coords)
    console.log(data.coords.latitude)
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    console.log(lat, lon)

    // let url= `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=68efa0885519a6f01d76917c463ada68`
   
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=68efa0885519a6f01d76917c463ada68`

    let weatherData = await fetch(url)
    let res = await weatherData.json()
    console.log(res)

    // 
    console.log(res.weather[0].main)
    console.log(Math.floor(res.main.temp-273.15)+"°C")
    var temp=Math.floor(res.main.temp-273.15)+"°C"
    // x.innerHTML=res.weather[0].main
    y.innerHTML=temp;
    icon=res.weather[0].main;
    weatherIcon.src="./weatherimg/"+icon+".gif"
    allowedlocation.innerHTML=res.name;
}

function loginpage(){
    console.log("hi")
    window.location.href = "./login.html"
}