// ? Variables Globales
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("current-password");
const loginButton = document.querySelector(".login_button");

// ? evenement sur le bouton de connexion
const loginForm = document.querySelector(".login_form");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
const email = emailInput.value;
const password = passwordInput.value;
try {

  const response = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  if(!response.ok) {
    throw new Error("bad request");
   }
  const data = await response.json();
  const token = data.token;
  sessionStorage.setItem("token", token);
  console.log(data);
  
    window.location.href = "index.html";
}catch (error) {
  console.error(error);
  const errorMessage = document.querySelector(".login_error_msg");
  errorMessage.removeAttribute("hidden");
  }
   
});
// ? gerer les erreurs si le formulaire n'est pas bien rempli
// ? mettre un try/catch pour gerer les erreurs
// ? factoriser le code
// ? commenter le code