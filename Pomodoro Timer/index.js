const startEL = document.getElementById("start")
const stopEL = document.getElementById("stop")
const resetEL = document.getElementById("reset")
const clockEl = document.getElementById("clock")

let tick;
let timeLeft = 1500;

function update(){
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft % 60;
    let format = `${(minutes.toString().padStart(2,"0"))} :  ${seconds.toString().padStart(2,"0")}`;

    clockEl.innerHTML = format;
}

function startClock(){
    tick = setInterval(() => {
        timeLeft--;
        update();
        if(timeLeft===0){
            clearInterval(tick);
        alert("Done for the session")
        timeLeft = 1500;
        }
    }, 1000);
}

function stopClock(){
    clearInterval(tick);
}

function resetClock(){
    clearInterval(tick);
    timeLeft = 1500;
    update();
}

startEL.addEventListener("click",startClock)
stopEL.addEventListener("click",stopClock)
resetEL.addEventListener("click",resetClock)