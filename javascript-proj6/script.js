"use strict";

// Query Selectors
const tipForm = document.querySelector(".tip-form");
const billAmount = document.querySelector(".bill-amount");
const tipContainer = document.querySelector(".tip-container");
const tipPercentage = document.querySelector(".tip-percentage");
const numOfPeople = document.querySelector(".number-of-people");
const tipAmount = document.querySelector(".tip-amount");
const totalBill = document.querySelector(".total-bill");
const eachPays = document.querySelector(".each-pays");

// Convert Currency
const convertCurrency = (curr) => {
  const options = {
    style: "currency",
    currency: "GBP",
  };
  return new Intl.NumberFormat("en-GB", options).format(curr);
};

// Calculate Tip and Amount
const calculateTip = (e) => {
  e.preventDefault();
  const amount = +billAmount.value.trim();
  const totalPeople = +numOfPeople.value.trim();
  const percentage = +tipPercentage.value;
  const tipPercentageValue = amount * (percentage / 100);
  const totalAmountPlusTip = amount + tipPercentageValue;
  const eachPaysAmount = totalAmountPlusTip / totalPeople;

  if (!amount || amount <= 0 || totalPeople <= 0) {
    alert("Please enter a valid number. Number should be greater than 0.");
    return;
  }

  tipAmount.innerHTML = `Tip amount: ${convertCurrency(tipPercentageValue)}`;
  totalBill.innerHTML = `Total Bil: ${convertCurrency(totalAmountPlusTip)}`;
  eachPays.innerHTML = `Each Pays: ${convertCurrency(eachPaysAmount)}`;

  tipForm.reset();
};

// Event Listener
tipForm.addEventListener("submit", calculateTip);
