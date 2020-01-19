$(document).ready(function() {
  document
    .getElementById("boton-sidebar")
    .addEventListener("click", function() {
      $("#sidebarMenus").toggleClass("sidebar-active");
      $("#navbar-dashboard").toggleClass("navbar-dashboard-activo");
      $(".titulo-navbar").toggleClass("titulo-navbar-activo");
      $(".boton-sidebar").toggleClass("boton-sidebar-activo");
    });
});
