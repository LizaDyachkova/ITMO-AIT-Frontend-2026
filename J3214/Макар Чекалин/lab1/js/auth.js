let loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("авторизация");
  window.location.href = "dashboard.html";
});