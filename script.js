// QUERY SELECTORS
const form = document.querySelector(".form");
const decimal = document.querySelector(".decimal");
const btnSubmit = document.querySelector(".submit");

const validateInput = function (input) {
  const inputValue = input;
  const length = inputValue.length;
  const binaryPattern = /^[01]+$/;
  const isValid = binaryPattern.test(inputValue);

  const response = {};
  // if the value is not a valid boolean or more than 8 chars long - error response
  if (!isValid) {
    response.message = `Invalid binary number: ${inputValue}`;
    response.error = true;
    return response;
  } else if (length > 8) {
    response.message = `Too many digits ${inputValue}. Please make sure it is less than 8 characters long`;
    response.error = true;
    return response;
  } else {
    response.message = `Success`;
    response.error = false;
    return response;
  }
};

const convertBinary = function (e) {
  e.preventDefault();
  
  // clear answer div
  decimal.textContent = "";

  // get form data and value
  const formData = new FormData(form, btnSubmit);
  const binary = formData.get("binary");

  // validate input
  const response = validateInput(binary);

  // create answer element
  const answer = document.createElement("p");

  if (response.error) {
    answer.textContent = response.message;
  } else {
    const decimalValue = parseInt(binary, 2);
    answer.textContent = `The converted decimal value is ${decimalValue}`;
  }

  // set the answer element in the DOM
  decimal.insertAdjacentElement("beforeend", answer);
};

form.addEventListener("submit", (e) => convertBinary(e));
