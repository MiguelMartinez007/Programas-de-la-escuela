$(document).ready(function(){
	var formulario = document.formulario_registro;
	var elementos = formulario.elements;

	// Metodos
	$('.inputGroup input').blur(function()
	{
		var nombre = $(this).attr('name');
		validarInputs(nombre);
	});

	$('.inputGroup input[type="submit"]').submit(function(e) {
		validarInputs("1");
		// e.preventDefault();
	});

	$('.inputGroup input').focus(function() {
		if ($(this).attr('type') == "text" || $(this).attr('type') == "password") {
			$(this).siblings('label').addClass('active');
		};
	});

	// Funciones
	var validarInputs = function(nombre){
		for (var i = 0; i < elementos.length; i++)
		{
			if ((elementos[i].type == "text" || elementos[i].type == "password") && (elementos[i].name == nombre || nombre == "1")) 
			{
				if (elementos[i].value == 0) {
					elementos[i].parentElement.className = "inputGroup error";
					$(elementos[i]).siblings('label').removeClass('active');
					if (nombre != "1") {
						break;
					};
				}else
				{
					elementos[i].parentElement.className = "inputGroup";
				}
			}
			if (elementos[i].type == "radio") {
				if (elementos[i].value == 0) {
					elementos[i].parentElement.className = "inputGroup radio error";
					if (nombre != "1") {
						break;
					};
				}else
				{
					elementos[i].parentElement.className = "inputGroup radio";
				}
			};
			if (elementos[i].type == "checkbox") {
				if (elementos[i].value == 0) {
					elementos[i].parentElement.className = "inputGroup checkbox error";
					if (nombre != "1") {
						break;
					};
				}else
				{
					elementos[i].parentElement.className = "inputGroup checkbox";
				}
			};
		}
	}
});