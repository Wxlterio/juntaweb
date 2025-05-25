const loginButton = document.getElementById("botonPersonalizado");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const user = document.getElementById("log-user-form").value;
    const password = document.getElementById("log-password-form").value;


    if(user === "admin" && password === "1234"){
        alert("te has logeado correctamente");
        window.location.href = "/home.html";
    }else {
        alert("Usuario o contraseña incorrectos");
    }
});
