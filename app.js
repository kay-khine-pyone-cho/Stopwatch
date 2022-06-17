const getStartBtn = document.getElementsByClassName("startBtn")[0];
const getPauseBtn = document.getElementsByClassName("pauseBtn")[0];
const getContinueBtn = document.getElementsByClassName("continueBtn")[0];
const getRestartBtn = document.getElementsByClassName("restartBtn")[0];
const getMarktBtn = document.getElementsByClassName("markBtn")[0];
const getStopWatchText = document.getElementsByClassName("stopwatchText")[0];
const getMiliText = document.getElementsByClassName("mili")[0];

let miliseconds = 0,
  seconds = 0,
  minutes = 0,
  hours = 0;

const startTime = () => {
  miliseconds += 5;
  if (miliseconds === 1000) {
    miliseconds = 0;

    seconds += 1;
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }
    }
  }

  const secondsText = seconds < 10 ? "0" + seconds : seconds;
  const minutesText = minutes < 10 ? "0" + minutes : minutes;
  const hoursText = hours < 10 ? "0" + hours : hours;

  getStopWatchText.innerHTML =
    hoursText +
    ":" +
    minutesText +
    ":" +
    secondsText +
    "<sub>" +
    miliseconds +
    "</sub>";
};

let currentTime;
getStartBtn.addEventListener("click", () => {
  currentTime = setInterval(startTime, 5);
});
getPauseBtn.addEventListener("click", () => {
  clearInterval(currentTime);
});

getContinueBtn.addEventListener("click", () => {
  clearInterval(currentTime);
  currentTime = setInterval(startTime, 1);
});
getRestartBtn.addEventListener("click", () => {
  clearInterval(currentTime);
  seconds = 0;
  minutes = 0;
  hours = 0;
  currentTime = setInterval(startTime, 1);
});
