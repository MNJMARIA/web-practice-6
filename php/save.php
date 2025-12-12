<?php
header('Content-Type: text/plain');
header('Access-Control-Allow-Origin: *'); // Дозволити запити з будь-якого домену
$input = file_get_contents('php://input');
// Замість запису у файл, просто повертаємо успіх
echo "saved (demo mode)";
?>