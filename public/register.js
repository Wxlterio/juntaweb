const registerButton = document.getElementById("botonRegistro");
const messageDiv = document.getElementById("register-message");

registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    const user = document.getElementById("reg-user-form").value;
    const password = document.getElementById("reg-password-form").value;
    const confirmPassword = document.getElementById("reg-confirm-password-form").value;
    const email = document.getElementById("reg-email-form").value;

    if(user.length < 3) {
        messageDiv.textContent = "El nombre de usuario debe tener al menos 3 caracteres.";
        messageDiv.style.color = "red";
        messageDiv.style.fontFamily = "Arial, sans-serif";
        messageDiv.style.fontSize = "12px";
        return;
    }
    if (password !== confirmPassword) {
        messageDiv.textContent = "Las contraseñas no coinciden.";
        messageDiv.style.color = "red";
        messageDiv.style.fontFamily = "Arial, sans-serif";
        messageDiv.style.fontSize = "12px";
        return;
    }
    if(password.length < 6) {
        messageDiv.textContent = "La contraseña debe tener al menos 6 caracteres.";
        messageDiv.style.color = "red";
        messageDiv.style.fontFamily = "Arial, sans-serif";
        messageDiv.style.fontSize = "12px";
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        messageDiv.textContent = "Por favor, ingresa un correo electrónico válido.";
        messageDiv.style.color = "red";
        messageDiv.style.fontFamily = "Arial, sans-serif";
        messageDiv.style.fontSize = "12px";
        return;
    }
    if (user && password && email) {
        localStorage.setItem("user", user);
        localStorage.setItem("password", password);
        localStorage.setItem("email", email);
        messageDiv.textContent = "¡Registro exitoso! Ahora puedes iniciar sesión.";
        messageDiv.style.color = "green";
        messageDiv.style.fontFamily = "Arial, sans-serif";
        messageDiv.style.fontSize = "12px";
    } else {
        messageDiv.textContent = "Por favor, completa todos los campos.";
        messageDiv.style.color = "red";
        messageDiv.style.fontFamily = "Arial, sans-serif";
        messageDiv.style.fontSize = "12px";
    }
});