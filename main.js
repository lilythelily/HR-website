"use strict";

const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submitBtn = document.querySelector("#submit");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const msgError = document.querySelector("#msgError");
const popup = document.querySelector("#show-popup");

// show/hide errors

function showNameError() {
  nameError.classList.remove("hide");
  userName.style.borderColor = "red";
}

function hideNameError() {
  nameError.classList.add("hide");
  userName.style.borderColor = "#d1d5db";
}

function showEmailError() {
  emailError.classList.remove("hide");
  email.style.borderColor = "red";
}

function hideEmailError() {
  emailError.classList.add("hide");
  email.style.borderColor = "#d1d5db";
}

function showMsgError() {
  msgError.classList.remove("hide");
  message.style.borderColor = "red";
}

function hideMsgError() {
  msgError.classList.add("hide");
  message.style.borderColor = "#d1d5db";
}

// show/close popup

function showPopup() {
  popup.classList.remove("hide");
  hideEmailError();
  hideMsgError();
  hideNameError();
}

function closePopup() {
  popup.classList.add("hide");
}

// email validation

function emailValidation(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// eventlistener

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let isFormValid = true;

  if (userName.value < 1) {
    showNameError();
    isFormValid = false;
  } else {
    hideNameError();
  }

  let emailContent = email.value;

  if (!emailValidation(emailContent)) {
    showEmailError();
    isFormValid = false;
  } else {
    hideEmailError();
  }

  if (message.value < 1) {
    showMsgError();
    isFormValid = false;
  } else {
    hideMsgError();
  }

  if (isFormValid) {
    showPopup();
  }
});

window.addEventListener("click", (e) => {
  const target = e.target;
  if (target !== submitBtn) {
    closePopup();
  }
});
