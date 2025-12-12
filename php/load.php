<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$file = 'tabs.json';
if (file_exists($file) && filesize($file) > 0) {
    echo file_get_contents($file);
} else {
    // Якщо файл порожній або немає — демо-таби
    echo json_encode([
        ["title" => "Демо-вкладка 1", "content" => "Це демонстраційний контент."],
        ["title" => "Демо-вкладка 2", "content" => "Дані зберігаються в файлі!"]
    ]);
}
?>