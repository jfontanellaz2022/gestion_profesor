<?php 

session_start();
session_destroy();
header('Location: http://www.escuela40.net');

// comprobamos que se haya iniciado la sesión
if(isset($_SESSION['usuario'])) {
session_destroy();
header('Location: http://www.escuela40.net');
exit;
}else{
echo "Operaci&oacute;n incorrecta.";
}

?>