<?php 

	session_start();

	include('conexion.php');
	$sentencia = "SELECT id_usuario,nombre,activo FROM usuario WHERE nombre<>'". $_SESSION["nombre"] . "'";

	$query = mysql_query($sentencia, $conexion);

	$numero = mysql_num_rows($query);

	if ($numero > 0) {

		for ($i=0; $i < $numero; $i++) { 
			$datos = mysql_fetch_row($query);

			$_SESSION["idListado"] = $datos[0];
			$_SESSION["nombreListado"] = $datos[1];
			$activo = $datos[2];
			$actualizacion = date('YndGis');

			$nombres = explode(' ', $_SESSION["nombreListado"]);

			$_SESSION["iniciales"] = $nombres[0][0] . @$nombres[1][0];
			$_SESSION["estaActivo"] = "activo";

			if ($activo + 10 < $actualizacion) {
				$_SESSION["estaActivo"] = "";
			}


			include('listaUsuarios.php');
		}
	}

	mysql_close($conexion);

 ?>