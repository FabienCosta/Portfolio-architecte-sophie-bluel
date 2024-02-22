// ? Variables Globales
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("current-password");
const loginButton = document.querySelector(".login_button");

// ? evenement sur le bouton de connexion
const loginForm = document.querySelector(".login_form");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "sophie.bluel@test.tld",
      password: "S0phie",
    }),
  });
  const data = await response.json();
  const token = data.token;
  sessionStorage.setItem("token", token);
  console.log("Token:", token);
  console.log(data);
});
