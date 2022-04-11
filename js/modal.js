// DOM Elements

let modalBody = document.querySelector(".modal-body");
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".modal-btn");
let formData = document.querySelectorAll(".formData");
let closeModal = document.querySelector(".close");
let form = document.querySelector('form');


// variables & constants def 
let firstName = document.querySelector('#first')
let lastName = document.querySelector('#last')
let email = document.querySelector('#email')
let birthdate = document.querySelector('#birthdate')
let gameNum = document.querySelector("input[type=number]");
let locationCheckboxes = document.querySelectorAll("input[name='location']");
let checkbox = Array.from(locationCheckboxes.values())
let conditionsCheckboxes = document.querySelector("input[name='conditions']");
let submitBtn = document.querySelector('.btn-submit')
let nav = document.querySelector("nav");


// Event listener
form.addEventListener('change', isFormFilled);
form.addEventListener('submit', submitForm);

nav.addEventListener("click", editNav);

for (checkbox of locationCheckboxes) {
    checkbox.addEventListener('change', isLocationValid);
}

/* Functions */


// Menu burger navigation
function editNav() {
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
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
    closeModal.onclick = function() {
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


function checkIfChecked(textinputs) {
    var empty = [].filter.call(textinputs, function(el) {
        return !el.checked
    });

    if (textinputs.length == empty.length) {
        return false;
    }
}


function validateForm() {
    var fields = [firstName, lastName, birthdate, gameNum]

    var i, l = fields.length;
    var fieldname;
    for (i = 0; i < l; i++) {
        fieldname = fields[i];
        if (checkIfChecked(locationCheckboxes)) {
            return false
        }
        if (checkIfChecked(conditionsCheckboxes)) {
            return false
        }

        if (fieldname.value === "") {
            return false;
        }
    }
    return true;
}


function isFormFilled() {
    if (validateForm()) {
        enableSubmitBtn();
    } else {
        disableSubmitBtn();
    }
}
// Form validation 
function isFormValid() {

    if (isFirstNameValid() &&
        isLastNameValid() &&
        isEmailValid() &&
        isBirthdateValid() &&
        isGameNumValid() &&
        isLocationValid() &&
        isConditionsValid()) {
        return true;
    }
    return false;

}



// Firstname validation 
function isFirstNameValid() {
    let parent = firstName.closest('div');
    showError(parent);
    if (firstName.value.length <= 1) {
        return false;
    }

    if (firstName.value.length >= 15) {
        return false;
    }

    // Match any number in a string
    if (!/^([^0-9]*)$/.test(firstName.value)) {
        return false;
    }

    hideError(parent);
    return true;
}


// Lastname validation
function isLastNameValid() {
    let parent = lastName.closest('div');
    showError(parent);

    if (lastName.value.length <= 1) {
        return false
    }

    // Match any number in a string
    if (!/^([^0-9]*)$/.test(lastName.value)) {
        return false;
    }

    hideError(parent);
    return true;
}

// Email validation 
function isEmailValid() {
    let parent = email.closest('div');
    showError(parent);
    // Regex to match email only
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
        return false;
    }
    hideError(parent);
    return true;

}

// Birthday validation
function isBirthdateValid() {
    let parent = birthdate.closest('div');
    let birthDate = new Date(birthdate.value);
    let reg = /^\d{4}-\d{2}-\d{2}$/;
    showError(parent);
    if (!birthdate.value.match(reg)) {
        return false;
    }
    if (birthDate == "Invalid Date") {
        return false;
    }
    hideError(parent);
    return true;
}


// Game number validation 
function isGameNumValid() {
    let parent = gameNum.closest('div');
    showError(parent);
    if (gameNum.value < 0 || gameNum.value == '') {
        return false;
    }
    hideError(parent);
    return true;
}


// Loaction validation 
function isLocationValid() {
    let parent = checkbox.closest('div');
    showError(parent);
    for (checkbox of locationCheckboxes) {
        if (checkbox.checked) {
            hideError(parent);
            return true;
        }
    }
    return false
}

// Conditions validation 
function isConditionsValid() {
    let parent = conditionsCheckboxes.closest('div');
    showError(parent);
    if (!conditionsCheckboxes.checked) {
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

// Thank You Message modal
function thankyouMessage() {
    let txt = document.createElement("P");
    txt.innerText = 'Merci pour votre inscription';
    txt.style.marginTop = "auto"
    modalBody.appendChild(txt);
    modalBody.style.height = "80vh"
    modalBody.style.textAlign = "center"
}

function closeBtn() {
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Fermer";
    document.querySelector('.modal-body').appendChild(btn);
    btn.className = "btn-submit";
    btn.style.marginTop = "auto"
    btn.onclick = function() {
        modalbg.style.display = "none";
    };
}



function submitForm(e) {
    e.preventDefault();
    if (isFormValid()) {
        document.querySelector('.modal-body').innerHTML = " ";
        modalBody.style.display = "flex";
        modalBody.style.flexDirection = "column";
        modalBody.style.justifyContent = "center";
        thankyouMessage();
        closeBtn();
    }

}


disableSubmitBtn();
modalFormLaunch();
modalFormClose();

// Merci pour votre attention ! :)