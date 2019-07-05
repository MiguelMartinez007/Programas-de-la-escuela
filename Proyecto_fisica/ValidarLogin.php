<?php 

	session_start();
	$nombreUsuario = $_POST["nombreUsuario"];
	$passUsuario = $_POST["passUsuario"];

	include("php/conexion.php");

	$sentencia = "select * from usuario where nombre='$nombreUsuario' and contrasena='$passUsuario'";
	$peticion = mysql_query($sentencia,$conexion);
	$numeroRegistros = mysql_num_rows($peticion);

	if ($numeroRegistros > 0) {
		$_SESSION["nombre"] = $nombreUsuario;
		$_SESSION["pass"] = $passUsuario;
		$_SESSION["errorLogin"] = "";
		$_SESSION["sexo"] = "";
		$_SESSION["terminos"] = "";
		header("Location:Index.php");
	}else
	{
		header("Location:Login.php");
		$_SESSION["errorLogin"] = "Verifica el usuario y contraseña por favor";
	}

 ?>