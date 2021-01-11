






// #region FormStuff

class User {
    constructor(firstname, lastname, email, phone, address, zipcode, state) {
        this.id = uuidv4()
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.phone = phone
        this.address = address
        this.zipcode = zipcode
        this.state = state
    }
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const zipcode = document.getElementById('zipcode');
const state = document.getElementById('state');

var boolFirstName = false
var boolLastName = false
var boolEmail = false
var boolPhone = false
var boolAddress = false
var boolZipCode = false
var boolState = false


let userInfo;
const userList = []


form.addEventListener("change", () => {
    var btnSubmit = document.getElementById('submitBtn');
    btnSubmit.setAttribute('disabled', 'disabled');
    btnSubmit.className = 'disabled';
    if(boolFirstName === true ) {
        btnSubmit.removeAttribute('disabled', 'disabled');
        btnSubmit.className = 'enabled';
        
    }
    // && boolLastName === true && boolEmail === true && boolPhone === true && boolAddress === true && boolZipCode === true && boolState === true 

})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    userInfo = new User(`${firstname.value}`, `${lastname.value}`, `${email.value}`, `${phone.value}`, `${address.value}`, `${zipcode.value}`, `${state.value}`)
    userList.push(userInfo)
    console.log(userInfo)
    console.log(userList)
    createUserElement()
    fillPanel()
    
    document.getElementById("form").reset();
    
    console.log('form has been submitted!')

    


    resetForm();
})

// #region InputListeners
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

// #endregion InputListeners


 //#region CheckInputs

function checkFirstName() {
    const firstnameValue = firstname.value.trim()
    if(firstnameValue.length < 2) {
        setErrorFor(firstname, 'Vänligen fyll i ditt förnamn')
        boolFirstName = false
    } else {
        setSuccessFor(firstname);
        boolFirstName = true
    }
}

function checkLastName() {
    const lastnameValue = lastname.value.trim()
    if(lastnameValue.length < 2) {
        setErrorFor(lastname, 'Vänligen fyll i ditt efternamn')
        boolLastName = false
    } else {
        setSuccessFor(lastname);
        boolLastName = true
    }
}

function checkEmail() {
    const emailValue = email.value.trim()
    if(emailValue === '') {
        setErrorFor(email, 'Vänligen fyll i din E-mail')
        boolEmail = false
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'E-mail är felaktig')
        boolEmail = false
    } else {
        setSuccessFor(email);
        boolEmail = true
    }
}

function checkPhone() {
    const phoneValue = phone.value.trim()
    if(phoneValue.length < 10) {
        setErrorFor(phone, 'Vänligen fyll i ditt telefonnummer')
        boolPhone = false
    } else {
        setSuccessFor(phone);
        boolPhone = true
    }
}

function checkAddress() {
    const addressValue = address.value.trim()
    if(addressValue === '') {
        setErrorFor(address, 'Vänligen fyll i din adress')
        boolAddress = false
    } else {
        setSuccessFor(address);
        boolAddress = true
    }
}

function checkZipCode() {
    const zipcodeValue = zipcode.value.trim()
    if(zipcodeValue === '') {
        setErrorFor(zipcode, 'Vänligen fyll i ditt postnummer')
        boolZipCode = false
    } else if(zipcodeValue.length < 5) {
        setErrorFor(zipcode, 'Vänligen fyll i hela postnummret (5 siffror)')
        boolZipCode = false
    } else {
        setSuccessFor(zipcode);
        boolZipCode = true
    }
}

function checkState() {
    const stateValue = state.value.trim()
    if(stateValue.length < 2) {
        setErrorFor(state, 'Vänligen fyll i din postort')
        boolState = false
    } else {
        setSuccessFor(state);
        boolState = true
    }
}

//#endregion CheckInputs




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

function resetForm() {
    firstname.parentElement.className = 'form-control'
    lastname.parentElement.className = 'form-control'
    email.parentElement.className = 'form-control'
    phone.parentElement.className = 'form-control'
    address.parentElement.className = 'form-control'
    zipcode.parentElement.className = 'form-control'
    state.parentElement.className = 'form-control'  

    boolFirstName = false
    boolLastName = false
    boolEmail = false
    boolPhone = false
    boolAddress = false
    boolZipCode = false
    boolState = false

    var btnSubmit = document.getElementById('submitBtn');
    btnSubmit.setAttribute('disabled', 'disabled');
    btnSubmit.className = 'disabled';
}

function isEmail(email) {
	return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}

// #endregion FormStuff


// function createLi() {
//     const li = document.createElement('li');
//     const span = document.createElement('span');
//     const pEmail = document.createElement('p');
//     const pPhone = document.createElement('p');
//     const pAddress = document.createElement('p');
//     const pZipCode = document.createElement('p');
//     const pState = document.createElement('p');

//     const editBtn = document.createElement('button');
//     editBtn.textContent = 'Redigera';
//     const removeBtn = document.createElement('button');
//     removeBtn.textContent = 'Ta bort';



//     const name = firstname.value + ' ' + lastname.value

//     span.textContent = name
//     pEmail.textContent = email.value
//     pPhone.textContent = phone.value
//     pAddress.textContent = address.value
//     pZipCode.textContent = zipcode.value
//     pState.textContent = state.value

//     li.appendChild(span);
//     li.appendChild(pEmail);
//     li.appendChild(pPhone);
//     li.appendChild(pAddress);
//     li.appendChild(pZipCode);
//     li.appendChild(pState);

//     li.appendChild(editBtn);
//     li.appendChild(removeBtn);

//     return li
// }

let userDiv;
let flipDiv;
let panelDiv;
let currentDiv;
let showBtn;
let deleteBtn;
function createUserElement() {

    userDiv = document.createElement('div')
    flipDiv = document.createElement('div')
    panelDiv = document.createElement('div')
    showBtn = document.createElement('button')
    deleteBtn = document.createElement('button')

    flipDiv.className = "flip"
    panelDiv.className = "panel"
    showBtn.className = 'show'
    deleteBtn.className = 'delete'

    userDiv.id = `${userInfo.id}`
    flipDiv.id = `${userInfo.id}-flip`
    panelDiv.id = `${userInfo.id}-panel`

    deleteBtn.id = `${userInfo.id}-deletebtn`
    deleteBtn.innerText = 'Ta bort'
    deleteBtn.click = deleteUser(userInfo.id)

    showBtn.id = `${userInfo.id}-btn`
    showBtn.innerText = 'Visa mer/mindre'
    showBtn.click = clickme(userInfo.id)

    

    flipDiv.innerText = `${userInfo.firstname} ` + `${userInfo.lastname}`

    currentDiv = document.getElementById('users');
    currentDiv.appendChild(userDiv)
    userDiv.appendChild(flipDiv)
    userDiv.appendChild(panelDiv)
    userDiv.appendChild(showBtn)
    userDiv.appendChild(deleteBtn)


}

function fillPanel() {
  
    let idElement = document.createElement("p")
    idElement.innerText = `Id: ${userInfo.id}`

    let firstNameElement = document.createElement("p")
    firstNameElement.innerText = `Förnamn: ${userInfo.firstname}`
    firstNameElement.id = `${userInfo.firstname}-firstname`

    let lastNameElement = document.createElement("p")
    lastNameElement.innerText = `Efternamn: ${userInfo.lastname}`
    lastNameElement.id = `${userInfo.lastname}-lastname`

    let emailElement = document.createElement("p")
    emailElement.innerText = `E-mail: ${userInfo.email}`
    emailElement.id = `${userInfo.email}-email`
  
    let phoneElement = document.createElement("p")
    phoneElement.innerText = `Telefon: ${userInfo.phone}`
    phoneElement.id = `${userInfo.phone}-phone`

    let addressElement = document.createElement("p")
    addressElement.innerText = `Adress: ${userInfo.address}`
    addressElement.id = `${userInfo.address}-address`
    
    let zipCodeElement = document.createElement("p")
    zipCodeElement.innerText = `Postnummer: ${userInfo.zipcode}`
    zipCodeElement.id = `${userInfo.zipcode}-zipcode`

    let stateElement = document.createElement("p")
    stateElement.innerText = `Postort: ${userInfo.state}`
    stateElement.id = `${userInfo.state}-state`


    panelDiv.appendChild(idElement)
    panelDiv.appendChild(firstNameElement)
    panelDiv.appendChild(lastNameElement)
    panelDiv.appendChild(emailElement)
    panelDiv.appendChild(phoneElement)
    panelDiv.appendChild(addressElement)
    panelDiv.appendChild(zipCodeElement)
    panelDiv.appendChild(stateElement)

  }

 
  


function clickme (input) {    
    $(document).ready(function() {
        $("#" + input + "-btn").click(function(){
            $("#" + input + "-panel").slideToggle();
          });
    })
}

function deleteUser (input) {
    let user = User
    console.log(user)
    userList.splice(user, 1)
}

