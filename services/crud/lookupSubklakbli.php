<?php
require('../db/connection.php');

$q = mysql_query("select c_subklakbli_id,c_klakbli_id from tbl_subklakbli");

while($row = mysql_fetch_assoc($q)){
    $hasil[] = $row;
}

echo json_encode($hasil);
?>