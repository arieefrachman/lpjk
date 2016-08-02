<?php
require('../db/connection.php');

$sql = mysql_query("SELECT eb.c_evalbu_id, eb.c_evalbu_nrbu, bu.c_bu_nama
FROM tbl_bu bu JOIN tbl_evalbu eb ON eb.c_bu_id = bu.c_bu_id
WHERE eb.c_evalbu_nrbu IS NULL");

while($row = mysql_fetch_assoc($sql)){
    $hasil[] = $row;
}
echo json_encode($hasil);
?>