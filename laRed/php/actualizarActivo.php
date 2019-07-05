<?php 

	session_start();

	include('conexion.php');

	$actualizacion = date('YndGis');

	// echo $actualizacion;

	$nombre = $_SESSION["nombre"];

	$sentencia = "UPDATE usuario SET activo = '". $actualizacion ."' WHERE nombre = '". $nombre ."'";

	$query = mysql_query($sentencia, $conexion);

	// echo "Correcto";

 ?>