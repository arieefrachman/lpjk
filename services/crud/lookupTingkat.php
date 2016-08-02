<?php
require('../db/connection.php');


$q = mysql_query("select c_kuaprof_id, c_kuaprof_ahli, c_kuaprof_trampil from tbl_kuaprof");

while($row = mysql_fetch_array($q)){
    $data[] = $row;
}

echo json_encode($data);
?>