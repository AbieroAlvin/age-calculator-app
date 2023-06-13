const form = document.getElementById("form");
const day = document.getElementById("Day");
const month = document.getElementById("Month");
const year = document.getElementById("Year");
const result = document.getElementById("result");

const daysHTML = document.querySelector(".dash-day");
const monthsHTML = document.querySelector(".dash-month");
const yearsHTML = document.querySelector(".dash-year");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  calculateAge();

  errorDisplay.innerText = "";
};

const calculateAge = () => {
  const dayValue = parseInt(day.value);
  const monthValue = parseInt(month.value);
  const yearValue = parseInt(year.value);

  let currentDate = new Date();
  let dobDate = new Date(yearValue, monthValue - 1, dayValue);
  let ageInMilliseconds = currentDate - dobDate;

  let ageDate = new Date(ageInMilliseconds);

  let years = ageDate.getUTCFullYear() - 1970;
  let months = ageDate.getUTCMonth();
  let days = ageDate.getUTCDate() - 1;

  daysHTML.textContent = days;
  monthsHTML.textContent = months;
  yearsHTML.textContent = years;
};

const validateInputs = () => {
  const dayValue = day.value;
  const monthValue = month.value;
  const yearValue = year.value;

  if (dayValue === "") {
    setError(day, "This field is required");
  } else if (dayValue < 1 || dayValue > 31) {
    setError(day, "Must be a valid day");
  } else {
    setSuccess(day);
  }

  if (monthValue === "") {
    setError(month, "This field is required");
  } else if (monthValue < 1 || monthValue > 12) {
    setError(month, "Must be a valid month");
  } else {
    setSuccess(month);
  }

  if (yearValue === "") {
    setError(year, "This field is required");
  } else if (yearValue > new Date().getFullYear()) {
    setError(year, "Must be in the past");
  } else {
    setSuccess(year);
  }
};
