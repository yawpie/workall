const login = (user_data_name, password, type = "email") => {
  if (type == "email") {
    fetch("http://localhost:5000/api/check-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user_data_name,
        password,
        type,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  } else if (type == "username") {
    fetch("http://localhost:5000/api/check-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user_data_name,
        password,
        type,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
};
