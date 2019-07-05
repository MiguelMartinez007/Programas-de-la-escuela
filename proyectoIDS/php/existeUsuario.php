<?php 
	
	session_start();

	$usuario = $_POST["usuario"];
	$contrasena = sha1($_POST["contrasena"]);
	include('conexion.php');
	$sentencia = "select * from userdata where username = '$usuario' and password = '$contrasena'";
	$query = mysqli_query($conexion, $sentencia);
	$numero = mysqli_num_rows($query);
	if ($numero == 1) {
		$_SESSION["usuario"] = $usuario;
		$datos = mysqli_fetch_row($query);
		switch ($datos[5]) {
			case 'student':
				$_SESSION["idUsuario"] = $datos[0];
				include('usuario.php');
				break;
			case 'admin':
				header('retic/index.php');
				break;
		}
	}else
	{
		echo "";
	}
	mysqli_close($conexion);

 ?>