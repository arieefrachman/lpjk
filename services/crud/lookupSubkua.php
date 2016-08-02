<?php
require('../db/connection.php');

$q = mysql_query("select c_subkuakbli_id,c_subkuakbli_kode from tbl_subkuakbli");

while($row = mysql_fetch_assoc($q)){
    $hasil[] = $row;
}

echo json_encode($hasil);
?>