<?php
$conn = new mysqli('localhost:3308', 'root', '', 'constructor');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>