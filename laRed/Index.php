<!DOCTYPE html>
<?php 

	session_start();

// $_SESSION["entrar"] = false;

	include('php/conexion.php');

	$sentencia = "SELECT * FROM usuario WHERE nombre = '". @$_SESSION["nombre"] ."'";

	$query = mysql_query($sentencia, $conexion);

	$numero = mysql_num_rows($query);
	if (@$_SESSION["entrar"] == true && $numero > 0) {
		include('php/PaginaPrincipal.php');
	}else {
		include('php/LoginRegistro.php');
	}

	mysql_close($conexion);

 ?>


<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>LA RED</title>

	<link rel="stylesheet" type="text/css" href="css/estilos.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/actualizar.js"></script>
</head>
<body>

	<div class="mensajeInformativo">
		<div class="contenedorInterior">
			<p><?php echo @$_SESSION["mensajeInformativo"]; ?></p>
		</div>
	</div>

</body>
</html>