<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Reticula</title>
	<link rel="stylesheet" type="text/css" href="css/estiloLogin.css">
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jLogin.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<!-- <script type="text/javascript" src="js/Actualizar.js"></script> -->
</head>
<body>
	<div class="capaMagica" id="cajaMagica"></div>
<?php 

	session_start();
	if (@$_SESSION["usuario"] != "") {
		$usuario = @$_SESSION["usuario"];
		include('php/conexion.php');
		$nControl = $_SESSION["nControl"];
		$sentencia = "select level from userdata where username = '$nControl'";
		$query = mysqli_query($conexion, $sentencia);
		$datos = mysqli_fetch_row($query);
		switch ($datos[0]) {
			case 'admin':
				header('php/retic/index.php');
				break;

			case 'student':
				echo '<div class="contenedor">';
					include('php/usuario.php');
				echo '</div>';
				break;
		}
		mysqli_close($conexion);
	}else
	{
 ?>
	<div class="contenedorFlotante">
		<header>
			<div class="contenedorMil">
				<div class="informacion">
					<img src="img/logo/logo.jpg" alt="Logo ITESI" class="logo" width="170">
					<!-- <p class="btn_verde" id="entrarCuenta">Entrar</p> -->
				</div>
			</div>
		</header>

		<div class="contenedorMil">
			<article>
				<section>
					<h1>Bienvenido a tu reticula</h1>
					<p>La forma mas sencilla de conectarte con tus materias para mejorar el desempeño y conectarte con tus tutores.</p>
				</section>
				<div id="linea"></div>
				<section>
					<h3>Crea una cuenta gratuita</h3>
				</section>
				<section>
					<p class="btn_verde" id="entrarCuenta">Entrar alumno</p><br>
					<p class="btn_verde" id="entrarAdministrador"><a href="retic/index.php">Administrador</a></p>
					<!-- <p class="btn_verde" id="creaCuenta">Crear cuenta</p> -->
				</section>
			</article>
		</div>
	</div>

	<div class="contenedor">
		
	</div>
</body>
</html>
<?php } ?>