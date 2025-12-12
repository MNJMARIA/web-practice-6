<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
// Повертаємо демо-таби
echo json_encode([
    ["title" => "Демо-вкладка 1", "content" => "Це демонстраційний контент."],
    ["title" => "Демо-вкладка 2", "content" => "Дані не зберігаються постійно."]
]);
?>