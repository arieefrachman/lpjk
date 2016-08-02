<?php
require('../db/connection.php');

$q = mysql_query("select c_jnsbu_id, c_jnsbu_nama from tbl_jnsbu");

while($row = mysql_fetch_assoc($q)){
    $hasil[] = $row;
}

echo json_encode($hasil);
?>