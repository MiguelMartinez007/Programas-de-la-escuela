<?php 

	@session_start();
	$usuario = $_SESSION["usuario"];
	$idUsuario = $_SESSION["idUsuario"];
	include('conexion.php');
	$query = "select fname,lname,face,correo,telefono,semestre_fk,id from student where studid = '$usuario'";
	$ejecuta = mysqli_query($conexion, $query);
	$datos = mysqli_fetch_row($ejecuta);

	include('conexion.php');
	$sentencia = "select distinct reticula.semestre_fk,code,subject.title,subject.clave_inter,subject.hrs,reticula.estado,reticula.materia_fk from reticula,subject,userdata where reticula.usuario_fk = $idUsuario and subject.id = reticula.materia_fk order by reticula.semestre_fk;";
	$query = mysqli_query($conexion, $sentencia);
	$numeroRespuestas = mysqli_num_rows($query);
	$semestre = 0;
	for ($i = 0; $i < $numeroRespuestas; $i++) { 
		$datos = mysqli_fetch_row($query);
		if ($semestre == $datos[0]) {
			echo '<div id="'.$datos[6].'" class="materia '.$datos[5].' edit">
					<h4>'.$datos[2].'</h4>
					<p class="">'.$datos[3].'</p>
					<p class="">'.$datos[4].'</p>
					<p class="control">'.$datos[1].'</p>
				</div>';
		}else
		{
			$semestre = $datos[0];
			if($i > 0) {echo '</div>';}
			echo '<div class="descripcionMateria"><p class="nivel">'.$semestre.'° Semestre</p><div class="materias materiasCerradas">';
			echo '<div id="'.$datos[6].'" class="materia '.$datos[5].' edit">
					<h4>'.$datos[2].'</h4>
					<p class="">'.$datos[3].'</p>
					<p class="">'.$datos[4].'</p>
					<p class="control">'.$datos[1].'</p>
				</div>';
		}
	}

 ?>