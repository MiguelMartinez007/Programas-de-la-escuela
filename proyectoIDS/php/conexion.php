<?php 

	// $conexion = @mysql_connect("localhost", "root", "") or die("Error al conextar a la base de datos");

	// $seleccionarBaseDatos = mysql_select_db("adivinaPelicula", $conexion) or die("Error al intentar seleccionar la base de datos");

	// $conexion = @mysql_connect("localhost", "root", "") or die("Error al conextar a la base de datos");

	// $seleccionarBaseDatos = mysql_select_db("db_lared", $conexion) or die("Error al intentar seleccionar la base de datos");


	$conexion = mysqli_connect("localhost", "root", "", "reticula");
	// $conexion = mysqli_connect("mysql.hostinger.mx", "u996587378_root", "69346584658693", "u996587378_pelic");

	// if (!$conexion) {
	//     echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
	//     echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
	//     echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
	//     exit;
	// }
	// echo "Éxito: Se realizó una conexión apropiada a MySQL!" . PHP_EOL;
	// echo "Información del host: " . mysqli_get_host_info($conexion) . PHP_EOL;
 ?>