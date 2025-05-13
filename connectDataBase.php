<?php
$servername = "stuweb.bcrab.cn";
$username = "1002pair54";
$password = "O4F1jPz8O";
$db = "1002pair54";

$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";
?>