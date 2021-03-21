var state = false;
 function toggle(){
     if (state) {;
         document.getElementById("password").setAttribute("type", "password")
         state = false;
     }
     else {
         document.getElementById("password").setAttribute("type", "text");
         state = true;
     }
 }





const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputs();
});

const checkInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorMessage(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorMessage(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorMessage(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  // end of email

  if (passwordValue !== password2Value) {
    setErrorMessage(password2, "passwords do not match");
  } else {
    setSuccessFor(password && password2);
  }

  if (passwordValue === "") {
    setErrorMessage(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorMessage(password2, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }
};

// error function
function setErrorMessage(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // add error message
  small.innerText = message;

  formControl.className = "form-control error";
}

// success function
function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

// toggle password visibility

const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", toggleClicked);

function toggleClicked() {
  password.classList.toggle("visible");
  if (this.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }

  

}

// email validation regex
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.toLowerCase()
  );
}

 