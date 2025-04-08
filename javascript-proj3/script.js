"use strict";

// Query Selectors
const expenseTitle = document.querySelector(".expense-title");
const expenseDescription = document.querySelector(".expense-description");
const expenseAmount = document.querySelector(".expense-amount");
const expenseCategory = document.querySelector(".expense-category");
const expenseDate = document.querySelector(".expense-date");
const expenseForm = document.querySelector(".expense-form");
const expenseContainer = document.querySelector(".expense-container");
const totalExpense = document.querySelector(".total-expense");

let expenseArr = [];

// Convert amount to pounds
const convertAmount = (amount) => {
  const options = {
    style: "currency",
    currency: "GBP",
  };
  return new Intl.NumberFormat("en-GB", options).format(amount);
  ``;
};

// Calculate expense total amount
const calculateTotal = () => {
  const totalAmount = expenseArr.reduce(
    (accum, expense) => accum + expense.amount,
    0
  );

  totalExpense.innerHTML = convertAmount(totalAmount);
};

// Add Expense
const addExpense = (e) => {
  e.preventDefault();
  const title = expenseTitle.value.trim();
  const description = expenseDescription.value.trim();
  const amount = +expenseAmount.value.trim();
  const category = expenseCategory.value;
  const date = expenseDate.value;

  if (!title || !description || !amount || !date) {
    alert("Please enter a title, description, amount, category, and date");
    return;
  }

  const expenseObj = {
    id: crypto.randomUUID(),
    title,
    description,
    amount,
    category,
    date,
  };

  expenseArr = [...expenseArr, expenseObj];

  renderExpense();

  expenseForm.reset();

  calculateTotal();
};

// Convert Date
const convertDate = (date) => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-GB", options).format(new Date(date));
};

// Render Expense
const renderExpense = () => {
  expenseContainer.innerHTML = "";

  expenseArr.forEach((expense) =>
    expenseContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="expense-item" data-id="${expense.id}">
        <p>Title: ${expense.title}</p>
        <p>Description: ${expense.description}</p>
        <p>Amount: ${expense.amount}</p>
        <p>Category: ${expense.category}</p>
        <p>Date: ${convertDate(expense.date)}</p>
        <button class="delete-btn">Delete</button>
      </div>
    `
    )
  );
};

// Delete Expense
const deleteExpense = (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const expenseItem = e.target.closest(".expense-item");
    const expenseId = expenseItem.dataset.id;

    expenseArr = expenseArr.filter((expense) => expense.id !== expenseId);
  }

  renderExpense();

  calculateTotal();
};

// Event Listeners
expenseContainer.addEventListener("click", deleteExpense);
expenseForm.addEventListener("submit", addExpense);
