<!-- Etiqueta contenedora -->
<div class="contenedorPrincipal">

	<nav>
		<div class="barraAnclamiento">
			<h2>Menú</h2>
			<!-- <p>Anclado <span class="icon-pushpin"></span></p> -->
			<p>Desanclado <span class="icon-minus"></span></p>
		</div>
		<div class="opciones">
			<div class="opcion"><p class="seleccion"><span class="icon-home3"></span> Inicio</p></div>
			<div class="opcion" id="chat"><p class="seleccion"><span class="icon-bubbles4"></span> Chat</p></div>
			<div class="opcion"><p class="seleccion"><span class="icon-code"></span> Códigos</p></div>
			<div class="opcion" onclick="cerrarSesion()"><p class="seleccion"><span class="icon-key"></span> Cerrar sesión</p></div>
		</div>	
	</nav>

	<div class="contenedorFantasma">
		<header>
			<div class="contenedorInterior">
				<div class="menuInicio">
					<span class="icon-menu2" id="menu"></span>
					<span class="icon-home3" id="inicio"></span>
				</div>
				<div class="busqueda">
					<input type="text" name="busqueda" id="busqueda" placeholder="Busca amigos...">
					<input type="button" name="buscar" id="buscar" value="Buscar">
				</div>
				<!-- Nombre del usuario -->
				<div class="usuario">
					<div class="inicialesEtc">
						<p class="iniciales">
							<?php 
								$nombres = explode(' ', $_SESSION["nombre"]);
								echo $nombres[0][0] . @$nombres[1][0];
							 ?>
						</p>
					</div>
					<p class="nombre"><?php echo $_SESSION["nombre"]; ?></p>
				</div>
			</div>
		</header>
		
		<!-- Empiezo del contenedor chats -->
		<div class="contenedorChat">
			<div class="ventanaChat">
				<div class="tituloChat">
					<h4 title="Miguel Martinez 1">Miguel Martinez 1</h4>
					<span class="icon-close"></span>
				</div>
				<div class="VistaChat">
					<div class="contenedorMensajes gris">
						<div class="mensaje">
							<p class="msg">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio explicabo labore necessitatibus commodi dolorem, ipsa numquam dolore blanditiis, dolores illum sit iusto autem saepe laborum accusamus itaque, placeat nobis accusantium!
							</p>
							<p class="date">
								09/08/2016 a las 05:06 p.m
							</p>
						</div>
					</div>
					<div class="contenedorMensajes">
						<div class="mensaje">
							<p class="msg">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio explicabo labore.
							</p>
							<p class="date">
								09/08/2016 a las 05:06 p.m
							</p>
						</div>
					</div>
				</div>
				<div class="responder">
					<input type="text" id="respuesta" name="respuesta">
					<input type="button" id="enviarRespuesta" name="enviarRespuesta" value="Enviar">
				</div>
			</div>
		</div>
		<!-- Fin de contenedor chats -->

		<!-- Contenedor del cuerpo del documento -->
		<div class="contenedorCuerpo">
			<!-- amigos -->
			<div class="barraAmigos">
				<div class="barraAnclamiento">
					<h3>Amigos</h3>
					<!-- <p>Anclado <span class="icon-pushpin"></span></p> -->
					<!-- <p>Desanclado <span class="icon-minus"></span></p> -->
				</div>
				<div class="amigos">
					
				</div>
			</div>
			<!-- Termino de los amigos -->


			<article>
				<div class="relleno"></div>
			</article>
		</div>
		<!-- Fin del contenedor del cuerpo del documento -->
	</div>
	<div class="capaMagica"></div> <!-- Capa magica -->
</div>
<!-- Fin de etiqueta contenedora -->