<?php
session_start();
include 'connectDataBaseLocalhost.php';

if (!isset($_SESSION['user'])) {
    echo "<script>alert('please login first');window.location.href='loginRegForm.html';</script>";
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['selectedCity'])) {
    $selectedCity = $_POST['selectedCity'];
    $username = $_SESSION['user'];
    
    $stmt = $conn->prepare("UPDATE touristmem SET city = ? WHERE username = ?");
    $stmt->bind_param("ss", $selectedCity, $username);
    
    if ($stmt->execute()) {
        echo 'update successfully';
    } else {
        echo 'update failed' . $conn->error;
    }
    
    $stmt->close();
} else {
    echo 'invalid request';
}

$conn->close();
?>