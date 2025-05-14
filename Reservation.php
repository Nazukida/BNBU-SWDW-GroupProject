<?php
session_start();
include 'connectDataBase.php';

if (!isset($_SESSION['user'])) {
    echo '<html><body>';
    echo '<p>Please login first</p>';
    echo '<a href="loginRegForm.html">Go to login page</a>';
    echo '</body></html>';
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['hometown'])) {
    $selectedCity = $_POST['hometown'];
    $username = $_SESSION['user'];
    
    $sql = "UPDATE touristMem SET city = '$selectedCity' WHERE username = '$username'";
    
    if (mysqli_query($conn, $sql)) {
        echo '<html><body>';
        echo '<p>Update successfully</p>';
        echo '<a href="hometowns.html">Go to hometowns page</a>';
        echo '</body></html>';
    } else {
        echo '<html><body>';
        echo '<p>Update failed: ' . $conn->error . '</p>';
        echo '<a href="hometowns.html">Go to hometowns page</a>';
        echo '</body></html>';
    }
} else {
    echo '<html><body>';
    echo '<p>Invalid request</p>';
    echo '<a href="hometowns.html">Go to hometowns page</a>';
    echo '</body></html>';
}

$conn->close();
?>
