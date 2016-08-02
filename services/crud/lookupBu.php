<?php
	require('../db/connection.php');

	$q = mysql_query("select c_bu_id, c_bu_nama from tbl_bu");

	while($row = mysql_fetch_assoc($q)){
		$hasil[] = $row;
	}

	echo json_encode($hasil);
?>