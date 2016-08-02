<?php
require('../db/connection.php');

$q = mysql_query("select c_klakbli_id, c_klakbli_desc from tbl_klakbli");

while($row = mysql_fetch_assoc($q)){
    $hasil[] = $row;
}

echo json_encode($hasil);
?>