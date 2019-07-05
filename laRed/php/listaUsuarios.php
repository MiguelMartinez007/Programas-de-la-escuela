<div class="amigo" id="<?php echo $_SESSION['idListado']; ?>" title="<?php echo $_SESSION['nombreListado']; ?>">
	<div class="contImg">
		<img src="img/usuarios/Miguel_Martinez/img_miguel_martinez_1.jpg" alt="<?php echo @$_SESSION['iniciales'] ?>">
	</div>
	<p><?php echo @$_SESSION["nombreListado"]; ?></p>
	<span class="icon-diamonds" id="<?php echo @$_SESSION['estaActivo']; ?>"></span>
</div>