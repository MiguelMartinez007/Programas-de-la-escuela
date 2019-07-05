<?php 

	$form = $_POST["nombre"];
	include('conexion.php');

	$sentencia = "select * from resultadosproblemas where problema='$form'";
	$peticion = @mysql_query($sentencia,$conexion);
	$datosFilas = mysql_fetch_row($peticion);
	// $datosFilas = @mysql_num_rows($peticion);

	echo $datosFilas[2];

 ?>