<?php
$server = "localhost";
//$user = "keruadwr_extlp";
$user = "root";
//$pass = "Welcome1J!";
$pass = "";
//$dbName = "keruadwr_extlp";
$dbName = "lpjkng";
$conn = mysql_connect($server, $user, $pass);
mysql_select_db($dbName);
/* check connection */
if ($conn == false) {
	printf("Connect failed: %s\n", mysql_error($conn));
	exit();
}
?>