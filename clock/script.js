let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  var date = new Date();
  let hourRotation = date.getHours() * 30 + (1 / 2) * date.getMinutes();
  let minRotation = date.getMinutes() * 6;
  let secRotation = date.getSeconds() * 6;
  hour.style.transform = `rotate(${hourRotation}deg)`;
  min.style.transform = `rotate(${minRotation}deg)`;
  sec.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(displayTime, 1000);
displayTime();
