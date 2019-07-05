$(document).ready(function(){
	// Metodos
	$('body').delegate('.inputGroup input','blur', function()
	{
		// var nombreFormulario = $(this).parent().parent();
		validarInput($(this));
	});

	$('body').delegate('.inputGroup input','focus', function() {
		if ($(this).attr('type') == "text" || $(this).attr('type') == "password") {
			$(this).siblings('label').addClass('active');
		};
	});

	$('body').delegate('.validarInputs','click',function() {
		objetos();
	});


	$('body').delegate('.materias .edit','click',function() {
		materiaModificada = $(this);
		var materia = $(this).children('h4').text();
		var idmateria = $(this).attr("id");
		var clave = $(this).children('p.control').text();
		var estado = "";
		if ($(this).hasClass('V')) estado = "aprobada";
		if ($(this).hasClass('A')) estado = "enCurso";
		if ($(this).hasClass('R')) estado = "reprobada";
		if ($(this).hasClass('M')) estado = "recursando";

		nuevoContenido('.capaMagica',actualizarMateria);
		$('.inputGroup #nombreMateria').text(materia);
		$('.inputGroup #nombreMateria').attr("name",idmateria);
		$('.inputGroup #NoControl').text(clave);
		$('.inputGroup #' + estado).attr('checked','true');
		objetos();
		$('.capaMagica').animate({'top':'0%'});
	});

	// Funciones
	var objetos = function()
	{
		objeto = $('.inputGroup:eq(0) input');
		validarInput(objeto);
		objeto = $('.inputGroup:eq(1) input');
		validarInput(objeto);
		objeto = $('.inputGroup:eq(2) input');
		validarInput(objeto);
	}

	var validarInput = function(objeto)
	{
		var tipo = objeto.attr('type');
		if ((tipo == "text" || tipo == "password")) 
		{
			if (objeto.val() == "") {
				objeto.parent().addClass("error");
				objeto.siblings('label').removeClass('active');
			}else
			{
				objeto.parent().removeClass("error");
				objeto.parent().addClass("inputGroup");
				objeto.siblings('label').addClass('active');
			}
		}
	}
});