//****************************************************************
//CARGA LAS MATERIAS DEL PROFESOR SEGUN LA CARRERA SELECCIONADA
//***************************************************************
function cargarMateriaPorCarrera(carrera,profesor,opcion) {
   let parametros = {"action":"Listar",'carrera':carrera, 'profesor':profesor};
   let carrera_nombre = getCarreraNombrePorId(carrera);
   let titulo = '';
   //Remuevo la class que me deshabilita
   $("#resultado").removeClass("disabledbutton");
   if (opcion=='cursado') {
         titulo = '<h1><i>'+carrera_nombre+'</i></h1><h3><strong>Materias</strong> (Cargar Listado Alumnos)</h3><hr>';
   } else if (opcion=='regularidades') {
         titulo = '<h1><i>'+carrera_nombre+'</i></h1><h3><strong>Materias</strong> (Cargar Regularidades)</h3><hr>';
   } else if (opcion=='examenes') {
         titulo = '<h1><i>'+carrera_nombre+'</i></h1><h3><strong>Materias</strong> (Cargar Notas Examenes)</h3><hr>';
   };
   let bread = `<nav aria-label="breadcrumb" role="navigation">
                 <ol class="breadcrumb">
                   <li class="breadcrumb-item"><a href="#" onclick="cargarHome()">Home</a></li>
                   <li class="breadcrumb-item"><a href="#" onclick="cargarCarreras('`+opcion+`',`+profesor+`)">Carreras</a></li>
                   <li class="breadcrumb-item">`+carrera_nombre+`</li>
                 </ol>
               </nav>`;
   $("#breadcrumb").html(bread);
   $("#titulo").html(titulo);
   if (opcion=='cursado' || opcion=='regularidades' || opcion=='examenes') {
        $.post( "../funciones/getMateriasPorCarrera.php", parametros, function( data ) {
          let obj = JSON.parse(data);
          $("#resultado").html("");
          let tabla_comienzo = `
                       <table class="table table-striped">
                          <thead>
                             <tr><th>MATERIA</th><th>AÑO</th><th>FORMATO</th><th>CURSADO</th><th>ACCIONES</th></tr>
                          </thead>
                          <tbody>
                        `;
          let filas = ``;
          let tabla_final  = `   </tbody>
                             </table>`;
          if (obj.codigo==100) {
                  obj.data.forEach(materia => {
                       filas += `
                                  <tr><td>`+materia.nombre+` <strong>(`+materia.id+`)</strong></td><td>`+materia.anio+`</td>`+
                                     `<td>`+materia.descripcion_formato+`</td>`+
                                     `<td>`+materia.descripcion_cursado+`</td>`+
                                     `<td>`+
                                     `      <a href="#" class="linkAlumnos" data-idcursado= "`+materia.idCursado+
                                            `" data-idprofesor="`+profesor+`" data-idcarrera="`+carrera+
                                            `" data-idmateria="`+materia.id+`" data-nombremateria="`+materia.nombre+
                                            `" onclick="cargarAlumnos(`+carrera+`,`+materia.id+`,`+profesor+`,'`+opcion+`')" data-toggle="tooltip" data-placement="bottom" title="Listado de Alumnos"><img src="../assets/img/icons/listado_icon.png" width="25"></a>`+
                                     `</td></tr>
                                   `;
                   });
          } else {
                 filas = `
                          <tr><td>No Existen Materias Asociadas.</td></tr>
                         `;
                 }
           $("#resultado").html(tabla_comienzo+filas+tabla_final);
        });
   } else {

   }
}
