const time = document.querySelector(".time");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".restart-btn");

let interId;
let startTime;
let elapsedTime = 0;
let isRunning = false;

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    interId = setInterval(function () {
      elapsedTime = Date.now() - startTime;

      const totalSeconds = Math.floor(elapsedTime / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      time.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }, 1000);

    isRunning = true;
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(interId);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interId);
  elapsedTime = 0;
  time.innerText = "00:00:00";
  isRunning = false;
});

function pad(number) {
  return number < 10 ? "0" + number : number;
}
