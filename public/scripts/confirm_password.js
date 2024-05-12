const register_form = document.getElementById("register_form");

register_form.addEventListener("submit", (event) => {
  const password = document.getElementById("password");
  const password_confirm = document.getElementById("password_confirm");
  console.log("register pressed");

  if (password.value !== password_confirm.value) {
    // alert("Password tidak cocok");
    event.preventDefault();
    console.log("password mismatch");
    console.log(password.value, " ", password_confirm.value);
    password.setCustomValidity("Password tidak cocok");
    password_confirm.setCustomValidity("Password tidak cocok");
    password.reportValidity();
    password_confirm.reportValidity();
  }
});
