<?php
require('../db/connection.php');

$q = mysql_query("select c_assoc_id, c_assoc_nama from tbl_asosiasi");

while($row = mysql_fetch_assoc($q)){
    $hasil[] = $row;
}

echo json_encode($hasil);
?>