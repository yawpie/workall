const register_form = document.getElementById("register_form");
const register_button = document.getElementById("register_button");
let password = document.getElementById("password");
let password_confirm = document.getElementById("password_confirm");

function resetForm() {
  password.value = "";
  password_confirm.value = "";
}
function passIsEmpty(param, event) {
  event.preventDefault();
  param.setCustomValidity("Password tidak boleh kosong");
  param.reportValidity();
}

function resetValidity(params) {
  params.setCustomValidity("");
}

register_form.addEventListener("submit", (event) => {
  if (password.value == "") {
    passIsEmpty(password, event);
  }
  if (password_confirm.value == "") {
    passIsEmpty(password_confirm, event);
  }
  if (password.value !== password_confirm.value) {
    event.preventDefault();
    console.log("password mismatch");
    console.log(password.value, " ", password_confirm.value);
    password.setCustomValidity("Password tidak cocok");
    password_confirm.setCustomValidity("Password tidak cocok");
    // password.reportValidity();
    // password_confirm.reportValidity();
  }
  resetValidity(password);
  resetValidity(password_confirm);
});

// register_form.addEventListener("submit", (event) => {
//   const password = document.getElementById("password");
//   const password_confirm = document.getElementById("password_confirm");
//   console.log("register pressed");

//   if (password.value !== password_confirm.value) {
//     // alert("Password tidak cocok");
//     event.preventDefault();
//     console.log("password mismatch");
//     console.log(password.value, " ", password_confirm.value);
//     password.setCustomValidity("Password tidak cocok");
//     password_confirm.setCustomValidity("Password tidak cocok");
//     password.reportValidity();
//     password_confirm.reportValidity();
//     password.value = "";
//     password_confirm.value = "";
//     window.location.reload();
//   } else {
//     console.log("password match");
//     password.setCustomValidity("");
//     password_confirm.setCustomValidity("");
//     password.reportValidity();
//     password_confirm.reportValidity();
//     register_form.submit();
//   }
// });
