// target the form and all the form fields 
let submitForm = document.querySelector('#validateForm'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password'),
    fullName = document.querySelector('#fullName'),
    phoneNumber = document.querySelector('#phoneNumber'),
    year = document.querySelector('#year'),
    gender = document.querySelector('#gender'),
    bio = document.querySelector('#bio');


// this function makes sure all required fields are filled
function required(field, event) {
    if (field.value == '') {
        field.nextElementSibling.innerHTML = 'This is a required field!';
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = '';
        return true; 
    }
}

// add EventListener
function validateForm(e) {
    required(email, e);
    required(password, e);
    required(fullName, e);
    required(phoneNumber, e);
    required(year, e);
    required(gender, e);
    required(bio, e);
    emailFieldValidation(e);
    passwordValidation(e);
    yearValidation(e);
    
    return true;
}

// email field validation 
function emailFieldValidation(event) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = 'Please enter a valid email address';
        event.preventDefault();
        return false;
    } else {
        email.nextElementSibling.innerHTML = '';
        return true;
    }
}

// password field validation
function passwordValidation(event) {
    let pwdRegex = /^[a-z0-9]+$/i;
    if (!password.value.match(pwdRegex)) {
        password.nextElementSibling.innerHTML = 'Please passwoord must contain letters or numbers only';
        event.preventDefault();
        return false;
    } else if (!(password.value.length >= 8)) {
        password.nextElementSibling.innerHTML = 'Please password length must be longer than 8';
        event.preventDefault();
        return false;
    } else {
        password.nextElementSibling.innerHTML = '';
        return true;
    }
}

// year field validation
function yearValidation(event) {
    let yearRegex = /^[0-9]{4}$/i;
    if(!year.value.match(yearRegex)) {
        year.nextElementSibling.innerHTML = 'Please enter a valid year';
        event.preventDefault();
        return false;
    }
    year.nextElementSibling.innerHTML = '';
    return true;
}

submitForm.addEventListener('submit', validateForm);

