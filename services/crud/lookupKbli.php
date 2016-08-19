<?php
require('../db/connection.php');

$q = mysql_query("select c_kbli_id, c_kbli_nama from tbl_kbli");

while($row = mysql_fetch_assoc($q)){
    $hasil[] = $row;
}

echo json_encode($hasil);
?>