"use strict";

// Query Selectors
const deacreaseBtn = document.querySelector(".decrease-btn");
const increaseBtn = document.querySelector(".increase-btn");
const resetBtn = document.querySelector(".reset-btn");
const inpRange = document.querySelector(".inp-range");
const displayInpNum = document.querySelector(".range-num");
let numb = document.querySelector(".numb");

// Display the range value
displayInpNum.innerHTML = +inpRange.value;

// Increase Function
const increaseNumber = () => {
  const inpValue = +inpRange.value;
  const num = +numb.innerHTML;

  if (inpValue > 0) {
    const addNumb = inpValue + num;
    numb.innerHTML = addNumb;
  } else {
    let addNumb = +numb.innerHTML;
    addNumb++;
    numb.innerHTML = addNumb;
  }
};

// Decrease Function
const deacreaseNumber = () => {
  const inpValue = +inpRange.value;
  const num = +numb.innerHTML;

  if (inpValue > 0) {
    const descreaseNum = num - inpValue;
    numb.innerHTML = descreaseNum;
  } else {
    let addNumb = +numb.innerHTML;
    addNumb--;
    numb.innerHTML = addNumb;
  }
};

// Reset Function
const resetCounter = () => {
  numb.innerHTML = 0;
  inpRange.value = 0;
  displayInpNum.innerHTML = 0;
};

// Input Range Function
const changeInputValue = () => {
  displayInpNum.innerHTML = +inpRange.value;
};

// Event Listeners
increaseBtn.addEventListener("click", increaseNumber);
deacreaseBtn.addEventListener("click", deacreaseNumber);
resetBtn.addEventListener("click", resetCounter);
inpRange.addEventListener("input", changeInputValue);
