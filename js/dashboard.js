$(document).ready(function() {
  document
    .getElementById("boton-sidebar")
    .addEventListener("click", function() {
      $("#sidebarMenus").toggleClass("sidebar-active");
      $("#navbar-dashboard").toggleClass("navbar-dashboard-activo");
      $(".titulo-navbar").toggleClass("titulo-navbar-activo");
      $(".boton-sidebar").toggleClass("boton-sidebar-activo");
    });

  var secciones = Array.from(
    document.querySelectorAll(".contenido-seccion .seccion")
  );
  var menus = Array.from(document.querySelectorAll(".lista-menus .menu"));

  menus.forEach(function(menu, index) {
    if (!menu.classList.contains("menu-activo"))
      $("#" + secciones[index].id).hide();
    menu.addEventListener(
      "click",
      function() {
        menus.forEach(function(elemento) {
          elemento.classList.remove("menu-activo");
        });
        secciones.forEach(function(seccion) {
          $("#" + seccion.id).fadeOut(200);
        });
        menu.classList.add("menu-activo");
        $("#" + secciones[index].id).fadeIn(200);
      }.bind(index)
    );
  });
});
