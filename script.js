const lamp = document.getElementById("lamp");
const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// Lampu menyala ketika pengguna mulai mengisi password.
password.addEventListener("focus", () => lamp.classList.add("on"));
password.addEventListener("blur", () => {
  if (password.value.length === 0) lamp.classList.remove("on");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (username.value.trim() && password.value.trim()) {
    message.textContent = `Halo, ${username.value.trim()}! Demo login berhasil.`;
    message.style.color = "#a8f0b0";
    lamp.classList.add("on");
  } else {
    message.textContent = "Username dan password harus diisi.";
    message.style.color = "#ff9d9d";
  }
});
