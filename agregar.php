<?php

$nombre=$_REQUEST['nombre'];
$paterno=$_REQUEST['paterno'];
$materno=$_REQUEST['materno'];


//echo "$id_agregar";
include 'conexion.php';

$query="INSERT INTO ejemplo (nombre, paterno, materno ) values ('$nombre', '$paterno', '$materno')";

$resultado = $mysqli->query($query);
echo '<script type="text/javascript"> window.location="principal.php"</script>';
?>



