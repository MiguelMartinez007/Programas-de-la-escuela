$(document).ready(function ()
	{$('div.contenedor_Articulo div.grap').animate({
		'opacity':'1'
	});
	$('div.tema p').click(function() {
		var objeto=$(this).siblings('div');
		var hijo=objeto.find('p');
		// alert(hijo.css('height'));
		if (hijo.css('height')=="0px") {
			ocultarOpcionesMenu();
			$(hijo).css({
				'height':'50px',
				'padding':'10px',
				'border-bottom':'solid 1px rgba(255,255,255,0.1)'
			});
		}else
		{
			$(hijo).css({
				'height':'0px',
				'padding':'0px',
				'border-bottom':'none'
			});
		}
	});
	$('header div.mostrarMenu').click(function() {
		$('nav').animate({
			left:'0%'
		});
	});
	$('div.tema p.cerrarMenu').click(function() {
		ocultarMenu();
		ocultarOpcionesMenu();
	});
	// $('div.tema p.cerrarSesion').click(function() {
	// 	$.post("cerrarSesion.php",{},function(retorno){});
	// });



	$('div.capitulos p').click(function() {
		var textoBusqueda = $(this).text();
		peticionDeTema(textoBusqueda);
		ocultarOpcionesMenu();
	});

	// funciones
	var peticionDeTema = function(tema)
	{
		// alert(tema);
		$.post('php/buscarTema.php',{buscarTema:tema+".txt"},function(retorno){
			$('div.contenedor_Articulo div.grap').css({
				'opacity':'0'
			});
			$('div.contenedor_Articulo div.grap').ready();
			$('div.contenedor_Articulo').html('<div class="grap">' + retorno + '</div>');
			$('div.contenedor_Articulo div.grap').animate({
				'opacity':'1'
			});
			ocultarMenu();
		});
	}


	var ocultarMenu = function(){
		$('nav').animate({
			left:'-100%'
		});
	}


	var ocultarOpcionesMenu = function()
	{
		$('div.capitulos p').css({
			'height': '0px',
			'padding':'0px',
			'border-bottom':'none'
		});
	}
});