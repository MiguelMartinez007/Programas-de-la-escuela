<!DOCTYPE html>
<?php session_start(); ?>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Física general</title>
	<link rel="stylesheet" type="text/css" href="css/estilo.css">
	<link rel="stylesheet" type="text/css" href="css/estiloMenu.css">
	<link rel="stylesheet" type="text/css" href="css/estiloCabezera.css">
	<link rel="stylesheet" type="text/css" href="css/estiloBody.css">

	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/js.js"></script>
	<script type="text/javascript" src="js/jMenu.js"></script>
	<script type="text/javascript" src="js/jDOM.js"></script>
</head>
<body>
	<div class="contenedor">
		<header>
			<h1>Física general</h1>
			<div class="mostrarMenu">
				Menu
			</div>
			<!-- <p><?php echo $_SESSION["nombre"]; ?></p> -->
		</header>
		<nav>	
			<div class="precentacion">
				<div class="imagenUsuario"></div>
				<p><?php echo $_SESSION["nombre"]; ?></p>
			</div>
			<div class="menu">
				<!-- <div class="tema">
					<p>Estatica</p>
					<div class="capitulos">
						<p>Vector resultante</p>
					</div>
				</div> -->
				<div class="tema">
					<p>Dinamica</p>
					<div class="capitulos">
						<p>Ley de Boyle</p>
						<p>Termodinamica</p>
					</div>
				</div>
				<div class="tema">
					<p class="cerrarSesion"><a href="cerrarSesion.php">Cerrar sesion</a></p>
				</div>
				<div class="tema">
					<p class="cerrarMenu">Cerrar menú</p>
				</div>
			</div>
		</nav>
		<div class="contenedor_Articulo">
			<div class="grap">
				<?php include("contenido/Ley de Boyle.txt"); ?>
			</div>
		</div>
		<footer>
			<h5>Pagina elavorada por: Miguel Martinez | Protegida por derechos de autorun.inf</h5>
		</footer>
	</div>
</body>
</html>