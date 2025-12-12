<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
if (file_exists('../tabs.json')) {
    echo file_get_contents('../tabs.json');
} else {
    echo json_encode([]);
}
?>