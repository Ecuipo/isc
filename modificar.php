<?php



$id=$_REQUEST['id'];
$nombre=$_REQUEST['nombre'];
$paterno=$_REQUEST['paterno'];
$materno=$_REQUEST['materno'];


//echo "$id_modificar";
include 'conexion.php';
//$query="UPDATE ejemplo SET nombre= '$nombre', $paterno='$paterno', materno='$materno' WHERE id=$id_modificar";
$query="UPDATE ejemplo SET nombre= '$nombre', paterno='$paterno', materno='$materno' WHERE id=$id";
$resultado = $mysqli->query($query);

echo '<script type="text/javascript"> window.location="principal.php"</script>';
?>


