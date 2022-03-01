

// DOM Elements
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".modal-btn");
let formData = document.querySelectorAll(".formData");
let closeModal = document.querySelector(".close");

let firstName = document.querySelector('#first')
let lastName = document.querySelector('#last')
let email = document.querySelector('#email')
let birthdate = document.querySelector('#birthdate')
let gameNum = document.querySelector("input[type=number]");
let locationCheckboxes = document.querySelectorAll("input[name='location']");
let conditionsCheckboxes = document.querySelector("input[name='conditions']");
let submitBtn = document.querySelector('.btn-submit')

// Menu burger navigation
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// launch modal event
function modalFormLaunch() {
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function modalFormClose() {
  closeModal.onclick = function () {
    modalbg.style.display = "none";
  };
}


// form validation 
function isFormValid() {

  if (isFirstNameValid()) {
    enableSubmitBtn();
    return true;
  }
  disableSubmitBtn();
  return false;

}


// first name validation 

function isFirstNameValid() {
  if (firstName.value.length < 2) {
    return false;
  }

  if (firstName.value.length > 15) {
    return false;
  }

  if (!/^([^0-9]*)$/.test(firstName.value)) {
    return false;
  }

  return true;
}

// disable submit form button
function disableSubmitBtn() {
  submitBtn.disabled = true;
  submitBtn.style.cursor = 'not-allowed';
  submitBtn.style.opacity = '0.5';
}

// enable submit form button
function enableSubmitBtn() {
  submitBtn.disabled = false;
  submitBtn.style.cursor = 'pointer';
  submitBtn.style.opacity = '1';
}





disableSubmitBtn();
modalFormLaunch();
modalFormClose();





