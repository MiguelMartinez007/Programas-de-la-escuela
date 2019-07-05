<?php 

	$paginaSol = $_POST["paginaSol"];

	switch ($paginaSol) {
		case 'login':
			return include('login.php');
			break;
		case 'actualizarMateria':
			return include('actualizarMateria.php');
			break;
		case 'actualizarTabla':
			return include('actualizarTabla.php');
			break;
		default:
			return "";
			break;
	}
	
?>