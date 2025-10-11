
function signup() {
  document.getElementById("signup-container").style.display = "block";
  document.getElementById("login-container").style.display = "none";
}

function login() {
  document.getElementById("login-container").style.display = "block";
  document.getElementById("signup-container").style.display = "none";
}

function clos() {
  document.getElementById("signup-container").style.display = "none";
  document.getElementById("login-container").style.display = "none";
}

document.getElementById("f1").style.display = "block";