<?php
/**
 * Created by PhpStorm.
 * User: oracle
 * Date: 7/9/16
 * Time: 1:15 PM
 */
require ("../db/connection.php");
$evalid = $_GET['c_evalbu_id'];

include '../lib/PHPExcel.php';
include '../lib/PHPExcel/IOFactory.php';

/** PHPExcel_Writer_Excel2007 */
include '../lib/PHPExcel/Writer/Excel2007.php';

$objPHPExcel = new PHPExcel;
// set default font
$objPHPExcel->getDefaultStyle()->getFont()->setName('Calibri');
// set default font size
$objPHPExcel->getDefaultStyle()->getFont()->setSize(8);
// create the writer
$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, "Excel2007");

/**
 * Define currency and number format.
 */
// currency format, € with < 0 being in red color
$currencyFormat = '#,#0.## \€;[Red]-#,#0.## \€';
// number format, with thousands separator and two decimal points.
$numberFormat = '#,#0.##;[Red]-#,#0.##';

// writer already created the first sheet for us, let's get it
$objSheet = $objPHPExcel->getActiveSheet();
// rename the sheet
$objSheet->setTitle('Laporan');

// let's bold and size the header font and write the header
// as you can see, we can specify a range of cells, like here: cells from A1 to A4
$objSheet->getStyle('A1:D1')->getFont()->setBold(true)->setSize(12);

// write header
$objPHPExcel->getActiveSheet()->mergeCells('A1:C1');
$objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(30);
$objSheet->getCell('A1')->setValue('Nama Badan Usaha');

$objPHPExcel->getActiveSheet()->mergeCells('D1:F1');
$objPHPExcel->getActiveSheet()->getColumnDimension('D')->setWidth(30);
$objSheet->getCell('D1')->setValue('Kekayaan Bersih');

$sql = mysql_query("SELECT bu.c_bu_nama, eb.c_evalbu_kb
FROM tbl_evalbu eb JOIN tbl_bu bu ON (bu.c_bu_id = eb.c_bu_id)
WHERE eb.c_evalbu_id =".$evalid);
$data = mysql_fetch_array($sql);
$objPHPExcel->getActiveSheet()->mergeCells('A2:C2');
$objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(30);
$objSheet->getCell('A2')->setValue($data[0]);

$objPHPExcel->getActiveSheet()->mergeCells('D2:F2');
$objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(30);
$objSheet->getCell('D2')->setValue($data[1]);


$objSheet->getStyle('A1:F5')->getBorders()->
getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);


$objPHPExcel->getActiveSheet()->mergeCells('A3:F3');
$objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(30);
$objSheet->getCell('A3')->setValue('Ahli');
$objSheet->getStyle('A3:F3')->getFont()->setBold(true)->setSize(12);


$objPHPExcel->getActiveSheet()->mergeCells('A4:A5');
$objSheet->getCell('A4')->setValue('Nama');

$objPHPExcel->getActiveSheet()->mergeCells('B4:C5');
$objSheet->getCell('B4')->setValue('Status');


$objPHPExcel->getActiveSheet()->mergeCells('D4:F4');
$objSheet->getCell('D4')->setValue('Masa Berlaku');

$objSheet->getCell('D5')->setValue('SKA');

$objPHPExcel->getActiveSheet()->mergeCells('E5:F5');
$objSheet->getCell('E5')->setValue('SKTK');

$i = 6;
$q = mysql_query("SELECT c_da_nama, c_da_status, c_da_ska, c_da_sktk
                  FROM tbl_detail_ahli
                  WHERE c_evalbu_id=".$evalid);

while ($ahli = mysql_fetch_array($q)){
    $objSheet->getStyle('A'.$i.':F'.$i)->getBorders()->
    getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);

    $objSheet->getCell('A'.$i)->setValue($ahli[0]);

    $objPHPExcel->getActiveSheet()->mergeCells('B'.$i.':C'.$i);
    $objSheet->getCell('B'.$i)->setValue($ahli[1]);
    $objSheet->getCell('D'.$i)->setValue($ahli[2]);

    $objPHPExcel->getActiveSheet()->mergeCells('E'.$i.':F'.$i);
    $objSheet->getCell('E'.$i)->setValue($ahli[3]);
    $i++;
}

$j = $i;

$objSheet->getCell('A'.$j)->setValue('Evaluasi');
$objSheet->getStyle('A'.$j)->getFont()->setBold(true)->setSize(12);
$qe = mysql_query("");
/*
$objPHPExcel->getActiveSheet()->mergeCells('A4:C3');
$objSheet->getCell('A4')->setValue('Nama');
$objSheet->getStyle('A4:F4')->getFont()->setBold(true)->setSize(12);
*/

// bold and resize the font of the last row
//$objSheet->getStyle('A5:D5')->getFont()->setBold(true)->setSize(12);

// set number and currency format to columns
/*$objSheet->getStyle('B2:B5')->getNumberFormat()->setFormatCode($numberFormat);
$objSheet->getStyle('C2:D5')->getNumberFormat()->setFormatCode($currencyFormat);

// create some borders
// first, create the whole grid around the table
$objSheet->getStyle('A1:D5')->getBorders()->
getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
// create medium border around the table
$objSheet->getStyle('A1:D5')->getBorders()->
getOutline()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
// create a double border above total line
$objSheet->getStyle('A5:D5')->getBorders()->
getTop()->setBorderStyle(PHPExcel_Style_Border::BORDER_DOUBLE);
// create a medium border on the header line
$objSheet->getStyle('A1:D1')->getBorders()->
getBottom()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
*/
// autosize the columns
/*$objSheet->getColumnDimension('A')->setAutoSize(true);
$objSheet->getColumnDimension('B')->setAutoSize(true);
$objSheet->getColumnDimension('C')->setAutoSize(true);
$objSheet->getColumnDimension('D')->setAutoSize(true);
*/
header('Content-type: application/vnd.ms-excel');

// It will be called file.xls
header('Content-Disposition: attachment; filename="file.xlsx"');


// write the file
$objWriter->save('php://output');
?>