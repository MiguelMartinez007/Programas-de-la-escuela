<!DOCTYPE html>
<?php 
	
	session_start();
	if (@count($_SESSION["nombre"])>1 && @count($_SESSION["pass"])>1 && (@$_SESSION["accesoDenegado"] == false || @count($_SESSION["accesoDenegado"]))>1) {
		header("Location:Index.php");
	}

 ?>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>LOGIN</title>
	<link rel="stylesheet" type="text/css" href="css/estilo.css">
	<link rel="stylesheet" type="text/css" href="css/estiloLogin.css">

	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jLogin.js"></script>
</head>
<body>
	<div class="contenedorFormularioLogin">
		<form action="ValidarLogin.php" class"formularioLogin" name="formulario_login" method="post">
			<input type="text" name="nombreUsuario" id="nombreUsuario" placeholder="Usuario">
			<input type="password" name="passUsuario" id="passUsuario" placeholder="Contraseña">
			<input type="submit" name="entrarPagina" id="entrarPagina" value="Entrar">
		</form>
	</div>
	<div class="errorLogin"><p><?php echo @$_SESSION["errorLogin"]; ?></p></div>
	<div class="contenedorFormulario">
		<div class="wrap">
			<form action="registroPagina.php" class="formulario" name="formulario_registro" method="post">
				<div>
					<div class="inputGroup <?php echo @$_SESSION["nombre"]; ?>">
						<input type="text" id="nombre" name="nombre">
						<label class="label" for="nombre">Nombre:</label>
					</div>
					<div class="inputGroup <?php echo @$_SESSION["pass"]; ?>">
						<input type="password" id="pass" name="pass">
						<label class="label" for="pass">Contraseña:</label>
					</div>
					<div class="inputGroup <?php echo @$_SESSION["pass"]; ?>">
						<input type="password" id="pass2" name="pass2">
						<label class="label" for="pass2">Repetir contraseña:</label>
					</div>
					<div class="inputGroup radio <?php echo @$_SESSION["sexo"]; ?> ">
						<input type="radio" id="hombre" name="sexo" value="Hombre">
						<label for="hombre">Hombre</label>

						<input type="radio" id="mujer" name="sexo" value="Mujer">
						<label for="mujer">Mujer</label>
					</div>
					<div class="inputGroup checkbox <?php echo @$_SESSION["terminos"]; ?>">
						<input type="checkbox" id="terminos" name="terminos" value="true">
						<label for="terminos">Acepto los terminos y condiciones
							<p>> El uso de las cookies para guardar sus datos mientras esta navegando en la página.</p></label>
					</div>
					<input type="submit" id="btn_submit" value="Enviar">
				</div>
			</form>
		</div>
	</div>
</body>
</html>