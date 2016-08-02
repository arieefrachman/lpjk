<?php
	require('../db/connection.php');

	$sql = mysql_query("select * from tbl_bu");

	$data = [];

	while($row = mysql_fetch_assoc($sql)){
		$hasil[] = $row;
	}
	
	echo json_encode($hasil)
?>