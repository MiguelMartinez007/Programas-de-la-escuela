<div class="contenedorMil" id="formulario">
	<div class="cerrar"><span class="icon-close"></span></div>
	<form action="#" method="POST" class="formulario actualizarInfoMateria">
		<div class="inputGroup">
			<h3 id="nombreMateria"></h3>
		</div>
		<div class="inputGroup">
			<h3 id = "NoControl"></h3>
		</div>
		<div class="inputGroup radio">
			<input type="radio" id="aprobada" name="estado" value="V">
			<label for="aprobada">Aprobada</label>
			<input type="radio" id="enCurso" name="estado" value="A">
			<label for="enCurso">En curso</label>
			<input type="radio" id="reprobada" name="estado" value="R">
			<label for="reprobada">Reprobada</label>
			<input type="radio" id="recursando" name="estado" value="M">
			<label for="recursando">Recursando</label>
		</div>
		<input type="button" name="actualizarMeterias" id="actualizarMeterias" value="Actualizar materia" class="btn_azul">
	</form>
</div>