<?php 
require('../db/connection.php');

$namabu = $_POST['namabu'];
$kb = $_POST['kb'];
$ms = $_POST['ms'];
$detAhli = json_decode($_POST['detAhli']);
$detEval = json_decode($_POST['detEval']);


	$q_bu = mysql_query("insert into tbl_evalbu(c_bu_id,c_evalbu_kb,c_evalbu_ms) values('".$namabu."',".$kb.",".$ms.")");

	$max_evalbu_id = mysql_fetch_array(mysql_query("select max(c_evalbu_id) c_evalbu_id from tbl_evalbu"));

	foreach ($detAhli as $data) {
		$q_ahli = mysql_query("INSERT INTO tbl_detail_ahli(c_evalbu_id,c_da_nama,c_da_status,c_da_sub,c_assoc_id,c_da_noreg,c_da_tingkat,c_da_ska,c_da_sktk) 
			values(".$max_evalbu_id[0].",
				  '".$data->c_da_nama."',
				  '".$data->c_da_status."',
				  '".$data->c_da_sub."',
				   ".$data->c_assoc_id.",
				  '".$data->c_da_noreg."',
				  '".$data->c_da_tingkat."',
				  '".$data->c_da_ska."',
				  '".$data->c_da_sktk."')");
	}

	foreach($detEval as $data){
		$q_eval = mysql_query("INSERT INTO tbl_detail_evaluasi(c_evalbu_id,c_de_kskkso,c_de_nkpk,c_de_thnkontrak,c_de_klasifikasi_d,c_de_subkla_d,c_de_subkua_d,c_de_klasifikasi_e,c_de_subkla_e,c_de_subkua_e) 
			values(".$max_evalbu_id[0].",
				  '".$data->c_de_kskkso."',
				  '".$data->c_de_nkpk."',
				  '".$data->c_de_thnkontrak."',
				  '".$data->c_de_klasifikasi_d."',
				  '".$data->c_de_subkla_d."',
				  '".$data->c_de_subkua_d."',
				  '".$data->c_de_klasifikasi_e."',
				  '".$data->c_de_subkla_e."',
				  '".$data->c_de_subkua_e."')");
	}

	echo mysql_error($conn);
?>