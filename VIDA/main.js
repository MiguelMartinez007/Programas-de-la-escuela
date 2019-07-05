// Creación de tablero "El juego de la vida"
// Por: Miguel Martinez
// Fecha de creación: 13/07/2016
// Inicio: 02:52 p. m.

// Valores de reseteo o inicio de la app
var numeroRecuadros;
var cuadroInactivo;
var cuadroActivo;
var tamanoCuadro;
var tamanoContenedor;
var array;
var contadorPosicion; 
var empezar;
var curvatura;

var cargarValoresConfiguracion = function()
{
	numeroRecuadros = parseInt($('#numRecuadros').val());
	cuadroInactivo = "#2196F3";
	cuadroActivo = "#ffffff";
	tamanoCuadro = parseInt($('#tamanoRecuadro').val());
	tamanoContenedor = numeroRecuadros * tamanoCuadro;
	array = [];
	contadorPosicion = 0; 
	empezar = false;
	curvatura = $('#curvatura').val() + '%';
}

$(document).ready(function(){
	cargarValoresConfiguracion();
	crearTablero();
	cargarColores();
	$('.recuadro').on('click',function() {
		$(this).addClass('vivo');
		//  $('.info').append("$('#" + $(this).attr('id') + "').addClass('vivo');<br>");
	});
	$('.empezar p#empezar').on('click',function() {
		if ($(this).text() == "Empezar") {
			empezar = true;
			$(this).text('Pausar');
		}else
		{
			empezar = false;
			$(this).text('Empezar');
		}
	});
	$('.capa').on('click',function() {
		$('.capa').fadeOut();
		$('.configuracion').animate({
			right: '-100%'
		});
	});
	$('.empezar p#configuracion').on('click',function() {
		$('.capa').fadeIn();
		$('.configuracion').animate({
			right: '0%'
		});
	});
	$('.empezar p#limpiarTablero').on('click',function() {
		$('.recuadro').removeClass('vivo');
	});
	$('#guardar').on('click',function() {
		location.reload();
	});
	cargarValoresDefault();
	// empezarSimulacion();
});

var cargarColores = function()
{
	$('.contenedor').css({'background': cuadroInactivo});
	$('.titulo').css({
		'color': cuadroActivo,
		'background': 'rgba(0,0,0,0.255)'
	});
	$('.contenedorRecuadros').css({
		'width': tamanoContenedor + "px",
		'height': tamanoContenedor + "px"
	});
	$('.recuadro').css({
		'width': tamanoCuadro + "px",
		'height': tamanoCuadro + "px",
		'background': cuadroInactivo,
		'border': 'solid 1px rgba(255,255,255,0.2)',
		'float': 'left',
		'border-radius': curvatura
	});
	$('.empezar').css({'background': cuadroActivo,'color': cuadroInactivo});
}

var cargarValoresDefault = function()
{
	// $('#19-20').addClass('vivo');
	// $('#21-20').addClass('vivo');
	// $('#20-21').addClass('vivo');
	// $('#20-19').addClass('vivo');
	// $('#20-20').addClass('vivo');
	// --------------------------------
	// $('#19-23').addClass('vivo');
	// $('#21-23').addClass('vivo');
	// $('#20-22').addClass('vivo');
	// $('#20-23').addClass('vivo');
	// $('#20-24').addClass('vivo');
	// $('#17-20').addClass('vivo');
	// $('#18-20').addClass('vivo');
	// $('#16-20').addClass('vivo');
	// $('#17-21').addClass('vivo');
	// $('#17-19').addClass('vivo');
	// $('#20-18').addClass('vivo');
	// $('#20-17').addClass('vivo');
	// $('#20-16').addClass('vivo');
	// $('#21-17').addClass('vivo');
	// $('#19-17').addClass('vivo');
	// $('#23-19').addClass('vivo');
	// $('#23-20').addClass('vivo');
	// $('#22-20').addClass('vivo');
	// $('#24-20').addClass('vivo');
	// $('#23-21').addClass('vivo');
	// --------------------------------
	// $('#12-19').addClass('vivo');
	// $('#12-20').addClass('vivo');
	// $('#13-20').addClass('vivo');
	// $('#11-20').addClass('vivo');
	// $('#12-21').addClass('vivo');
	// $('#19-28').addClass('vivo');
	// $('#20-28').addClass('vivo');
	// $('#20-27').addClass('vivo');
	// $('#20-29').addClass('vivo');
	// $('#21-28').addClass('vivo');
	// $('#28-21').addClass('vivo');
	// $('#28-20').addClass('vivo');
	// $('#27-20').addClass('vivo');
	// $('#29-20').addClass('vivo');
	// $('#28-19').addClass('vivo');
	// $('#21-12').addClass('vivo');
	// $('#20-12').addClass('vivo');
	// $('#20-11').addClass('vivo');
	// $('#20-13').addClass('vivo');
	// $('#19-12').addClass('vivo');
	// -------------------------------- Cruses
	// $('#9-19').addClass('vivo');
	// $('#9-20').addClass('vivo');
	// $('#8-20').addClass('vivo');
	// $('#10-20').addClass('vivo');
	// $('#9-21').addClass('vivo');
	// $('#11-23').addClass('vivo');
	// $('#12-23').addClass('vivo');
	// $('#12-22').addClass('vivo');
	// $('#12-24').addClass('vivo');
	// $('#13-23').addClass('vivo');
	// $('#15-21').addClass('vivo');
	// $('#15-20').addClass('vivo');
	// $('#16-20').addClass('vivo');
	// $('#14-20').addClass('vivo');
	// $('#15-19').addClass('vivo');
	// $('#13-17').addClass('vivo');
	// $('#12-17').addClass('vivo');
	// $('#12-18').addClass('vivo');
	// $('#12-16').addClass('vivo');
	// $('#11-17').addClass('vivo');
	// $('#17-13').addClass('vivo');
	// $('#17-12').addClass('vivo');
	// $('#18-12').addClass('vivo');
	// $('#16-12').addClass('vivo');
	// $('#17-11').addClass('vivo');
	// $('#19-15').addClass('vivo');
	// $('#20-15').addClass('vivo');
	// $('#20-14').addClass('vivo');
	// $('#20-16').addClass('vivo');
	// $('#21-15').addClass('vivo');
	// $('#23-13').addClass('vivo');
	// $('#23-12').addClass('vivo');
	// $('#24-12').addClass('vivo');
	// $('#22-12').addClass('vivo');
	// $('#23-11').addClass('vivo');
	// $('#21-9').addClass('vivo');
	// $('#20-9').addClass('vivo');
	// $('#20-8').addClass('vivo');
	// $('#20-10').addClass('vivo');
	// $('#19-9').addClass('vivo');
	// $('#25-19').addClass('vivo');
	// $('#25-20').addClass('vivo');
	// $('#26-20').addClass('vivo');
	// $('#24-20').addClass('vivo');
	// $('#25-21').addClass('vivo');
	// $('#27-23').addClass('vivo');
	// $('#28-23').addClass('vivo');
	// $('#28-24').addClass('vivo');
	// $('#28-22').addClass('vivo');
	// $('#29-23').addClass('vivo');
	// $('#31-21').addClass('vivo');
	// $('#31-20').addClass('vivo');
	// $('#32-20').addClass('vivo');
	// $('#30-20').addClass('vivo');
	// $('#31-19').addClass('vivo');
	// $('#29-17').addClass('vivo');
	// $('#28-16').addClass('vivo');
	// $('#28-17').addClass('vivo');
	// $('#28-18').addClass('vivo');
	// $('#27-17').addClass('vivo');
	// $('#19-31').addClass('vivo');
	// $('#20-31').addClass('vivo');
	// $('#20-30').addClass('vivo');
	// $('#20-32').addClass('vivo');
	// $('#21-31').addClass('vivo');
	// $('#17-29').addClass('vivo');
	// $('#17-28').addClass('vivo');
	// $('#18-28').addClass('vivo');
	// $('#16-28').addClass('vivo');
	// $('#17-27').addClass('vivo');
	// $('#19-25').addClass('vivo');
	// $('#20-25').addClass('vivo');
	// $('#20-24').addClass('vivo');
	// $('#20-26').addClass('vivo');
	// $('#21-25').addClass('vivo');
	// $('#23-27').addClass('vivo');
	// $('#23-28').addClass('vivo');
	// $('#24-28').addClass('vivo');
	// $('#22-28').addClass('vivo');
	// $('#23-29').addClass('vivo');
	// --------------------------------
	// $('#11-23').addClass('vivo');
	// $('#11-24').addClass('vivo');
	// $('#11-25').addClass('vivo');
	// $('#10-24').addClass('vivo');
	// $('#12-24').addClass('vivo');
	// $('#6-20').addClass('vivo');
	// $('#6-19').addClass('vivo');
	// $('#6-18').addClass('vivo');
	// $('#7-19').addClass('vivo');
	// $('#5-19').addClass('vivo');
	// $('#11-15').addClass('vivo');
	// $('#11-14').addClass('vivo');
	// $('#11-13').addClass('vivo');
	// $('#10-14').addClass('vivo');
	// $('#12-14').addClass('vivo');
	// $('#16-19').addClass('vivo');
	// $('#15-19').addClass('vivo');
	// $('#16-18').addClass('vivo');
	// $('#16-20').addClass('vivo');
	// $('#17-19').addClass('vivo');
	// $('#39-14').addClass('vivo');
	// $('#39-16').addClass('vivo');
	// $('#38-13').addClass('vivo');
	// $('#37-13').addClass('vivo');
	// $('#36-13').addClass('vivo');
	// $('#35-13').addClass('vivo');
	// $('#35-14').addClass('vivo');
	// $('#35-15').addClass('vivo');
	// $('#36-16').addClass('vivo');
	// $('#36-22').addClass('vivo');
	// $('#35-23').addClass('vivo');
	// $('#35-24').addClass('vivo');
	// $('#35-25').addClass('vivo');
	// $('#36-25').addClass('vivo');
	// $('#37-25').addClass('vivo');
	// $('#38-25').addClass('vivo');
	// $('#39-24').addClass('vivo');
	// $('#39-22').addClass('vivo');
	// ---------------------------------
	// $('#16-8').addClass('vivo');
	// $('#17-8').addClass('vivo');
	// $('#18-8').addClass('vivo');
	// $('#2-14').addClass('vivo');
	// $('#2-15').addClass('vivo');
	// $('#2-16').addClass('vivo');
	// $('#3-14').addClass('vivo');
	// $('#3-13').addClass('vivo');
	// $('#3-15').addClass('vivo');
	// $('#26-27').addClass('vivo');
	// $('#25-27').addClass('vivo');
	// $('#25-28').addClass('vivo');
	// $('#25-29').addClass('vivo');
	// $('#27-28').addClass('vivo');
	// $('#31-34').addClass('vivo');
	// $('#32-33').addClass('vivo');
	// $('#33-33').addClass('vivo');
	// $('#34-33').addClass('vivo');
	// $('#34-34').addClass('vivo');
	// $('#34-35').addClass('vivo');
	// $('#34-36').addClass('vivo');
	// $('#33-37').addClass('vivo');
	// $('#31-37').addClass('vivo');
	// ----------------------------------------------- nave
	$('#6-1').addClass('vivo');
	$('#6-2').addClass('vivo');
	$('#7-2').addClass('vivo');
	$('#7-1').addClass('vivo');
	$('#6-8').addClass('vivo');
	$('#5-9').addClass('vivo');
	$('#5-10').addClass('vivo');
	$('#6-10').addClass('vivo');
	$('#6-9').addClass('vivo');
	$('#7-9').addClass('vivo');
	$('#7-10').addClass('vivo');
	$('#4-12').addClass('vivo');
	$('#3-12').addClass('vivo');
	$('#3-13').addClass('vivo');
	$('#4-13').addClass('vivo');
	$('#8-12').addClass('vivo');
	$('#8-13').addClass('vivo');
	$('#9-13').addClass('vivo');
	$('#9-12').addClass('vivo');
	$('#5-16').addClass('vivo');
	$('#5-17').addClass('vivo');
	$('#6-16').addClass('vivo');
	$('#4-18').addClass('vivo');
	$('#7-17').addClass('vivo');
	$('#7-18').addClass('vivo');
	$('#7-19').addClass('vivo');
	$('#7-20').addClass('vivo');
	$('#6-20').addClass('vivo');
	$('#6-19').addClass('vivo');
	$('#7-21').addClass('vivo');
	$('#8-18').addClass('vivo');
	$('#7-23').addClass('vivo');
	$('#7-24').addClass('vivo');
	$('#6-25').addClass('vivo');
	$('#5-26').addClass('vivo');
	$('#4-26').addClass('vivo');
	$('#3-26').addClass('vivo');
	$('#2-25').addClass('vivo');
	$('#1-24').addClass('vivo');
	$('#1-23').addClass('vivo');
	$('#4-35').addClass('vivo');
	$('#4-36').addClass('vivo');
	$('#5-36').addClass('vivo');
	$('#5-35').addClass('vivo');
	// -------------------------------------------
	// $('#7-19').addClass('vivo');
	// $('#8-19').addClass('vivo');
	// $('#9-19').addClass('vivo');
	// $('#8-18').addClass('vivo');
	// $('#8-20').addClass('vivo');
	// ---------------------------------------
	// $('#2-18').addClass('vivo');
	// $('#3-18').addClass('vivo');
	// $('#4-18').addClass('vivo');
	// $('#4-19').addClass('vivo');
	// $('#4-23').addClass('vivo');
	// $('#4-24').addClass('vivo');
	// $('#3-24').addClass('vivo');
	// $('#2-24').addClass('vivo');
	// $('#6-23').addClass('vivo');
	// $('#6-22').addClass('vivo');
	// $('#7-22').addClass('vivo');
	// $('#7-24').addClass('vivo');
	// $('#8-23').addClass('vivo');
	// $('#8-24').addClass('vivo');
	// $('#7-26').addClass('vivo');
	// $('#6-26').addClass('vivo');
	// $('#6-27').addClass('vivo');
	// $('#6-28').addClass('vivo');
	// $('#10-23').addClass('vivo');
	// $('#10-24').addClass('vivo');
	// $('#11-24').addClass('vivo');
	// $('#12-23').addClass('vivo');
	// $('#12-22').addClass('vivo');
	// $('#11-22').addClass('vivo');
	// $('#11-26').addClass('vivo');
	// $('#12-26').addClass('vivo');
	// $('#12-27').addClass('vivo');
	// $('#12-28').addClass('vivo');
	// $('#14-23').addClass('vivo');
	// $('#14-24').addClass('vivo');
	// $('#15-24').addClass('vivo');
	// $('#16-24').addClass('vivo');
	// $('#11-20').addClass('vivo');
	// $('#12-20').addClass('vivo');
	// $('#12-19').addClass('vivo');
	// $('#10-19').addClass('vivo');
	// $('#10-18').addClass('vivo');
	// $('#11-18').addClass('vivo');
	// $('#14-19').addClass('vivo');
	// $('#14-18').addClass('vivo');
	// $('#15-18').addClass('vivo');
	// $('#16-18').addClass('vivo');
	// $('#12-16').addClass('vivo');
	// $('#11-16').addClass('vivo');
	// $('#12-15').addClass('vivo');
	// $('#12-14').addClass('vivo');
	// $('#8-18').addClass('vivo');
	// $('#8-19').addClass('vivo');
	// $('#7-18').addClass('vivo');
	// $('#6-19').addClass('vivo');
	// $('#6-20').addClass('vivo');
	// $('#7-20').addClass('vivo');
	// $('#7-16').addClass('vivo');
	// $('#6-16').addClass('vivo');
	// $('#6-15').addClass('vivo');
	// $('#6-14').addClass('vivo');
	// ---------------------------------------------
	// $('#2-20').addClass('vivo');
	// $('#2-21').addClass('vivo');
	// $('#3-20').addClass('vivo');
	// $('#4-20').addClass('vivo');
	// $('#5-19').addClass('vivo');
	// $('#6-18').addClass('vivo');
	// $('#5-17').addClass('vivo');
	// $('#4-17').addClass('vivo');
	// $('#4-18').addClass('vivo');
	// $('#4-15').addClass('vivo');
	// $('#5-15').addClass('vivo');
	// $('#4-14').addClass('vivo');
	// $('#5-12').addClass('vivo');
	// $('#6-12').addClass('vivo');
	// $('#6-13').addClass('vivo');
	// $('#10-10').addClass('vivo');
	// $('#11-10').addClass('vivo');
	// $('#11-11').addClass('vivo');
	// $('#11-12').addClass('vivo');
	// $('#12-13').addClass('vivo');
	// $('#13-14').addClass('vivo');
	// $('#14-13').addClass('vivo');
	// $('#14-12').addClass('vivo');
	// $('#13-12').addClass('vivo');
	// $('#16-12').addClass('vivo');
	// $('#16-13').addClass('vivo');
	// $('#17-12').addClass('vivo');
	// $('#18-14').addClass('vivo');
	// $('#19-14').addClass('vivo');
	// $('#19-13').addClass('vivo');
	// $('#19-19').addClass('vivo');
	// $('#20-19').addClass('vivo');
	// $('#21-19').addClass('vivo');
	// $('#21-18').addClass('vivo');
	// $('#18-20').addClass('vivo');
	// $('#17-21').addClass('vivo');
	// $('#19-21').addClass('vivo');
	// $('#19-22').addClass('vivo');
	// $('#18-22').addClass('vivo');
	// $('#18-24').addClass('vivo');
	// $('#19-24').addClass('vivo');
	// $('#19-25').addClass('vivo');
	// $('#17-26').addClass('vivo');
	// $('#17-27').addClass('vivo');
	// $('#18-27').addClass('vivo');
	// $('#12-27').addClass('vivo');
	// $('#12-28').addClass('vivo');
	// $('#12-29').addClass('vivo');
	// $('#13-29').addClass('vivo');
	// $('#11-26').addClass('vivo');
	// $('#10-25').addClass('vivo');
	// $('#9-26').addClass('vivo');
	// $('#9-27').addClass('vivo');
	// $('#10-27').addClass('vivo');
	// $('#7-26').addClass('vivo');
	// $('#7-27').addClass('vivo');
	// $('#6-27').addClass('vivo');
	// $('#5-25').addClass('vivo');
	// $('#4-25').addClass('vivo');
	// $('#4-26').addClass('vivo');
	// $('#10-22').addClass('vivo');
	// $('#11-22').addClass('vivo');
	// $('#12-22').addClass('vivo');
	// $('#10-21').addClass('vivo');
	// $('#10-20').addClass('vivo');
	// $('#11-20').addClass('vivo');
	// $('#12-20').addClass('vivo');
	// -----------------------------------------------
	// $('#2-12').addClass('vivo');
	// $('#3-12').addClass('vivo');
	// $('#3-13').addClass('vivo');
	// $('#4-13').addClass('vivo');
	// $('#4-14').addClass('vivo');
	// $('#4-15').addClass('vivo');
	// $('#5-15').addClass('vivo');
	// $('#6-15').addClass('vivo');
	// $('#6-16').addClass('vivo');
	// $('#7-16').addClass('vivo');
	// $('#7-17').addClass('vivo');
	// $('#8-16').addClass('vivo');
	// $('#8-15').addClass('vivo');
	// $('#9-15').addClass('vivo');
	// $('#10-15').addClass('vivo');
	// $('#10-14').addClass('vivo');
	// $('#10-13').addClass('vivo');
	// $('#11-13').addClass('vivo');
	// $('#11-12').addClass('vivo');
	// $('#12-12').addClass('vivo');
	// $('#11-11').addClass('vivo');
	// $('#10-11').addClass('vivo');
	// $('#10-10').addClass('vivo');
	// $('#10-9').addClass('vivo');
	// $('#9-9').addClass('vivo');
	// $('#8-9').addClass('vivo');
	// $('#8-8').addClass('vivo');
	// $('#7-8').addClass('vivo');
	// $('#7-7').addClass('vivo');
	// $('#6-8').addClass('vivo');
	// $('#6-9').addClass('vivo');
	// $('#5-9').addClass('vivo');
	// $('#4-9').addClass('vivo');
	// $('#4-10').addClass('vivo');
	// $('#4-11').addClass('vivo');
	// $('#3-11').addClass('vivo');
	// ---------------------------------
	// $('#16-5').addClass('vivo');
	// $('#16-6').addClass('vivo');
	// $('#16-12').addClass('vivo');
	// $('#16-13').addClass('vivo');
	// $('#17-6').addClass('vivo');
	// $('#18-7').addClass('vivo');
	// $('#19-8').addClass('vivo');
	// $('#20-9').addClass('vivo');
	// $('#19-10').addClass('vivo');
	// $('#18-11').addClass('vivo');
	// $('#17-12').addClass('vivo');
	// $('#19-9').addClass('vivo');
	// $('#18-10').addClass('vivo');
	// $('#17-11').addClass('vivo');
	// $('#17-7').addClass('vivo');
	// $('#18-8').addClass('vivo');
	// $('#19-16').addClass('vivo');
	// $('#19-17').addClass('vivo');
	// $('#20-17').addClass('vivo');
	// $('#20-16').addClass('vivo');
	// $('#18-16').addClass('vivo');
	// $('#18-17').addClass('vivo');
	// $('#16-16').addClass('vivo');
	// $('#16-17').addClass('vivo');
	// $('#15-17').addClass('vivo');
	// $('#15-16').addClass('vivo');
	// $('#16-21').addClass('vivo');
	// $('#17-21').addClass('vivo');
	// $('#18-21').addClass('vivo');
	// $('#19-21').addClass('vivo');
	// $('#20-21').addClass('vivo');
	// $('#16-22').addClass('vivo');
	// $('#16-23').addClass('vivo');
	// $('#17-23').addClass('vivo');
	// $('#18-22').addClass('vivo');
	// $('#19-23').addClass('vivo');
	// $('#20-24').addClass('vivo');
	// $('#18-27').addClass('vivo');
	// $('#18-28').addClass('vivo');
	// $('#19-28').addClass('vivo');
	// $('#19-27').addClass('vivo');
	// $('#20-27').addClass('vivo');
	// $('#20-28').addClass('vivo');
	// $('#16-27').addClass('vivo');
	// $('#16-28').addClass('vivo');
	// $('#15-28').addClass('vivo');
	// $('#15-27').addClass('vivo');
	// ---------------------------------------
	// $('#15-27').addClass('vivo');
	// $('#15-28').addClass('vivo');
	// $('#16-28').addClass('vivo');
	// $('#16-27').addClass('vivo');
	// $('#19-27').addClass('vivo');
	// $('#21-27').addClass('vivo');
	// $('#20-26').addClass('vivo');
	// $('#20-25').addClass('vivo');
	// $('#20-28').addClass('vivo');
	// $('#20-29').addClass('vivo');
};

var empezarSimulacion = function()
{
	if (empezar) {
		for(var x = 0; x < numeroRecuadros; x++)
		{
			for(var j = 0; j < numeroRecuadros - 1; j++)
			{
				evaluarEstado(x, j);
			}
		}
		$('div').removeClass('vivo');
		cargaValoresNuevos();
	};
};

var cargaValoresNuevos = function()
{
	for(var y = 0; y < contadorPosicion; y++)
	{
		// alert(array[y]);
		$(array[y]).addClass('vivo');
	}
	contadorPosicion = 0;
}

var simulacion = setInterval('iniciar()',100);

var iniciar = function()
{
	empezarSimulacion();
	cargarColores();
	$('.recuadro').css({'background': cuadroInactivo, 'border':'solid 1px rgba(255,255,255,0.2)'});
	$('.vivo').css({'background': cuadroActivo, 'border':'solid 1px rgba(0,0,0,0.2)'});
}


var evaluarEstado = function(x, j)
{
	var contadorVivos = 0;
	if ($('#' + (x + 1) + '-' + j).hasClass('vivo')) {contadorVivos++;}
	if ($('#' + (x + 1) + '-' + (j - 1)).hasClass('vivo')) {contadorVivos++;}
	if ($('#' + x + '-' + (j - 1)).hasClass('vivo')) {contadorVivos++;}
	if ($('#' + (x - 1) + '-' + (j - 1)).hasClass('vivo')) {contadorVivos++;}
	if ($('#' + (x - 1) + '-' + j).hasClass('vivo')) {contadorVivos++;}
	if ($('#' + (x - 1) + '-' + (j + 1)).hasClass('vivo')) {contadorVivos++;}
	if ($('#' + x + '-' + (j + 1)).hasClass('vivo')) {contadorVivos++;}
	if ($('#' + (x + 1) + '-' + (j + 1)).hasClass('vivo')) {contadorVivos++;}
	if (contadorVivos == 3) {
		array[contadorPosicion] = '#' + x + '-' + j;
		contadorPosicion++;
		// alert("primera condicional " + contadorPosicion);
	};
	if (contadorVivos == 2 && $('#' + x + '-' + j).hasClass('vivo')){
		array[contadorPosicion] = '#' + x + '-' + j;
		contadorPosicion++;
		// alert("segunda condicional " + contadorPosicion);
	};
		// alert("ninguna condicional " + contadorPosicion);
		// alert(contadorVivos);
};

var crearTablero = function()
{
	$('.contenedorRecuadros').empty();
	for(var x = 0; x < numeroRecuadros; x++)
	{
		for(var j = 0; j < numeroRecuadros - 1; j++)
		{
			$('.contenedorRecuadros').append('<div id="' + x + '-' + j + '" class="recuadro"></div>');
		}
		$('.contenedorRecuadros').append('<div id="' + x + '-' + j + '" class="' + x + '-' + j + ' recuadro"></div>');
	}
};