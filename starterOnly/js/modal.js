
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


// Launch modal event
function modalFormLaunch() {
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
}

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function modalFormClose() {
  closeModal.onclick = function () {
    modalbg.style.display = "none";
  };
}


// Show data error
function showError(el) {
  el.setAttribute('data-error-visible', true);
}

// Hide data error
function hideError(el) {
  el.setAttribute('data-error-visible', false)
}

// Form validation 
function isFormValid() {

  if (isFirstNameValid()) {
    enableSubmitBtn();
    return true;
  }
  disableSubmitBtn();
  return false;

}


// Firstname validation 
function isFirstNameValid() {
  let parent = firstName.closest('div');
  showError(parent);
  if (firstName.value.length < 2) {
    return false;
  }

  if (firstName.value.length > 15) {
    return false;
  }

  // Match any number in a string
  if (!/^([^0-9]*)$/.test(firstName.value)) {
    return false;
  }

  hideError(parent);
  return true;
}






// Disable submit form button
function disableSubmitBtn() {
  submitBtn.disabled = true;
  submitBtn.style.cursor = 'not-allowed';
  submitBtn.style.opacity = '0.5';
}

// Enable submit form button
function enableSubmitBtn() {
  submitBtn.disabled = false;
  submitBtn.style.cursor = 'pointer';
  submitBtn.style.opacity = '1';
}





disableSubmitBtn();
modalFormLaunch();
modalFormClose();





