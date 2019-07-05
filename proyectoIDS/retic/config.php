<?php
    @session_start();
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'reticula';

    // mysqli_connect($host, $user, $pass, $db);
    mysql_connect($host,$user,$pass) or die(mysql_error());
    mysql_select_db($db);

?>