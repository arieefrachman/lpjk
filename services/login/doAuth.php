<?php 
require("../db/connection.php"); // #1
session_start(); // #3
$userName = $_POST['user']; // #4
$pass = $_POST['password']; // #5

$sql = mysql_query("SELECT * FROM USER WHERE userName='$userName' and password = '$pass'");

$data = mysql_fetch_array($sql);
if($data > 0){
	
	$_SESSION['is_auth']  = 'yes';
	$_SESSION['username'] = $data['userName'];

	$result['success'] = true; //#17
	$result['msg'] = 'User authenticated!';
	

}else{
	$result['success'] = false; //#17
	$result['msg'] = 'User not authenticated!';
	
}

mysql_close($conn);

echo json_encode($result);

 // #9


?>