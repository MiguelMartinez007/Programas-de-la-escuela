var menuOculto = true;
var ancla = false;


$(document).ready(function() {

	// Evento que se dispara cuando se da click al elemento capaMagica
	$('.menuInicio span#menu').on('click',function() {
		if (!ancla) {
			llamadaMenu();
		}
	});
	// Fin del evento de capaMagica

	$('body').delegate('.barraAnclamiento p', 'click', function() {
		if (!ancla) {
			$(this).empty();
			$(this).append('Anclado <span class="icon-pushpin"></span>');
			ancla = true;
			$('.capaMagica').remove();
			$('body').append('<div class="capaMagica"></div> <!-- Capa magica -->');
			$('.capaMagica').css({
				'z-index': '110'
			});
		}else {
			$(this).empty();
			$(this).append('Desanclado <span class="icon-minus"></span>');
			ancla = false;
			$('.capaMagica').remove();
			$('.contenedorPrincipal').append('<div class="capaMagica"></div> <!-- Capa magica -->');
			$('.capaMagica').fadeIn();
			$('.capaMagica').css({'z-index': '10'});
		}
	});

	$('body').delegate('.capaMagica', 'click', function() {
		if (!ancla) {
			llamadaMenu();
		};
	});

	$('body').delegate('.tituloChat', 'click', function() {
		windowMinMax($(this));
	});

	// Cerrar la ventana chat
	$('body').delegate('.tituloChat span', 'click', function() {
		$(this).parent().parent().remove();
	})
	// Termino de la funcion cerra la ventana chat


	$('#chat').on('click', function() {
		$('.barraAmigos').animate({width: '250px'}, 50);
		$('.relleno').animate({width: '250px'}, 50);
	});


	// Funcion para agregar un nuevo char en la ventanaChat
	$('body').delegate('.amigo', 'click', function() {
		var titulo = $(this).attr('title');
		var id = $(this).attr('id');
		var tituloReducido = titulo;

		if (titulo.length > 22) {
			tituloReducido = titulo.substring(0, 22) + "...";
		};

		if ($('.tituloChat h4.' + id).attr('title') == titulo) {
			var objeto = $('h4.' + id).parent();
			if (objeto.parent().css('height') == '30px') {
				windowMinMax(objeto);
			};
		}else {
			$('.contenedorChat').append('<div class="ventanaChat"> <div class="tituloChat"> <h4 class="' + id + '" title="' + titulo + '">' + tituloReducido + '</h4> <span class="icon-close"></span> </div> <div class="VistaChat"> <div class="contenedorMensajes gris">  </div> </div> <div class="responder"> <input type="text" class="' + id + '" id="respuesta" name="respuesta"> <input type="button" class="' + id + '" id="enviarRespuesta" name="enviarRespuesta" value="Enviar"> </div> </div>');
		}

	})
	// Fin de la funcion de agrear un nuevo chat


	$('.contenedorFantasma').on('scroll', function() {
		if ($(this).scrollTop() > 91) {
			$('.barraAmigos').css({'top': '0'});
			$('.amigos').css({'height': '90%'});
		}else {
			$('.barraAmigos').css({'top': '91px'});
			$('.amigos').css({'height': '75%'});
		}
	});

	// Funcion para mostrar el formulario de registro
	$('body').delegate('div#mas p', 'click', function() {
		if ($('form.registro').css('display') == 'none') {
			$('form.login').css({'display': 'none', 'opacity': '0'});
			$('form.registro').css({'display': 'block'});
			$('form.registro').animate({opacity: '1'});
		}else {
			$('form.registro').css({'display': 'none', 'opacity': '0'});
			$('form.login').css({'display': 'block'});
			$('form.login').animate({opacity: '1'});
		}
		$('#input input').val('');
	});
	// Termino de la funcion para mostrar el formulario de registro

	// Funcion para indicar que hacer cuando se le de click a la opcion de chat
	$('#chat').on('click', function() {
		ListUsOn();
	});
	// Fin de la funcion chat

	$('body').delegate('input#respuesta','keydown',function(e){
		// alert(e.keyCode);
		if (e.keyCode == 13 && $(this).val() != "") {
			validacionMSG($(this));
		};
	});

	$('body').delegate('input#enviarRespuesta', 'click', function() {
		validacionMSG($(this).siblings('input'));
	});


	var actualizar = setInterval('runFunction()', 5000);
	var actualizarChats = setInterval('runChats()',1000);


});




// Funcion para verificar si alguno de los chats que tiene abiertos no han llegado mensaje o algun otro chat
var runChats = function() {
	var chatsOpen = $('.ventanaChat').length;
	// alert(chatsOpen);
}




// Funcion para minimizar y maximizar las ventanas del chat
var windowMinMax = function(objeto) {
	var nombre = objeto.children().attr('title');

		if (nombre.length > 22) {
			nombre = nombre.substring(0, 22) + "...";
		};

		if (objeto.parent().css('height') != "30px") {
			objeto.children('h4').text(nombre.substring(0, 7) + '..');
			objeto.parent().css({
				'height': '30px'
			},50);

			objeto.parent().css({'width' : '100px'});
			objeto.addClass('hidden');
		}else {
			objeto.children('h4').text(nombre);
			objeto.parent().css({
				'height': '330px'
			},50);

			objeto.parent().css({'width' : '235px'});
			objeto.removeClass('hidden');
		}
}




// Funcion para que ejecute funciones cada sierto tiempo
var runFunction = function() {
	ListUsOn();
	activo();
}


// Funcion para indicar que el usuario esta activo
var activo = function() {
	$.post('php/actualizarActivo.php',{},function(data){
		// alert(data);
	})
}



// Funcion para la validacion de envio de mensajes
var validacionMSG = function(objeto) {
	var enviar = false;

	var textoEscrito = objeto.val();

	for(var i = 0; i < textoEscrito.length; i++) {
		if (textoEscrito.substring(i, i + 1) != " ") {
			enviar = true;
			break;
		};
	}

	if (enviar) {
		// alert(objeto.val());

		var msg = objeto.val();
		var para = objeto.parent().siblings('.tituloChat').children('h4').attr('title');
		// alert(para);

		$.post('php/Chat.php',{mensaje: msg, destinatario: para}, function(data) {
			alert(data);
		});

		objeto.val('');
	};
}




// Funcion para llamar al menu 
var llamadaMenu = function() {
	if (menuOculto) {
		$('nav').animate({
			width: '100%'
		});
		menuOculto = false;
		$('.capaMagica').fadeIn();
	}else{
		$('nav').animate({
			width: '0%'
		});
		menuOculto = true;
		$('.capaMagica').fadeOut();
	}
};


// Funcion para cerrar la sesion
var cerrarSesion = function() {
	$.post('php/configuracion.php', {peticion:"cerrarSesion"}, function(data){
		location.reload();
	});
}


var ListUsOn = function() {
	var nombre = $('.usuario p.nombre').text();
	
	$.post('php/peticion.php',{},function(data) {
		$('.amigos').html(data);
		// alert(data);
	});
}