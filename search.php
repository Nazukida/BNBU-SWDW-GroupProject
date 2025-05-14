<?php
session_start();
include 'connectDataBaseLocalhost.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {//check if the form is submitted by post method
    if (isset($_POST['city'])) {
        $city = $_POST['city'];
        if ($username) {
            echo '<html><body>';
            echo '<p>Users who selected the city: ' . htmlspecialchars($city) . '</p>';
            echo '<ul>';
            while ($stmt->fetch()) {
                echo '<li>' . htmlspecialchars($username) . '</li>';
            }
            echo '</ul>';
            echo '<a href="hometowns.html">Go to hometowns page</a>';
            echo '</body></html>';
        } else {
            echo '<html><body>';
            echo '<p>No users found for the city: ' . htmlspecialchars($city) . '</p>';
            echo '<a href="hometowns.html">Go to hometowns page</a>';
            echo '</body></html>';
        }

        $stmt->close();
    } elseif (isset($_POST['username'])) {// Search city by user
        $user = $_POST['username'];

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
    }
}

$conn->close();
?>
