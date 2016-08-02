<?php
require('menuFunction.php');
session_start();

$userName = 'loiane';

$permissions = retrievePermission($userName);
$modules = retrieveModules($permissions);
$result = retrieveMenuOptions($modules, $permissions);

echo json_encode(array(
    "data" => $result
));
?>