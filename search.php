<?php
session_start();
include 'connectDataBaseLocalhost.php';

// Get the username from the form
$user = $_POST['username'];

// Prepare the SQL query to get the city for the specified user
$stmt = $conn->prepare("SELECT city FROM touristmem WHERE username = ?");
$stmt->bind_param("s", $user);
$stmt->execute();
$stmt->bind_result($selectedCity);
$stmt->fetch();

// Check if the user exists and display the result
if ($selectedCity) {
    echo '<html><body>';
    echo '<p>The user ' . htmlspecialchars($user) . ' has selected the city: ' . htmlspecialchars($selectedCity) . '</p>';
    echo '<a href="hometowns.html">Go to hometowns page</a>';
    echo '</body></html>';
} else {
    echo '<html><body>';
    echo '<p>User not found or no city selected.</p>';
    echo '<a href="hometowns.html">Go to hometowns page</a>';
    echo '</body></html>';
}

$stmt->close();
$conn->close();
?>