function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".modal-btn");
let formData = document.querySelectorAll(".formData");
let closeModal = document.querySelector(".close");

let firstName = document.querySelector('#first')
let lastName = document.querySelector('#last')
let email = document.querySelector('#email')
let birthdate = document.querySelector('#birthdate')
let gameNumber = document.querySelector("input[type=number]");
let locationCheckboxes = document.querySelectorAll("input[name='location']");
let conditionsCheckboxes = document.querySelector("input[name='conditions']");
let submitBtn = document.querySelector('.btn-submit')

disableSubmitBtn();
modalFormLaunch();
modalFormClose();


// launch modal event
function modalFormLaunch () {
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function modalFormClose () {
  closeModal.onclick = function() {
  modalbg.style.display = "none";
  };
}










// disable submit form button
function disableSubmitBtn () {
  submitBtn.disabled = true;
  submitBtn.style.cursor = 'not-allowed';
  submitBtn.style.opacity = '0.5';
}

// enable submit form button
function enableSubmitBtn () {
  submitBtn.disabled = false;
  submitBtn.style.cursor = 'pointer';
  submitBtn.style.opacity = '1';
}




