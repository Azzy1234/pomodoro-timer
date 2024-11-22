let isWork = true; 
let timer;

// function to start the timer
export function startTimer(workMinutes, breakMinutes) {
  let timeLeft = isWork ? workMinutes * 60 : breakMinutes * 60; // converts the minutes to seconds

  const statusDisplay = document.getElementById("status"); // shows if its work or break time
  const timerDisplay = document.getElementById("timer"); // displays the countdown timer

  // update the status text on the page
  statusDisplay.textContent = isWork ? "Work Time!" : "Break Time!";
  
  clearInterval(timer);

   timer = setInterval(() => {
    // clculates the minutes and seconds left
    const minutes = Math.floor(timeLeft / 60); // 
    const seconds = timeLeft % 60; 

    // took me a while to do this but does the leading zeros so it edoesnt do 5:8 for example
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // decreases time by -1
    timeLeft--;

    // if the timer reaches 0 it will switch
    if (timeLeft < 0) {
      clearInterval(timer); 
      isWork = !isWork;
      startTimer(workMinutes, breakMinutes);
    }
  }, 1000);
}
document.getElementById("start-btn").addEventListener("click", () => {
  // gets the work and break mionutes 
  const workMinutes = parseInt(document.getElementById("work-time").value, 10) || 25; // defaults to 25 minutes
  const breakMinutes = parseInt(document.getElementById("break-time").value, 10) || 5; // default to 5 minutes

  isWork = true; 
  startTimer(workMinutes, breakMinutes); 
});
