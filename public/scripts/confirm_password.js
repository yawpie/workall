const register_button = document.getElementById("register_button");

register_button.addEventListener("click", (e) => {
  const password = document.getElementById("password");
  const password_confirm = document.getElementById("password_confirm");

  if (password.value !== password_confirm.value) {
    alert("Password tidak cocok");
    e.preventDefault();
  }
});
