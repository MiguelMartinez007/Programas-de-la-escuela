var actualizarMateria = '<div class="contenedorMil" id="formulario"> <div class="cerrar"><span class="icon-close"></span></div> <form action="#" method="POST" class="formulario actualizarInfoMateria"> <div class="inputGroup"> <h3 id="nombreMateria"></h3> </div> <div class="inputGroup"> <h3 id = "NoControl"></h3> </div> <div class="inputGroup radio"> <input type="radio" id="aprobada" name="estado" value="V"> <label for="aprobada">Aprobada</label> <input type="radio" id="enCurso" name="estado" value="A"> <label for="enCurso">En curso</label> <input type="radio" id="reprobada" name="estado" value="R"> <label for="reprobada">Reprobada</label> <input type="radio" id="recursando" name="estado" value="M"> <label for="recursando">Recursando</label> </div> <input type="button" name="actualizarMeterias" id="actualizarMeterias" value="Actualizar materia" class="btn_azul"> </form> </div>';
var materiaModificada;
$(document).ready(function() {
	$('body').delegate('p#entrarCuenta','click',function() {
		cargarPagina('.capaMagica','login');
		$('.capaMagica').animate({'top':'0%'});
	});
	$('body').delegate('.cerrar span','click',function() {
		capaMagicaArriba();
	});

	animaciones();

	$('body').delegate('.descripcionMateria > p','click',function() {
		objeto = $(this).siblings('.materias');
		if (objeto.css('height') != '0px') {
			objeto.removeClass('materiasAbiertas');
			objeto.addClass('materiasCerradas');

			$(this).removeClass('nivelSeleccionado');
			$(this).addClass('nivel');
		}else
		{
			objeto.addClass('materiasAbiertas');
			objeto.removeClass('materiasCerradas');

			$(this).removeClass('nivel');
			$(this).addClass('nivelSeleccionado');
		}
	});

	$('body').delegate('.validarInputs','click',function() {
		us = $('#NoControlEntrar').val();
		contra = $('#passEntrar').val();
		$.post('php/existeUsuario.php',{usuario: us, contrasena: contra}, function(data) {
			$('#formulario form #rojo').remove();
			// alert(data);
			if (data != "") {
				$('.contenedor').html(data);
				anima('animacion2');
			}else
			{
				$('#formulario form').append('<p id="rojo">El usuario o la contraseña son incorrectos.</p>');
			}
		});
	});

	$('body').delegate('input#actualizarMeterias','click',function() {
		actu = $(".inputGroup input[name=estado]:checked").val();
		idMat = $(".inputGroup h3#nombreMateria").attr("name");
		$.post('php/actualizaMateriaUsuario.php',{actualizar: actu, idMateria: idMat}, function(data) {
			$('#formulario form #rojo').remove(); $('#formulario form #azul').remove();
			if (data == "correcto") {
				$('#formulario form').append('<p id="azul">La información se ha actualizado correctamente.</p>');
				materiaModificada.removeClass('V');
				materiaModificada.removeClass('A');
				materiaModificada.removeClass('R');
				materiaModificada.removeClass('M');
				materiaModificada.addClass(actu);
				capaMagicaArriba();
			}else
			{
				$('#formulario form').append('<p id="rojo">Existe un error, buelve a intentar.</p>');
			}
		});
	});
});

// Funcion para cargar paginas nuevas en alguna parte del documento
var cargarPagina = function(donde, carga) {
	$.post('php/solicitarPagina.php',{paginaSol: carga}, function(data) {
		nuevoContenido(donde,data);
	});
}

var capaMagicaArriba = function()
{
	$('.capaMagica').animate({'top':'-100%'});
	
}

var nuevoContenido = function(objeto, contenido)
{
	$(objeto).html(contenido);
}

var animaciones = function()
{
	$('body').delegate('.animacion4','click',function() {
		anima('animacion4');
	});
	$('body').delegate('.animacion3','click',function() {
		anima('animacion3');
	});
	$('body').delegate('.animacion2','click',function() {
		anima('animacion2');
	});
	$('body').delegate('.animacion1','click',function() {
		anima('animacion1');
	});
}

var anima = function(animacion) {
	switch(animacion)
	{
		case 'animacion1':
			capaMagicaArriba();
			objeto = $('.contenedorFlotante');
			objeto.fadeOut(1500);
		break;
		case 'animacion2':
			capaMagicaArriba();
			objeto = $('.contenedorFlotante');
			objeto.animate({'left':'-100%'},600);
		break;
		case 'animacion3':
			capaMagicaArriba();
			objeto = $('.contenedorFlotante');
			objeto.animate({'top':'-100%'},600);
		break;
		case 'animacion4':
			capaMagicaArriba();
			objeto = $('.contenedorFlotante');
			objeto.animate({'bottom':'-100%'},600);
		break;
	}
}