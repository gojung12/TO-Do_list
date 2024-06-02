const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  if (username.value === "" && password.value === "") {
    alert("anda belum register");
  } else if (username.value === "") {
    alert("anda belum register");
  } else if (password.value === "") {
    alert("anda belum register");
  } else {
    alert("selamat anda telah login");
    localStorage.setItem("nama", username.value);
    localStorage.setItem("password", password.value);
    window.location.href = "index.html";
  }
});
