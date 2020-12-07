// .......Assignment............


// For Name

const validateName = () => {
    const name = document.getElementById('name');
    const re = /^[A-Z][a-zA-Z\s]{4,17}$/;
    // console.log(name);
    //console.log(re.test(name));
    if (!re.test(name.value)) {
        name.classList.add('is-invalid'); // bootstrap class
    } else {
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');

    }
};


//  For zipCode
const validateZipCode = () => {
    const zipCode = document.getElementById('zipCode');
    const re = /^\d{5}$/; // zipCode should be only 5 digit

    if (!re.test(zipCode.value)) {
        zipCode.classList.add('is-invalid'); // bootstrap class is-invalid
    } else {
        zipCode.classList.remove('is-invalid');
        zipCode.classList.add('is-valid');

    }

};
// For Email

const validateEmail = () => {
    const email = document.getElementById('email');
    const re = /^([A-Za-z0-9_\-\.]+)@([A-Za-z_\-]+)\.([a-zA-Z]{2,5})$/; // 

    if (!re.test(email.value)) {
        email.classList.add('is-invalid'); // bootstrap class
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
};


// For Password

const validatePassword = () => {
    const password = document.getElementById('password');
    // const re = /^[a-zA-Z0-9]{8,}$/; //
    const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!&%#\?\$\^])(?=.{8,})/;

    if (!re.test(password.value)) {
        password.classList.add('is-invalid'); // bootstrap class
    } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');

    }
};


// for Phone

const validatePhone = () => {
    const phone = document.getElementById('phone');
    // const re = /^[0-9]{10,12}$/;
    const re = /^(\+?\d{2})?\-?(\d{4,})$/;
    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid'); // bootstrap class
    } else {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');

    }
};
// add the events listeners :
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipCode').addEventListener('blur', validateZipCode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('phone').addEventListener('blur', validatePhone);