<?php
 //include_once("seguridadNivel1.php");
 ?>
<!doctype html>
<html lang="es">
  <head>
  <link rel="shortcut icon" href="../assets/img/favicon.png">
   <?php
      include_once('componente_header.html');
    ?>

<style media="screen">
      :root {
      --gradient: linear-gradient(to left top, #DD2476 10%, #FF512F 90%) !important;
      }

      body {
      background: #fff !important;
      }

      .card {
      background: #222;
      border: 1px solid #dd6e24;
      color: rgba(250, 250, 250, 0.8);
      margin-bottom: 2rem;
      }

      .btn {
      border: 1px solid;
      border-image-slice: 1;
      background: var(--gradient) !important;
      text-decoration: none;
      transition: all .4s ease;
      }

      /*
      .btn:hover, .btn:focus {
          background: var(--gradient) !important;
      -webkit-background-clip: none !important;
      -webkit-text-fill-color: #fff !important;
      border: 5px solid #fff !important;
      box-shadow: #222 1px 0 10px;
      text-decoration: underline;
      } */

      .disabledbutton {
          pointer-events: none;
          opacity: 0.5;
      }
</style>

</head>


<body>
  <!-- NAVBAR -->
  <header>
    <?php include("componente_navbar.html");?>
  </header>

  <article>
    <div id="breadcrumb">
      <nav aria-label="breadcrumb" role="navigation">
          <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">/ Home</li>
          </ol>
      </nav>
    </div>
  </article>

  <article class="container">
    <div id="control_habilitado" style='display:none'></div>
    <div id="cargar_regularidades_habilitado" style='display:none'></div>
    <div id="titulo"></div>
    <hr>
  </article>

  <article class="container">
       <section>
           <div class="row" id="resultado"></div><!-- Cierra Row-->
           <div class="row" id="controles"></div><!-- Cierra Row-->
        </section>
  </article>

<!-- FOOTER -->
<?php include("componente_footer.html");?>

<!-- JAVASCRIPT LIBRARIES-->
<?php include("componente_script_jquery.html");?>

<!-- JAVASCRIPT CUSTOM -->
<script>
let carrera_nombre = '';
let carrera_id = '';
var profesor_id = '';
var materia_nombre = '';
var materia_id = '';
var opcion = '';
let llamado_numero = '';
</script>
<script src="./js/loadHome.js"></script>
<script src="./js/funciones.js"></script>
<script src="./js/loadOpciones.js"></script>
<script src="./js/loadCarreras.js"></script>
<script src="./js/loadMaterias.js"></script>
<script src="./js/loadAlumnos.js"></script>
<script src="./js/gestionarCursadoAlumnos.js"></script>
<script src="./js/gestionarRegularidadesAlumnos.js"></script>

</body>
</html>
