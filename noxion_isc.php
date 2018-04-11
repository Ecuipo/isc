<?php
$hostname="localhost";
$usuario="zwort";
$password="1234a";
$basededatos="datos_isc";


$mysqli = new mysqli($hostname, $usuario, $password,$basededatos);
if ( mysqli_connect_errno() ) {
	echo "Error de conexión a la BD: ".mysqli_connect_error();
	exit();
}
else
{
	
}
?>