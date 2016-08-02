<?php
	require('../db/connection.php');

	$sql = mysql_query("select c_evalbu_id, c_bu_nama, c_evalbu_kb from tbl_evalbu eb join tbl_bu bu on(bu.c_bu_id = eb.c_bu_id);");

	while($row = mysql_fetch_assoc($sql)){
		$hasil[] = $row;
	}
	
	echo json_encode($hasil)
?>