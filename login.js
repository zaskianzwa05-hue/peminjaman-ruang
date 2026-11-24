
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        message.textContent = "Login berhasil!";
        message.style.color = "green";
    } else {
        message.textContent = "Username atau password salah!";
        message.style.color = "red";
    }
});
