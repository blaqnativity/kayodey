"use strict";

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("seconds");
const day = document.getElementById("day");

let monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const clock = setInterval(function time() {
  let today = new Date();
  let d = today.getDate();
  let m = today.getMonth();
  let y = today.getFullYear();
  let h = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  day.innerHTML = `${d} ${monthName[m]} ${y}`;
  hour.textContent = h.toString().padStart(2, "0");
  minute.innerText = min.toString().padStart(2, "0");
  second.innerText = sec.toString().padStart(2, "0");
}, 1000); // This ensures the clock updates every second
