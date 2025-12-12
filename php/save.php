<?php
header('Content-Type: text/plain');
$input = file_get_contents('php://input');
file_put_contents('tabs.json', $input);
echo "saved";
?>