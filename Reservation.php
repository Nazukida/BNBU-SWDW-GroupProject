<?php
session_start();
// include 'connectDataBaseLocalhost.php';
include 'connectDataBase.php';

if (!isset($_SESSION['user'])) {
    echo '<html><body>';
    echo '<p>please login first</p>';
    echo '<a href="loginRegForm.html">Go to login page</a>';
    echo '</body></html>';
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['selectedCity'])) {
    $selectedCity = $_POST['selectedCity'];
    $username = $_SESSION['user'];
    
    $stmt = $conn->prepare("UPDATE touristmem SET city = ? WHERE username = ?");
    $stmt->bind_param("ss", $selectedCity, $username);
    
    if ($stmt->execute()) {
        echo '<html><body>';
        echo '<p>update successfully</p>';
        echo '<a href="hometowns.html">Go to hometowns page</a>';
        echo '</body></html>';
    } else {
        echo '<html><body>';
        echo '<p>update failed: '. $conn->error.'</p>';
        echo '<a href="hometowns.html">Go to hometowns page</a>';
        echo '</body></html>';
    }
    
    $stmt->close();
} else {
    echo '<html><body>';
    echo '<p>invalid request</p>';
    echo '<a href="hometowns.html">Go to hometowns page</a>';
    echo '</body></html>';
}

$conn->close();
?>
