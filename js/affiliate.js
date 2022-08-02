// Form validation

const firstNameError = document.getElementById("firsterror")
const lastNameError = document.getElementById("last-name-error")
const emailError = document.getElementById("email-error")
const passwordError = document.getElementById("password-error")
const submitError = document.getElementById('submit-error')

function validateFirstName() {
  let firstName = document.getElementById("first-name").value;
  if (firstName.length == 0) {
    firsterror.innerHTML = "First name is required";
  } else {
    firsterror.innerHTML = "";
  }

}



function validateLastName() {

    let lastName = document.getElementById("last-name").value;
    if (lastName.length == 0) {
      lastNameError.innerHTML = "Last name required";
    } else {
      lastNameError.innerHTML = "";
    }
    
}



function validateEmail(){
    let emailValidate = document.getElementById("email").value;
    if (emailValidate.length == 0) {
      emailError.innerHTML = "Email is required";
    } else {
      emailError.innerHTML = "";
    }
}


function validatePassword() {
      let passwordValidate = document.getElementById("password").value;
  if (passwordValidate.length == 0) {
    passwordError.innerHTML = " A password is required";
  } else {
    passwordError.innerHTML = "";
  }

  if ( passwordValidate.length < 8){
    passwordError.innerHTML = "Password must 8 characters";
  }


    
}
function validateButton(){
  if(!validateFirstName() || !validateLastName() || !validateEmail() || !validatePassword ){
    // setTimeout.style.display = "block"
    submitError.innerHTML = 'Please fix error to continue';
    setTimeout(function(){submitError.style.display = 'none'}, 3000)
  }
}

