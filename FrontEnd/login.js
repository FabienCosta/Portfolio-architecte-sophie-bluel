// ! 2- Connexion
// ? Variables Globales
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("current-password");
const loginButton = document.querySelector(".login_button");

// ? evenement sur le bouton de connexion
function login() {
  const loginForm = document.querySelector(".login_form");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    try {
      // fetch en post pour autoriser la connexion
      const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // envoi des données de connexion au format json et en string
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("bad request");
      }
      const data = await response.json();
      const token = data.token;
      // stockage du token dans le sessionStorage
      sessionStorage.setItem("token", token);
      // redirection vers la page d'accueil
      window.location.href = "index.html";
      
    } catch (error) {
      console.error(error);
      const errorMessage = document.querySelector(".login_error_msg");
      errorMessage.removeAttribute("hidden");
    }
  });
}
login();
