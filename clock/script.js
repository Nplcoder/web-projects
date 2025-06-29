const hourEle = document.querySelector(".hour")
const minuteEle = document.querySelector(".minute")
const secondEle = document.querySelector(".second")

function updateClock() {
    const currentDate = new Date();
    // setTimeout(updateClock,1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    
    const hourDeg = (hour/12) * 360;
    hourEle.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = (minute/60) * 360;
    minuteEle.style.transform = `rotate(${minuteDeg}deg)`

    const secondDeg = (second/60) * 360;
    secondEle.style.transform = `rotate(${secondDeg}deg)`
}

// updateClock();

setInterval(updateClock,1000)