<?php 

	session_destroy();
	$_SESSION["accesoDenegado"] = true;
	header("Location:Login.php");

?>