"use strict";

// Query Selectors
const clock = document.querySelector(".clock");
const todaysDate = document.querySelector(".todays-date");

// Date Convertor Function
const convertDate = () => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  const date = new Intl.DateTimeFormat("en-GB", options).format(new Date());

  todaysDate.innerHTML = date;
};

// Display clock
const updateClock = () => {
  const now = new Date();

  let hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const amPm = hours >= 12 ? "PM" : "AM";

  hours = (hours % 12 || 12).toString().padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
};

setInterval(updateClock, 1000);
updateClock();
convertDate();
