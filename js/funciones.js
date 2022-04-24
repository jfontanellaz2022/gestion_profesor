//***********************************************
//OBTIENE EL DATOS DE UNA MATERIA SEGUN SU ID
//***********************************************
function sacaDatosMateriaPorId(idMateria) {
   var datos = {"materia":idMateria};
   var datos_materia;
   $.ajax({
      url:"../funciones/getMateriaPorId.php",
      type:"POST",
      data: datos,
      dataType : 'json',
      async: false,
      success: function(datos){
         datos_materia = datos;
      }
});
return datos_materia;
}


//***********************************************
//OBTIENE EL NOMBRE DE UNA MATERIA SEGUN SU ID
//***********************************************
function sacaNombreMateriaPorId(idMateria) {
    var datos = {"materia":idMateria};
    var nombre_materia;
    $.ajax({
       url:"../funciones/getMateriaPorId.php",
       type:"POST",
       data: datos,
       dataType : 'json',
       async: false,
       success: function(datos){
          nombre_materia = datos.data[0].nombre;
       }
 });
 return nombre_materia;
}

//*****************************************************
//OBTIENE EL NOMBRE COMPLETO DE UN ALUMNO SEGUN SU ID
//*****************************************************
function sacaNombreAlumnoPorId(idAlumno) {
   var datos = {"alumno":idAlumno};
   var nombre_alumno;
   $.ajax({
      url:"../funciones/getAlumnoPorId.php",
      type:"POST",
      data: datos,
      dataType : 'json',
      async: false,
      success: function(datos){
         nombre_alumno = datos.data[0].apellido+', '+datos.data[0].nombre+' ('+datos.data[0].dni+')';
      }
});
return nombre_alumno;
}

//***********************************************************************
//OBTIENE LOS DATOS NECESARIOS DE UN ALUMNO PARA EL LISTADO DEL CURSADO
//***********************************************************************
function sacaDatosAlumnoParaCursadoPorId(idAlumno,idMateria) {
   var datos = {"alumno":idAlumno, "materia":idMateria};
   var datos_alumno;
   $.ajax({
      url:"../funciones/getAlumnoCursandoPorId.php",
      type:"POST",
      data: datos,
      dataType : 'json',
      async: false,
      success: function(datos){
         datos_alumno = datos;
      }
});
return datos_alumno;
}


//***********************************************
// DETERMINA SI UN EVENTO ESTA O NO HABILITADO
//***********************************************
function getEventoHabilitadoPorCodigo(codigo) {
   var datos = {"codigo":codigo};
   var habilitado;
   $.ajax({
      url:"../funciones/getFechasEventoPorCodigo.php",
      type:"POST",
      data: datos,
      dataType : 'json',
      async: false,
      success: function(datos){
         habilitado = datos.habilitado;
      }
});
return habilitado;
}

//***********************************************
// RETORNA EL EVENTO CON TODOS SUS DATOS
//***********************************************
function getDatosEventoPorCodigo(codigo) {
   var datos = {"codigo":codigo};
   var evento;
   $.ajax({
      url:"../funciones/getFechasEventoPorCodigo.php",
      type:"POST",
      data: datos,
      dataType : 'json',
      async: false,
      success: function(datos){
         evento = datos;
      }
});
return evento;
}


//***********************************************
// RETORNA EL NOMBRE DE UNA CARRERA 
//***********************************************
function getCarreraNombrePorId(idCarrera) {
   var datos = {"carrera":idCarrera};
   var nombre;
   $.ajax({
      url:"../funciones/getCarreraPorId.php",
      type:"POST",
      data: datos,
      dataType : 'json',
      async: false,
      success: function(datos){
         nombre = datos.data[0].descripcion;
      }
});
return nombre;
}