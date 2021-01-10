
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const zipcode = document.getElementById('zipcode');
const state = document.getElementById('state');

// const userList = []
const userList = [{firstname, lastname, email, phone, address, zipcode, state}]


form.addEventListener("submit", (e) => {
    e.preventDefault();

    // userList.push([...userList, [firstname.value, lastname.value, email.value, phone.value, address.value, zipcode.value, state.value]])
    userList.push([...userList, {firstname: firstname.value, lastname: lastname.value, email: email.value, phone: phone.value, address: address.value, zipcode: zipcode.value, state: state.value}])
    console.log(userList)
    console.log('form has been submitted!')

})


firstname.addEventListener("change", (e) => {
    e.preventDefault();
    checkFirstName();
});

lastname.addEventListener("change", (e) => {
    e.preventDefault();
    checkLastName();
});

email.addEventListener("change", (e) => {
    e.preventDefault();
    checkEmail();
});

phone.addEventListener("change", (e) => {
    e.preventDefault();
    checkPhone();
});

address.addEventListener("change", (e) => {
    e.preventDefault();
    checkAddress();
});

zipcode.addEventListener("change", (e) => {
    e.preventDefault();
    checkZipCode();
});

state.addEventListener("change", (e) => {
    e.preventDefault();
    checkState();
});


function checkFirstName() {
    const firstnameValue = firstname.value.trim()
    if(firstnameValue.length < 2) {
        setErrorFor(firstname, 'Vänligen fyll i ditt förnamn')
    } else {
        setSuccessFor(firstname);
    }
}

function checkLastName() {
    const lastnameValue = lastname.value.trim()
    if(lastnameValue.length < 2) {
        setErrorFor(lastname, 'Vänligen fyll i ditt efternamn')
    } else {
        setSuccessFor(lastname);
    }
}

function checkEmail() {
    const emailValue = email.value.trim()
    if(emailValue === '') {
        setErrorFor(email, 'Vänligen fyll i din E-mail')
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'E-mail är felaktig')
    } else {
        setSuccessFor(email);
    }
}

function checkPhone() {
    const phoneValue = phone.value.trim()
    if(phoneValue.length < 10) {
        setErrorFor(phone, 'Vänligen fyll i ditt telefonnummer')
    } else {
        setSuccessFor(phone);
    }
}

function checkAddress() {
    const addressValue = address.value.trim()
    if(addressValue === '') {
        setErrorFor(address, 'Vänligen fyll i din adress')
    } else {
        setSuccessFor(address);
    }
}

function checkZipCode() {
    const zipcodeValue = zipcode.value.trim()
    if(zipcodeValue === '') {
        setErrorFor(zipcode, 'Vänligen fyll i ditt postnummer')
    } else if(zipcodeValue.length < 5) {
        setErrorFor(zipcode, 'Vänligen fyll i hela postnummret (5 siffror)')
    } else {
        setSuccessFor(zipcode);
    }
}

function checkState() {
    const stateValue = state.value.trim()
    if(stateValue.length < 2) {
        setErrorFor(state, 'Vänligen fyll i din postort')
    } else {
        setSuccessFor(state);
    }
}

// function submitForm() {
//     e.preventDefault()
//     document.forms["regForm"].submit();
//     persons([...persons, {firstname: firstnameValue, lastname: lastnameValue, email: emailValue, phone: phoneValue, address: addressValue, zipcode: zipcodeValue, state: stateValue}])
//     console.log(persons)
//     console.log(document.forms["regForm"].submit());
// }

function enableSubmit() {

}




// function checkInputs() {
    
//     const firstnameValue = firstname.value.trim()
//     const lastnameValue = lastname.value.trim()
//     const emailValue = email.value.trim()
//     const phoneValue = phone.value.trim()
//     const addressValue = address.value.trim()
//     const zipcodeValue = zipcode.value.trim()
//     const stateValue = state.value.trim()

//     if(firstnameValue === '') {
//         setErrorFor(firstname, 'Vänligen fyll i ditt förnamn')
//     } else {
//         setSuccessFor(firstname);
//     }

//     if(lastnameValue === '') {
//         setErrorFor(lastname, 'Vänligen fyll i ditt efternamn')
//     } else {
//         setSuccessFor(lastname);
//     }

//     if(emailValue === '') {
//         setErrorFor(email, 'Vänligen fyll i din E-mail')
//     } else if (!isEmail(emailValue)){
//         setErrorFor(email, 'E-mail är felaktig')
//     } else {
//         setSuccessFor(email);
//     }

//     if(phoneValue === '') {
//         setErrorFor(phone, 'Vänligen fyll i ditt telefonnummer')
//     } else {
//         setSuccessFor(phone);
//     }

//     if(addressValue === '') {
//         setErrorFor(address, 'Vänligen fyll i din adress')
//     } else {
//         setSuccessFor(address);
//     }

//     if(zipcodeValue === '') {
//         setErrorFor(zipcode, 'Vänligen fyll i ditt postnummer')
//     } else {
//         setSuccessFor(zipcode);
//     }

//     if(stateValue === '') {
//         setErrorFor(state, 'Vänligen fyll i din postort')
//     } else {
//         setSuccessFor(state);
//     }

// }

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

