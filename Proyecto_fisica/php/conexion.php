<?php 

	$conexion = @mysql_connect("localhost", "root", "") or die("Error al conextar a la base de datos");

	$seleccionarBaseDatos = mysql_select_db("db_fisicageneral", $conexion) or die("Error al intentar seleccionar la base de datos");

	
 ?>