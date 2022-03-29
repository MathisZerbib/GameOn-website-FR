// DOM Elements

let modalBody = document.querySelector(".modal-body");
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
let checkbox = Array.from(locationCheckboxes.values())
let conditionsCheckboxes = document.querySelector("input[name='conditions']");
let submitBtn = document.querySelector('.btn-submit')
let nav = document.getElementById("nav");


// Event listener
document.querySelector('form').addEventListener('change', isFormValid);
document.querySelector('form').addEventListener('submit', submitForm);
firstName.addEventListener('input', isFirstNameValid);
lastName.addEventListener('input', isLastNameValid);
email.addEventListener('input', isEmailValid);
birthdate.addEventListener('input', isBirthdateValid);
gameNum.addEventListener('input', isGameNumValid);
nav.addEventListener("click", editNav);

for (checkbox of locationCheckboxes) {
    checkbox.addEventListener('change', isLocationValid);
}
conditionsCheckboxes.addEventListener('change', isConditionsValid);


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

// Form validation 
function isFormValid() {

    if (isFirstNameValid() &&
        isLastNameValid() &&
        isEmailValid() &&
        isBirthdateValid() &&
        isGameNumValid() &&
        isLocationValid() &&
        isConditionsValid()) {
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
    if (firstName.value.length <= 2) {
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

    if (lastName.value.length <= 2) {
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

    //calculate month difference from current date in time  
    var month_diff = Date.now() - birthDate.getTime();

    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);

    //extract year from date      
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user  
    var age = Math.abs(year - 1970);

    //display the calculated age  

    showError(parent);


    if (age <= 15) {
        return false
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
    document.querySelector('.modal-body').innerHTML = " ";
    modalBody.style.display = "flex";
    modalBody.style.flexDirection = "column";
    modalBody.style.justifyContent = "center";
    thankyouMessage();
    closeBtn();
}


disableSubmitBtn();
modalFormLaunch();
modalFormClose();