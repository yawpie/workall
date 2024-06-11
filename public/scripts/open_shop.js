const register_screen = document.getElementById("register-screen");

const next_button = document.getElementById("next_button");

next_button.addEventListener("click", (event) => {
  console.log("tes");
  console.log(register_screen.classList);
  register_screen.classList.add("hidden");
  console.log(register_screen.classList);
  event.preventDefault();
  // register_screen.classList.remove("flex");
});
