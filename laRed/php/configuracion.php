<?php 

	session_start();

	// Variables de login
	$nombreLogin = @$_POST["nombreLogin"];
	$passLogin = @$_POST["passLogin"];

	// Variables de registro
	$nombreRegistro = @$_POST["nombreRegistro"];
	$passRegistro = @$_POST["passRegistro"];
	$cPassRegistro = @$_POST["cPassRegistro"];

	// Variable para peticiones
	$peticion = @$_POST["peticion"];

	$_SESSION["entrar"] = false;
	$_SESSION["mensajeInformativo"] = "";

	$numero = "";

	if ($peticion == "cerrarSesion") {
		$_SESSION["mensajeInformativo"] = "Gracias por entrar a la red.";
		$_SESSION["entrar"] = false;
		$_SESSION["nombre"] = "";
	}else if ($nombreLogin != "" && $passLogin != "") {
		include('conexion.php');

		$sentencia = "SELECT * FROM usuario WHERE nombre='" . $nombreLogin . "' and pass='" . $passLogin . "'";

		$query = mysql_query($sentencia, $conexion);

		$numero = @mysql_num_rows($query);
		if ($numero == 1) {

			$datos = mysql_fetch_row($query);

			$_SESSION["nombre"] = $datos[1];
			$_SESSION["pass"] = $datos[2];

			$_SESSION["entrar"] = true;
			$_SESSION["mensajeInformativo"] = "";


			// Codigo para indicar que debo de actualizar la lista del chat

			$actualizacion = date('YndGis');
			$sentencia = "UPDATE usuario SET actualizar='" . $actualizacion . "' WHERE nombre='" . $_SESSION["nombre"] . "'";
			$query = mysql_query($sentencia, $conexion);

			// Fin del codigo de indicacion


		}else {
			$_SESSION["mensajeInformativo"] = "El usuario o contraseña no existen.";
			$_SESSION["entrar"] = false;
		}

		mysql_close($conexion);
	}else if ($nombreRegistro != "" && $passRegistro != "" && $cPassRegistro != "") {
		if ($passRegistro == $cPassRegistro) {
			include('conexion.php');

			$sentencia = "SELECT * FROM usuario WHERE nombre='" . $nombreRegistro . "'";

			$query = mysql_query($sentencia, $conexion);

			$numero = @mysql_num_rows($query);

			if ($numero == 0) {
				$sentencia = "INSERT INTO usuario (nombre,pass,activo) VALUES('".$nombreRegistro."','".$passRegistro."','1')";
				$query = mysql_query($sentencia, $conexion);

				$_SESSION["nombre"] = $nombreRegistro;
				$_SESSION["pass"] = $passRegistro;

				$_SESSION["entrar"] = true;


				// Codigo para indicar que debo de actualizar la lista del chat

				$actualizacion = date('YndGis');
				$sentencia = "UPDATE usuario SET actualizar='" . $actualizacion . "' WHERE nombre='" . $_SESSION["nombre"] . "'";
				$query = mysql_query($sentencia, $conexion);

				// Fin del codigo de indicacion

				$_SESSION["mensajeInformativo"] = "";
			}else {
				$_SESSION["mensajeInformativo"] = "El usuario ya existe... por favor elije otro.";
				$_SESSION["entrar"] = false;
			}

			mysql_close($conexion);
		}else {
			$_SESSION["mensajeInformativo"] = "Las contraseñas no son iguales.";
		}
	}else
	{
		$_SESSION["mensajeInformativo"] = "Completa todos los campos por favor.";
	}

	header('Location:../Index.php');

 ?>