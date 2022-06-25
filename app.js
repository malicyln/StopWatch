let min = 0,
  sec = 0,
  msec = 0;
let timer;

const playPauseButton = document.getElementsByClassName("fas")[0];
const stopButton = document.getElementsByClassName("fas")[1];
const timeKeeper = document.getElementById("timekeeper");

const run = () => {
  timeKeeper.innerHTML =
    (min < 10 ? "0" + min : min) +
    ":" +
    (sec < 10 ? "0" + sec : sec) +
    ":" +
    (msec < 10 ? "0" + msec : msec);
  msec++;
  if (msec === 100) {
    sec++;
    msec = 0;
  }
  if (sec === 60) {
    min++;
    sec = 0;
  }
};

const start = () => {
  timer = setInterval(run, 10);
  console.log(timer);
};

playPauseButton.addEventListener("click", (e) => {
  e.target.className === "fas fa-play" ? start() : clearInterval(timer);

  e.target.className =
    e.target.className === "fas fa-play" ? "fas fa-pause" : "fas fa-play";
});

stopButton.addEventListener("click", (e) => {
  if (playPauseButton.className === "fas fa-play") {
    timeKeeper.innerHTML = "00:00:00";
    clearInterval(timer);
  } else {
    clearInterval(timer);
    timeKeeper.innerHTML = "00:00:00";
    playPauseButton.className = "fas fa-play";
  }
  (min = 0), (sec = 0), (msec = 0);
});
