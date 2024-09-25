const hoursView = document.querySelector('#hours');
const minutesView = document.querySelector('#minutes');
const secondsView = document.querySelector('#seconds');
const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const resetBtn = document.querySelector('#reset-btn');

let hours = 9
let minutes = 59
let seconds = 55

let isStarted = false;
let timer

startBtn.addEventListener('click', () => {
    if (!isStarted) {
        timer = setInterval(() => handleTimer(), 1000)
        isStarted = true
    }
})

stopBtn.addEventListener('click', () => {
    clearInterval(timer)
    isStarted = false
})

resetBtn.addEventListener('click', () => {
    seconds = 0
    secondsView.innerHTML = '00'
    minutesView.innerHTML = '00'
    hoursView.innerHTML = '00'
})

const handleTimer = () => {
    seconds += 1
    if (seconds === 60) {
        minutes += 1
        seconds = 0
    }
    if (minutes === 60) {
        hours += 1
        minutes = 0
    }
    secondsView.innerHTML = (seconds < 10) ? `0${seconds}` : seconds
    minutesView.innerHTML = (minutes < 10) ? `0${minutes}` : minutes
    hoursView.innerHTML = (hours < 10) ? `0${hours}` : hours
}
