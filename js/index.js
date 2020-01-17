var admin = {
  usuario: "neolink@neolink.com",
  password: "neolink123"
};

$(document).ready(function() {
  document
    .getElementById("formulario-log-in")
    .addEventListener("click", function(event) {
      event.preventDefault();
      logIn(admin);
    });
});

function logIn(usuario) {
  if (
    usuario.usuario.localeCompare("neolink@neolink.com") === 0 &&
    usuario.password.localeCompare("neolink123") === 0
  ) {
    console.log("OK");
    location.href = "dashboard.html";
  } else {
    console.log("ERROR");
    //ERROR
  }
}
