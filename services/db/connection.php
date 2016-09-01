<?php
$server = "localhost";
//$user = "keruadwr_extlp";
$user = "root";
//$pass = "Welcome1J!";
$pass = "welcome1";
//$dbName = "keruadwr_extlp";
$dbName = "lpjkng";
$conn = mysqli_connect($server, $user, $pass);
mysqli_select_db($conn, $dbName);
/* check connection */
if ($conn == false) {
	printf("Connect failed: %s\n", mysql_error($conn));
	exit();
}
?>