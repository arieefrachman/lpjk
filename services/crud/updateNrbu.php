<?php
require('../db/connection.php');

$evalbu_id = $_POST['c_evalbu_id'];
$nrbu      = $_POST['c_evalbu_nrbu'];

$sql = mysql_query("UPDATE tbl_evalbu SET c_evalbu_nrbu='".$nrbu."' WHERE c_evalbu_id = ".$evalbu_id);

echo mysql_error($conn);

?>