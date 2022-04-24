$(function () {
  cargarHome();
})

function cargarHome() {
  //Activo del Menu la opcion Alumnos
  $(".nav-item").removeClass("active");
  $(".nav-item-home").addClass("active");
  //Remuevo la class que me deshabilita
  $("#resultado").removeClass("disabledbutton");
    $.get( "html/cargarHome.html", function( data ) {
       let titulo = '<h1><i>Seleccione que desea hacer</i></h1><hr>';
       let nav = `<nav aria-label="breadcrumb" role="navigation">
                   <ol class="breadcrumb">
                     <li class="breadcrumb-item active">Home</li>
                   </ol>
                 </nav>`;
       $("#breadcrumb").html(nav);
       $("#titulo").html(titulo);
       $("#resultado").html(data);
    });
}