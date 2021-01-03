
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const zipcode = document.getElementById('zipcode');
const state = document.getElementById('state');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    
    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()
    const addressValue = address.value.trim()
    const zipcodeValue = zipcode.value.trim()
    const stateValue = state.value.trim()

    if(firstnameValue === '') {
        setErrorFor(firstname, 'Vänligen fyll i ditt förnamn')
    } else {
        setSuccessFor(firstname);
    }

    if(lastnameValue === '') {
        setErrorFor(lastname, 'Vänligen fyll i ditt efternamn')
    } else {
        setSuccessFor(lastname);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Vänligen fyll i din E-mail')
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'E-mail är felaktig')
    } else {
        setSuccessFor(email);
    }

    if(phoneValue === '') {
        setErrorFor(phone, 'Vänligen fyll i ditt telefonnummer')
    } else {
        setSuccessFor(phone);
    }

    if(addressValue === '') {
        setErrorFor(address, 'Vänligen fyll i din adress')
    } else {
        setSuccessFor(address);
    }

    if(zipcodeValue === '') {
        setErrorFor(zipcode, 'Vänligen fyll i ditt postnummer')
    } else {
        setSuccessFor(zipcode);
    }

    if(stateValue === '') {
        setErrorFor(state, 'Vänligen fyll i din postort')
    } else {
        setSuccessFor(state);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}

