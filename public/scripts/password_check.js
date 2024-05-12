const email = document.getElementById("email");
const password = document.getElementById("password");
const submit_login = document.getElementById("submit_login");

submit_login.addEventListener("click", (event) => {
  if (password.value == "") {
    event.preventDefault();
    password.setCustomValidity("Password tidak boleh kosong");
    password.reportValidity();
    password.value = "";
  }
  if (email.value == "") {
    event.preventDefault();
    email.setCustomValidity("Email tidak boleh kosong");
    email.reportValidity();
    email.value = "";
  }
});
