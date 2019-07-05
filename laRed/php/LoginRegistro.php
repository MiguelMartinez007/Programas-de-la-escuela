<div class="contenedorLoginRegistro">
	<div class="contenedorInterior">
		<div class="titulo">
			<h1><p id="blanco">LA</p><p id="color">RED</p></h1>
		</div>
		<div class="formularios">
			<form action="php/configuracion.php" method="POST" class="login">
				<div id="input">
					<div class="icon"><span class="icon-user3"></span></div>
					<input type="text" name="nombreLogin" id="nombreLogin" placeholder="Nombre">
				</div>
				<div id="input">
					<div class="icon"><span class="icon-lock"></span></div>
					<input type="password" name="passLogin" id="passLogin" placeholder="Contraseña">
				</div>
				<input type="submit" name="entrar" id="entrar" value="Entrar">
				<div class="registro" id="mas"><p>Nuevo registro.</p></div>
			</form>
			<form action="php/configuracion.php" method="POST" class="registro">
				<div id="input">
					<div class="icon"><span class="icon-user3"></span></div>
					<input type="text" name="nombreRegistro" id="nombreRegistro" placeholder="Nombre">
				</div>
				<div id="input">
					<div class="icon"><span class="icon-lock"></span></div>
					<input type="password" name="passRegistro" id="passRegistro" placeholder="Contraseña">
				</div>
				<div id="input">
					<div class="icon"><span class="icon-lock"></span></div>
					<input type="password" name="cPassRegistro" id="cPassRegistro" placeholder="Confirma tu contraseña">
				</div>
				<input type="submit" name="registrar" id="registrar" value="Registrar">
				<div class="login" id="mas"><p>Login.</p></div>
			</form>
		</div>
	</div>
</div>