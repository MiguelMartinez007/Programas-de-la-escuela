	var comprobarRespuesta = function(id) {
		var nombreFormulario = id;
		var resultado1,resultado2,resultado3,resultado4;
		
		if ($('form.'+nombreFormulario+' .uno').is(':checked')) {
			resultado1 = $('form.'+nombreFormulario+' input.uno').attr('value');
		}else if ($('form.'+nombreFormulario+' .dos').is(':checked')) {
			resultado2 = $('form.'+nombreFormulario+' input.dos').attr('value');
		}else if ($('form.'+nombreFormulario+' .tres').is(':checked')) {
			resultado3 = $('form.'+nombreFormulario+' input.tres').attr('value');
		}else if ($('form.'+nombreFormulario+' .cuatro').is(':checked')) {
			resultado4 = $('form.'+nombreFormulario+' input.cuatro').attr('value');
		};
		// alert(resultado1+ " "+resultado2+ " "+resultado3+ " "+resultado4);

		var correcto = false;
		$.post('php/resultados.php', {nombre: nombreFormulario}, function(resultados) {
			if (resultado1 == resultados) {
				correcto = true;
			}else if (resultado2 == resultados) {
				correcto = true;
			}else if (resultado3 == resultados) {
				correcto = true;
			}else if (resultado4 == resultados) {
				correcto = true;
			}

			if (correcto == true) {
				$('form.'+nombreFormulario+' div.errorRespuesta').html('Correcto!');
			}else
			{
				$('form.'+nombreFormulario+' div.errorRespuesta').html('Incorrecto! la respuesta correcta es: '+resultados);
			}
		});
	};