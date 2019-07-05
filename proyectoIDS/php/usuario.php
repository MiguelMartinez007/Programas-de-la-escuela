<?php 
	@session_start();
	$usuario = $_SESSION["usuario"];
	$idUsuario = $_SESSION["idUsuario"];
	include('conexion.php');
	$query = "select fname,lname,face,correo,telefono,semestre_fk,id,studid from student where studid = '$usuario'";
	$ejecuta = mysqli_query($conexion, $query);
	$datos = mysqli_fetch_row($ejecuta);
	$_SESSION["nControl"] = $datos[7];
?>
<header class="headerPrincipal">
	<div class="contenedorMil">
		<div class="informacion">
			<img src="img/logo/logo.jpg" alt="Logo ITESI" class="logo" width="170">
			<h1>Bienvenido <?php echo $datos[0]; ?></h1>
			<a href="php/cerrarSesion.php"><img id="exit" src="img/icons/exit.png" alt="Salir..."></a>
		</div>
	</div>
</header>
<div class="contenedorMil">
	<article class="informacion">
		<section class="indicadores">
			<h2>Indicadores</h2>
			<div class="indicador">
				<div>
					<div class="cuadrado V"></div>
					<p>Aprobada</p>
				</div>
				<div>
					<div class="cuadrado A"></div>
					<p>En curso</p>
				</div>
				<div>
					<div class="cuadrado R"></div>
					<p>Reprobada</p>
				</div>
				<div>
					<div class="cuadrado M"></div>
					<p>Recursando</p>
				</div>
			</div>
		</section>
		<section class="infoAlumno">
			<!-- <div class="foto">
				<img src="img/alumno/TS14110003.jpg" alt="Miguel Angel MartinezPuga" width="200">
				<p id="NoControl">TS14110003</p>
			</div> -->
			<div class="datos">
				<p class="nombre">Nombre: <?php echo $datos[0]." ".$datos[1]; ?></p>
				<p class="semestre">Semestre: <?php echo $datos[5]; ?></p>
				<p class="face">Facebok: <?php echo $datos[2]; ?></p>
				<p class="correo">Correo: <?php echo $datos[3]; ?></p>
				<p class="telefono">Telefono: <?php echo $datos[4]; ?></p>
				<p class="nControl">No. de Control: <?php echo $datos[7]; ?></p>
				<?php mysqli_close($conexion); ?>
			</div>
		</section>
	</article>

	<article class="tablaReticula">
		<div class="headerReticula">
			<h3>Reticula</h3>
		</div>
		<section class="tabla">
			<?php include('actualizarTabla.php'); ?>
			<!-- <div class="descripcionMateria">
				<p class="nivel">1° Semestre</p>
				<div class="materias materiasCerradas">
					<div class="materia V edit">
						<h4>Matematicas discretas</h4>
						<p class="control">CC16</p>
						<p class="control">Horas teoria - practiva - creditos</p>
						<p class="control">clave oficial del programa</p>
					</div>
					<div class="materia M edit">
						<h4>Matematicas discretas2</h4>
						<p class="control">CS90M45</p>
					</div>
					<div class="materia A edit">
						<h4>Matematicas discretas3</h4>
						<p class="control">CS90M45</p>
					</div>
					<div class="materia V edit">
						<h4>Matematicas discretas4</h4>
						<p class="control">CS90M45</p>
					</div>
				</div>
			</div> -->
		</section>
	</article>
</div>