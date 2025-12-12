<?php
header('Content-Type: text/plain');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$input = file_get_contents('php://input');
file_put_contents('../tabs.json', $input);  // зберігає в корінь
echo "saved successfully";
?>