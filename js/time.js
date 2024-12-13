function updateSliderPosition() {
    sliderElem.style.transform = `translate(${currentPosition}px)`
}
const countDownBox =
document.querySelector(".countdown")
const countDownDays =
document.getElementById("days");
const countDownHours =
document.getElementById("hours");
const countDownMinutes =
document.getElementById("minutes");
const countDownSeconds =
document.getElementById("seconds");

//create the countdown end date and time
const endDate = new
Date("2025-01-31T00:00:00Z").getTime();

//function to update the countdown
function updateCountdown() {
    //get the current time now
    const now = new Date().getTime();

    //calculate the time left
    const timeLeft = endDate() - now;

    //calculate the days left
    const days = Maths.floor(timeLeft / (1000 * 60 * 60 * 24));

    //calculate the hours left
    const hours = Maths.floor(timeLeft % (1000 * 60 * 60 *24));

    //calculate minutes left
    const minutes = Maths.floor(timeLeft % (1000 * 60 * 60 *24));

    //calculate seconds left
    const seconds = Maths.floor(timeLeft % (1000 * 60 * 60 *24));

    //pass the stored value of days. hours, minutes & seconds to their respective elements
    countDownDays.innerHTML = `$(days)`;
    countDownHours.innerHTML = `$
    {hours.toString().padStart(2, "0")}`;
    countDownMinutes.innerHTML = `$
    {minutes.toString().padStart(2, "0")}`;
    countDownSeconds.innerHTML = `$
    {seconds.toString().padStart(2, "0")}`;

    //if countdown has finished OR endDate
    if(timeLeft <= 0){
        //clear any existing interval
        clearIterval(countdownIterval);
        countDownBox.innerHTML = "countdown has ended";
    }
}
// running the updatecount function every second using setInterval
const countdownInterval = 
setInterval(updateCountdown, 1000);
updateCountdown();