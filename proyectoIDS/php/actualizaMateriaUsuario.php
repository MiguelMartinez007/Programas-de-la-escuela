<?php 

	session_start();
	include('conexion.php');
	$actualizar = $_POST["actualizar"];
	$usuario = $_SESSION["idUsuario"];
	$idMateria = $_POST["idMateria"];
	$sentencia = "update reticula set estado = '$actualizar' where usuario_fk = $usuario and materia_fk = $idMateria";
	$query = mysqli_query($conexion, $sentencia);
	mysqli_close($conexion);
	echo "correcto";
 ?>