

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

const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const zipcode = document.getElementById("zipcode");
const state = document.getElementById("state");

var boolFirstName = false
var boolLastName = false
var boolEmail = false
var boolPhone = false
var boolAddress = false
var boolZipCode = false
var boolState = false


let userInfo;
const userList = [User];


form.addEventListener("change", () => {
    var btnSubmit = document.getElementById("submitBtn");
    btnSubmit.setAttribute("disabled", "disabled");
    btnSubmit.className = "disabled";
    if(boolFirstName === true && boolLastName === true && boolEmail === true && boolPhone === true && boolAddress === true && boolZipCode === true && boolState === true) {
        btnSubmit.removeAttribute("disabled", "disabled");
        btnSubmit.className = "enabled";
        
    }
})
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    userInfo = new User(`${firstname.value}`, `${lastname.value}`, `${email.value}`, `${phone.value}`, `${address.value}`, `${zipcode.value}`, `${state.value}`)
    userList.push(userInfo)

    createUserElement()
    fillPanel()
    
    document.getElementById("form").reset();
    
    console.log("form has been submitted!")

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
        setErrorFor(firstname, "Vänligen fyll i ditt förnamn")
        boolFirstName = false
    } else {
        setSuccessFor(firstname);
        boolFirstName = true
    }
}

function checkLastName() {
    const lastnameValue = lastname.value.trim()
    if(lastnameValue.length < 2) {
        setErrorFor(lastname, "Vänligen fyll i ditt efternamn")
        boolLastName = false
    } else {
        setSuccessFor(lastname);
        boolLastName = true
    }
}

function checkEmail() {
    const emailValue = email.value.trim()
    if(emailValue === "") {
        setErrorFor(email, "Vänligen fyll i din E-mail")
        boolEmail = false
    } else if (!isEmail(emailValue)){
        setErrorFor(email, "E-mail är felaktig")
        boolEmail = false
    } else if(emailValue) {
        userList.forEach(User => {
            if(User.email === emailValue) {
                setErrorFor(email, "Finns redan en användare med denna e-mail")
                boolEmail = false
            }
            else {
                setSuccessFor(email);
                boolEmail = true
            }
            
        });
    } 
}

function checkPhone() {
    const phoneValue = phone.value.trim()
    if(phoneValue.length < 10) {
        setErrorFor(phone, "Vänligen fyll i ditt telefonnummer")
        boolPhone = false
    } else if (phoneValue.length > 10) {
        setErrorFor(phone, "Ett telefonnummer innehåller max 10 siffror")
        boolPhone = false
    } else {
        setSuccessFor(phone);
        boolPhone = true
    }
}

function checkAddress() {
    const addressValue = address.value.trim()
    if(addressValue === "") {
        setErrorFor(address, "Vänligen fyll i din adress")
        boolAddress = false
    } else {
        setSuccessFor(address);
        boolAddress = true
    }
}

function checkZipCode() {
    const zipcodeValue = zipcode.value.trim()
    if(zipcodeValue === "") {
        setErrorFor(zipcode, "Vänligen fyll i ditt postnummer")
        boolZipCode = false
    } else if(zipcodeValue.length < 5) {
        setErrorFor(zipcode, "Vänligen fyll i hela postnummret (5 siffror)")
        boolZipCode = false
    } else if(zipcodeValue.length > 5) {
        setErrorFor(zipcode, "Ett postnummer innehåller endast 5 siffror")
        boolZipCode = false
    } else {
        setSuccessFor(zipcode);
        boolZipCode = true
    }
}

function checkState() {
    const stateValue = state.value.trim()
    if(stateValue.length < 2) {
        setErrorFor(state, "Vänligen fyll i din postort")
        boolState = false
    } else {
        setSuccessFor(state);
        boolState = true
    }
}

//#endregion CheckInputs


// #endregion FormStuff



// #region Functions

let userDiv;
let flipDiv;
let panelDiv;
let currentDiv;
let showBtn;
let deleteBtn;

function createUserElement() {

    userDiv = document.createElement("div");
    flipDiv = document.createElement("div");
    panelDiv = document.createElement("div");
    showBtn = document.createElement("button");
    deleteBtn = document.createElement("button");
    
    flipDiv.className = "flip";
    panelDiv.className = "panel";
    showBtn.className = "show";
    deleteBtn.className = "delete";

    userDiv.id = `${userInfo.id}`;
    flipDiv.id = `${userInfo.id}-flip`;
    panelDiv.id = `${userInfo.id}-panel`;

    showBtn.id = `${userInfo.id}-btn`;
    showBtn.innerText = "Visa mer/mindre";
    
    
    deleteBtn.id = `${userInfo.id}-delete`;
    deleteBtn.innerText = "Ta bort";
    
    flipDiv.innerText = `${userInfo.firstname} ` + `${userInfo.lastname}`;

    currentDiv = document.getElementById("users");
    currentDiv.appendChild(userDiv);
    userDiv.appendChild(flipDiv);
    userDiv.appendChild(panelDiv);
    userDiv.appendChild(showBtn);
    userDiv.appendChild(deleteBtn);

    showBtn.onclick = clickme(userInfo.id);
    deleteBtn.onclick = function() {
        deleteUser(userInfo.id)
    };

}


function fillPanel() {
  
    let idElement = document.createElement("p")
    idElement.innerText = `Id: ${userInfo.id}`

    let firstNameElement = document.createElement("p")
    firstNameElement.innerText = `Förnamn: ${userInfo.firstname}`
    firstNameElement.id = `${userInfo.id}-firstname`

    let lastNameElement = document.createElement("p")
    lastNameElement.innerText = `Efternamn: ${userInfo.lastname}`
    lastNameElement.id = `${userInfo.id}-lastname`

    let emailElement = document.createElement("p")
    emailElement.innerText = `E-mail: ${userInfo.email}`
    emailElement.id = `${userInfo.id}-email`
  
    let phoneElement = document.createElement("p")
    phoneElement.innerText = `Telefon: ${userInfo.phone}`
    phoneElement.id = `${userInfo.id}-phone`

    let addressElement = document.createElement("p")
    addressElement.innerText = `Adress: ${userInfo.address}`
    addressElement.id = `${userInfo.id}-address`
    
    let zipCodeElement = document.createElement("p")
    zipCodeElement.innerText = `Postnummer: ${userInfo.zipcode}`
    zipCodeElement.id = `${userInfo.id}-zipcode`

    let stateElement = document.createElement("p")
    stateElement.innerText = `Postort: ${userInfo.state}`
    stateElement.id = `${userInfo.id}-state`

    let editBtn = document.createElement("button")
    editBtn.innerText = ("Redigera")
    editBtn.id = "editBtn"
    editBtn.onclick = function(){
        editFillUser(userInfo.id)
    };

    panelDiv.appendChild(idElement)
    panelDiv.appendChild(firstNameElement)
    panelDiv.appendChild(lastNameElement)
    panelDiv.appendChild(emailElement)
    panelDiv.appendChild(phoneElement)
    panelDiv.appendChild(addressElement)
    panelDiv.appendChild(zipCodeElement)
    panelDiv.appendChild(stateElement)
    panelDiv.appendChild(editBtn)
}


function editFillUser (input) {
    let userIndex = userList.findIndex((user => user.id == input));

    let editUserBtn = document.getElementById("editUserBtn")
    editUserBtn.className = "editShow"

    let submitBtn = document.getElementById("submitBtn")
    submitBtn.className = "submitHide"

    firstname.value = userList[userIndex].firstname
    lastname.value = userList[userIndex].lastname
    email.value = userList[userIndex].email
    phone.value = userList[userIndex].phone
    address.value = userList[userIndex].address
    zipcode.value = userList[userIndex].zipcode
    state.value = userList[userIndex].state

    // console.log(userList[userIndex])

    return userIndex
}

document.getElementById("editUserBtn").addEventListener("click", editUser)

function editUser (){    
    let userIndex;
    try {
        userIndex = userList.findIndex((user => user.email == email.value));
    } catch {
        userIndex = userList.findIndex((user => user.phone == phone.value));
    }

    console.log(userList[userIndex])
    
    userList[userIndex].firstname = firstname.value
    userList[userIndex].lastname = lastname.value
    userList[userIndex].email = email.value
    userList[userIndex].phone = phone.value
    userList[userIndex].address = address.value
    userList[userIndex].zipcode = zipcode.value
    userList[userIndex].state = state.value

    let fName = document.getElementById(userList[userIndex].id + "-firstname")
    fName.innerText = "Förnamn: " + firstname.value

    let lName = document.getElementById(userList[userIndex].id + "-lastname")
    lName.innerText = "Efternamn: " + lastname.value

    let eMail = document.getElementById(userList[userIndex].id + "-email")
    eMail.innerText = "E-mail: " + email.value

    let phone2 = document.getElementById(userList[userIndex].id + "-phone")
    phone2.innerText = "Telefon: " + phone.value

    let address2 = document.getElementById(userList[userIndex].id + "-address")
    address2.innerText = "Adress: " + address.value

    let zipCode2 = document.getElementById(userList[userIndex].id + "-zipcode")
    zipCode2.innerText = "Postnummer: " + zipcode.value

    let state2 = document.getElementById(userList[userIndex].id + "-state")
    state2.innerText = "Postort: " + zipcode.value

    let fullName = document.getElementById(userList[userIndex].id + "-flip")
    fullName.innerText = `${firstname.value} ` + `${lastname.value}`


    let editUserBtn = document.getElementById("editUserBtn")
    editUserBtn.className = "editHide"

    let submitBtn = document.getElementById("submitBtn")
    submitBtn.className = "submitShow"

    document.getElementById("form").reset();
    resetForm()

}


function clickme (input) {    
    $(document).ready(function() {
        $("#" + input + "-btn").click(function(){
            $("#" + input + "-panel").slideToggle();
          });
    })
}

function deleteUser (input) {
    let elem = document.getElementById(input);
    elem.parentNode.removeChild(elem);
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function resetForm() {
    firstname.parentElement.className = "form-control"
    lastname.parentElement.className = "form-control"
    email.parentElement.className = "form-control"
    phone.parentElement.className = "form-control"
    address.parentElement.className = "form-control"
    zipcode.parentElement.className = "form-control"
    state.parentElement.className = "form-control"  

    boolFirstName = false
    boolLastName = false
    boolEmail = false
    boolPhone = false
    boolAddress = false
    boolZipCode = false
    boolState = false

    var btnSubmit = document.getElementById("submitBtn");
    btnSubmit.setAttribute("disabled", "disabled");
    btnSubmit.className = "disabled";
}

function isEmail(email) {
	return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}



//#endregion Functions
