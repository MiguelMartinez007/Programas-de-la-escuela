<?php 

	session_start();

	$mensaje = $_POST["mensaje"];
	$destinatario = $_POST["destinatario"];

	$remitente = $_SESSION["nombre"];

	if ($mensaje != "" && $destinatario != "") {

		$mesEspañol = "Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre";
		$arregloMesEspañol = explode(' ', $mesEspañol);

		$dia = date('d');
		$mesNumerico = date('n');
		$mes = $arregloMesEspañol[$mesNumerico - 1];
		$ano = date('Y');
		$hora = date('g:i:s a');

		$fecha = $dia . ' de ' . $mes . ' del ' . $ano . ' a las ' . $hora;
		
		include('conexion.php');

		$sentencia = "INSERT INTO chat (remitente_fk,destinatario_fk,direccionMsg,fecha) VALUES('" . $remitente . "', '" . $destinatario . "','" . $mensaje . "','" . $fecha . "')";

		$query = mysql_query($sentencia, $conexion);

		mysql_close($conexion);
		echo "Muy bien";

	}

 ?>