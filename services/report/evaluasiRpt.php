<?php
/**
 * Created by PhpStorm.
 * User: oracle
 * Date: 7/9/16
 * Time: 1:15 PM
 */
require("../lib/tcpdf.php");
require ("../db/connection.php");
$evalid = $_GET['c_evalbu_id'];

$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Nicola Asuni');
$pdf->SetTitle('TCPDF Example 001');
$pdf->SetSubject('TCPDF Tutorial');
$pdf->SetKeywords('TCPDF, PDF, example, test, guide');
$pdf->AddPage('L','A4');
$html = '<h3>Badan Usaha</h3>
<table border="1" cellpadding="2">
    <tr>
        <th>Nama Badan Usaha</th>
        <th>Kekayaan Bersih</th>
    </tr>';

$q = mysql_query("select c_evalbu_id, c_bu_nama, c_evalbu_kb  from tbl_evalbu e JOIN tbl_bu b ON (e.c_bu_id = b.c_bu_id)  where e.c_evalbu_id=".$evalid);
while($data = mysql_fetch_assoc($q)) {
    $html .= '<tr>
        <td>'.$data['c_bu_nama'].'</td>
        <td>'.$data['c_evalbu_kb'].'</td>
    </tr>';

    $evalbuid = $data['c_evalbu_id'];
}

$html.= '</table>';


$pdf->writeHTML($html, true, false, true, false, '');

$qa = mysql_query("select da.c_da_nama,da.c_da_status, da.c_da_ska, da.c_da_sktk 
from tbl_detail_ahli da join tbl_evalbu eb on(da.c_evalbu_id=eb.c_evalbu_id) where eb.c_evalbu_id=".$evalbuid);

$html ='<h3>Detail Ahli</h3>
<table border="1" cellpadding="2">
            <tr>
                <th rowspan="2">Nama</th>
                <th rowspan="2">Status</th>
                <th colspan="2">Masa Berlaku</th>
            </tr>
            <tr>
                <th>SKA</th>
                <th>SKTK</th>
            </tr>';

while($datas = mysql_fetch_assoc($qa)){
$html .= '<tr>
            <td>'.$datas['c_da_nama'].'</td>
            <td>'.$datas['c_da_status'].'</td>
            <td>'.$datas['c_da_ska'].'</td>
            <td>'.$datas['c_da_sktk'].'</td>
          </tr>';
}


$html.='</table>';


$pdf->writeHTML($html, true, false, true, false, '');


$qe = mysql_query("SELECT de.c_de_kskkso, de.c_de_nkpk, de.c_de_thnkontrak,de.c_de_klasifikasi_d, de.c_de_subkla_d, de.c_de_subkua_d, de.c_de_klasifikasi_e, de.c_de_subkla_e, de.c_de_subkua_e
FROM tbl_detail_evaluasi de JOIN tbl_evalbu eb ON(de.c_evalbu_id=eb.c_evalbu_id) where eb.c_evalbu_id=".$evalbuid);

$html ='<h3>Detail Evaluasi</h3>
<table border="1" cellpadding="2">
            <tr>
                <th rowspan="2">K/SK/KSO</th>
                <th rowspan="2">NKPK</th>
                <th rowspan="2">Kontrak</th>
                <th colspan="3">Dimohon</th>
                <th colspan="3">Dimohon</th>
            </tr>
            <tr>
                <th>Klasifikasi</th>
                <th>Sub Klasifikasi</th>
                <th>Sub Kuaslifikasi</th>
                <th>Klasifikasi</th>
                <th>Sub Klasifikasi</th>
                <th>Sub Kuaslifikasi</th>
            </tr>';

while($datae = mysql_fetch_assoc($qe)){
    $html .= '<tr>
            <td>'.$datae['c_de_kskkso'].'</td>
            <td>'.$datae['c_de_nkpk'].'</td>
            <td>'.$datae['c_de_thnkontrak'].'</td>
            <td>'.$datae['c_de_klasifikasi_d'].'</td>
            <td>'.$datae['c_de_subkla_d'].'</td>
            <td>'.$datae['c_de_subkua_d'].'</td>
            <td>'.$datae['c_de_klasifikasi_e'].'</td>
            <td>'.$datae['c_de_subkla_e'].'</td>
            <td>'.$datae['c_de_subkua_d'].'</td>
          </tr>';
}


$html.='</table>';


$pdf->writeHTML($html, true, false, true, false, '');


$pdf->Output('example_001.pdf', 'I');
?>

