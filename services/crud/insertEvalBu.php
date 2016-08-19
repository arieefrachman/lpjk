<?php 
require('../db/connection.php');

$namabu  = $_POST['namabu'];
$kb      = $_POST['kb'];
$ms      = $_POST['ms'];

$noktp   = $_POST['noktp'];
$bpju    = $_POST['bpju'];
$jnsbu   = $_POST['jnsbu'];
$assoc   = $_POST['assoc'];

$nonpwp  = $_POST['nonpwp'];
$kbli    = $_POST['kbli'];
$ket     = $_POST['ket'];


$detAhli = json_decode($_POST['detAhli']);
$detEval = json_decode($_POST['detEval']);

$kb = isset($kb)?$kb:0;
$ms = isset($ms)?$ms:0;

foreach ($detAhli as $data) {
	$date = new DateTime($data->c_da_ska);
	echo $date->format('Y-m-d');
}


	$q_bu = mysql_query("insert into tbl_evalbu(
										c_bu_id,
										c_evalbu_kb,
										c_evalbu_ms,
										c_evalbu_noktp,
										c_evalbu_bpju,
										c_evalbu_jenisbu,
										c_assoc_id,
										c_evalbu_nonpwp,
										c_evalbu_ket,
										c_kbli_id) 
						values			(
										'".$namabu."',
										".$kb.",
										".$ms.",
										'".$noktp."',
										'".$bpju."',
										".$jnsbu.",
										'".$assoc."',
										'".$nonpwp."',
										'".$ket."',
										".$kbli.")
										");

$max_evalbu_id = mysql_fetch_array(mysql_query("select max(c_evalbu_id) c_evalbu_id from tbl_evalbu"));

foreach ($detAhli as $data) {
	$date_ska  = new DateTime($data->c_da_ska);
	$date_sktk = new DateTime($data->c_da_sktk);
    $q_ahli = mysql_query("INSERT INTO tbl_detail_ahli(c_evalbu_id,c_da_nama,c_da_status,c_da_sub,c_assoc_id,c_da_noreg,c_da_tingkat,c_da_ska,c_da_sktk,c_da_noktp)
        values(".$max_evalbu_id[0].",
              '".$data->c_da_nama."',
              '".$data->c_da_status."',
              '".$data->c_da_sub."',
              '".$data->c_assoc_id."',
              '".$data->c_da_noreg."',
              '".$data->c_da_tingkat."',
              '".$date_ska->format('Y-m-d')."',
              '".$date_sktk->format('Y-m-d')."',
              '".$data->c_da_noktp."')");
}

foreach($detEval as $data){
    $q_eval = mysql_query("INSERT INTO tbl_detail_evaluasi(c_evalbu_id,
														   c_de_kskkso,
														   c_de_nkpk,
														   c_de_thnkontrak,														  
														   c_de_klasifikasi_e,
														   c_de_subkla_e,
														   c_de_subkua_e)
        values(".$max_evalbu_id[0].",
              '".$data->c_de_kskkso."',
              '".$data->c_de_nkpk."',
              '".$data->c_de_thnkontrak."',
              '".$data->c_de_klasifikasi_e."',
              '".$data->c_de_subkla_e."',
              '".$data->c_de_subkua_e."')");


	echo "INSERT INTO tbl_detail_evaluasi(c_evalbu_id,
														   c_de_kskkso,
														   c_de_nkpk,
														   c_de_thnkontrak,														  
														   c_de_klasifikasi_e,
														   c_de_subkla_e,
														   c_de_subkua_e)
        values(".$max_evalbu_id[0].",
              '".$data->c_de_kskkso."',
              '".$data->c_de_nkpk."',
              '".$data->c_de_thnkontrak."',
              '".$data->c_de_klasifikasi_e."',
              '".$data->c_de_subkla_e."',
              '".$data->c_de_subkua_e."')";


}

	echo mysql_error($conn);
?>