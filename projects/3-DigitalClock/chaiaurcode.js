// const cd = document.querySelector('.clock'); // Use querySelector to select the first element with class 'clock'

// setInterval(function () {
//   let date = new Date();
//   cd.innerHTML = date.toLocaleTimeString(); // Corrected typo from data to date
// }, 1000);

// const yearElement = document.querySelector('.year');
// const monthElement = document.querySelector('.month');
// const dayElement = document.querySelector('.day');
// const hourElement = document.querySelector('.hour');
// const minutesElement = document.querySelector('.minutes');
// const secondsElement = document.querySelector('.seconds');
// const millisecondsElement = document.querySelector('.milliseconds');

// setInterval(function () {
//   let date = new Date();
//   let hour = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let milliseconds = date.getMilliseconds();
//   let todayDate = date.getDate();
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();
//   yearElement.innerHTML = year;
//   monthElement.innerHTML = month;
//   dayElement.innerHTML = todayDate;
//   hourElement.innerHTML = hour;
//   minutesElement.innerHTML = minutes;
//   secondsElement.innerHTML = seconds;
//   milliseconds.innerHTML = milliseconds;
// }, 50);

const hourHand = document.querySelector('#clock_hour');
const minuteHand = document.querySelector('#clock_minute');
const secondHand = document.querySelector('#clock_seconds');

const yearDiv = document.querySelector('#year');
const monthDiv = document.querySelector('#month');
const dateDiv = document.querySelector('#date');

const hoursElement = document.querySelector('#hour');
const minutesElement = document.querySelector('#minute');
const secondsElement = document.querySelector('#second');

setInterval(() => {
  const now = new Date();
  const currentHours = now.getHours() % 12; // Rename to avoid conflict
  const currentMinutes = now.getMinutes(); // Rename to avoid conflict
  const currentSeconds = now.getSeconds(); // Rename to avoid conflict
  const milliseconds = now.getMilliseconds();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  const hourRotation = currentHours * 30 + 0.5 * currentMinutes; // 30 degrees per hour, 0.5 degrees per minute
  const minuteRotation = currentMinutes * 6 + 0.1 * currentSeconds; // 6 degrees per minute, 0.1 degrees per second
  const secondRotation = currentSeconds * 6; // 6 degrees per second
  // const millisecondRotation = milliseconds * 0.36; // 0.36 degrees per millisecond

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;

  yearDiv.textContent = `${year}`;
  monthDiv.textContent = `${month}`;
  dateDiv.textContent = `${date}`;
  hoursElement.textContent = `${currentHours}`; // Update element textContent
  minutesElement.textContent = `${currentMinutes}`; // Update element textContent
  secondsElement.textContent = `${currentSeconds}`; // Update element textContent
}, 10); // Update every 1 second
