<?php
header('Content-Type: text/plain');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

//Асинхронне збереження на сервер
$input = file_get_contents('php://input');
// Зберігаємо в корені сайту (де всі HTML)
file_put_contents('tabs.json', $input);
echo "saved successfully";
?>