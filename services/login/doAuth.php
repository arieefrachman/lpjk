<?php 
require("../db/connection.php"); // #1
session_start(); // #3
$userName = $_POST['user']; // #4
$pass = $_POST['password']; // #5

$sql = mysqli_query($conn,"SELECT * FROM users WHERE userName='$userName' and password = '$pass'");

$data = mysqli_fetch_array($sql,MYSQLI_NUM);
if($data > 0){


	$result['success'] = true; //#17
	$result['msg'] = 'User authenticated!';
	

}else{
	$result['success'] = false; //#17
	$result['msg'] = 'User not authenticated!';
	
}

mysqli_close($conn);

echo json_encode($result);

 // #9


?>