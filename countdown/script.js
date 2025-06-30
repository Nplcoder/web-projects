const dayEle = document.querySelector("#day")
const hourEle = document.querySelector("#hour")
const minuteEle = document.querySelector("#minute")
const secondEle = document.querySelector("#second")

const newYearTime = new Date("Aug 15, 2025 00:00:00").getTime()

updateCountdown()

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;
    
    const second = 1000;
    const minute = second*60;
    const hour = minute * 60;
    const day = hour*24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap % day)/ hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute)/second);

    dayEle.innerText = d;
    hourEle.innerText = h;
    minuteEle.innerText = m;
    secondEle.innerText = s;

    setTimeout(updateCountdown, 1000)
}