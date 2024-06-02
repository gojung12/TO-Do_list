const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");
const inibener = localStorage.getItem("nama");
const inibener2 = localStorage.getItem("password");

button.addEventListener("click", function () {
  if (username.value === "" && password.value === "") {
    alert("isi dulu elah!!");
  } else if (username.value === "") {
    alert("isi dulu usernamenya");
  } else if (password.value === "") {
    alert("isi dulu passwordnya ");
  } else if (username.value === inibener && password.value === inibener2) {
    alert("selamat anda telah login");
    window.location.href = "to-do-list.html";
  } else {
    alert("invalid password or username");
  }
});
