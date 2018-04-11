
<?php
  $usuario2=$_REQUEST['usuario'];	
  $password2=$_REQUEST['password'];


  $usuario2 = base64_decode($usuario);
$password2= base64_decode($password);


  include 'conexion.php';



    $query = "SELECT * FROM ejemplo where usuario ='$usuario2' and password= '$password2'";
    echo "$query";
    $resultado = $mysqli->query($query);
    
    if ($resultado->num_rows > 0){
    
    header("Location:principal.php");

	}
  else{
         header("Location:P1.html");
    }
    
    
   

?>
 

