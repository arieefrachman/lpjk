<?php
	require('../db/connection.php');
	$id_evalbu = $_GET['evalbu_id'];
	$sql = mysql_query("select * from tbl_detail_evaluasi where c_evalbu_id = $id_evalbu");

	while($row = mysql_fetch_assoc($sql)){
		$data[] = $row;
	}

	echo json_encode($data);
?>