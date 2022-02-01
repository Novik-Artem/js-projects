const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
const time = document.querySelector("#time");
const timerContent = document.querySelector("#content");
const timeTo = document.querySelector("#time-to");
const audio = document.querySelector("#audio");
let workTime;
let breakTime;
let timeToWork = 10;
let timeToBreak = 10;

function startWorkTime() {
  let minutes = Math.floor(timeToWork / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = Math.floor(timeToWork % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  time.innerHTML = `${minutes}:${seconds}`;
  timeToWork--;
  if (timeToWork < 0) {
    clearInterval(workTime);
    breakTime = setInterval(startBreakTime, 1000);
    audio.play();
  }
}
startWorkTime();

function startBreakTime() {
  let minutes = Math.floor(timeToBreak / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = Math.floor(timeToBreak % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  time.innerHTML = `${minutes}:${seconds}`;
  timeToBreak--;
  if (timeToBreak < 0) {
    clearInterval(breakTime);
  }
  timeTo.innerHTML = "time to break";
  timerContent.classList.add("break");
  startBtn.classList.add("break-button");
  pauseBtn.classList.add("break-button");
  resetBtn.classList.add("break-button");
}

startBtn.addEventListener("click", () => {
	audio.play();
	if (timeTo.innerHTML === "time to work") {
		workTime = setInterval(startWorkTime, 1000);
	}
	else if (timeTo.innerHTML === "time to break") {
		breakTime = setInterval(startBreakTime, 1000);
	}
  startBtn.disabled = true;
});

pauseBtn.addEventListener("click", () => {
  clearInterval(workTime);
  clearInterval(breakTime);
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
