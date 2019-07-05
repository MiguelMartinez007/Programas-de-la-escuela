<?php 

	@session_start();

	$nombre = $_POST["nombre"];
	$pass = $_POST["pass"];
	$pass2 = $_POST["pass2"];
	$sexo = @$_POST["sexo"];
	$terminos = @$_POST["terminos"];

	$val = false;

	if ($nombre == "") {
		$_SESSION["nombre"] = "error";
	}else
	{
		$_SESSION["nombre"] = "";
	}
	if ($pass != $pass2 || $pass == "") {
		$_SESSION["pass"] = "error";
	}else
	{
		$_SESSION["pass"] = "";
	}
	if ($sexo == "") {
		$_SESSION["sexo"] = "error";
	}else
	{
		$_SESSION["sexo"] = "";
	}
	if ($terminos == "") {
		$_SESSION["terminos"] = "error";
	}else
	{
		$_SESSION["terminos"] = "";
	}

	echo $_SESSION["pass"];

	if ($_SESSION["nombre"] == "error" || $_SESSION["pass"] == "error" || $_SESSION["sexo"] == "error" || $_SESSION["terminos"] == "error") {
		$_SESSION["accesoDenegado"] = true;
		header("Location:Login.php");
	}else
	{
		include("php/conexion.php");

		$sentencia = "INSERT INTO usuario VALUES('','$nombre','$pass','$sexo','$terminos')";
		$peticion = mysql_query($sentencia,$conexion);

		mysql_close($conexion);
		$_SESSION["accesoDenegado"] = false;
		$_SESSION["nombre"] = $nombre;
		$_SESSION["pass"] = $pass;
		$_SESSION["sexo"] = "";
		$_SESSION["terminos"] = "";
		$_SESSION["errorLogin"] = "";
		header("Location:Index.php");
	}
 ?>