<?php 

	$temaBuscar = "contenido/". $_POST["buscarTema"];
	include('conexion.php');
	$sentencia = 'select * from materialdidactico where direcinformacion="'.$temaBuscar.'"';
	$peticion = mysql_query($sentencia, $conexion) or die("Fallo en la peticion al servidor");
	if (mysql_num_rows($peticion)>0) {
		$datos = mysql_fetch_row($peticion);
		if (file_exists("../" . $datos[2])) {
			$texto = @file_get_contents("../" . $datos[2]);
			echo $texto;
		}
	}

 ?>