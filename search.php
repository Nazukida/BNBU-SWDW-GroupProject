<?php
session_start();
include 'connectDataBase.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['city'])) {
        // Search users by city
        $city = $_POST['city'];
        $sql = "SELECT username FROM touristmem WHERE city = '$city'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            echo '<html><body>';
            echo '<p>Users who selected the city: ' . $city . '</p>';
            echo '<ul>';
            while ($row = mysqli_fetch_assoc($result)) {
                echo '<li>' . $row['username'] . '</li>';
            }
            echo '</ul>';
            echo '<a href="hometowns.html">Go to hometowns page</a>';
            echo '</body></html>';
        } else {
            echo '<html><body>';
            echo '<p>No users found for the city: ' . $city . '</p>';
            echo '<a href="hometowns.html">Go to hometowns page</a>';
            echo '</body></html>';
        }
        mysqli_free_result($result);
    } elseif (isset($_POST['username'])) {
        // Search city by user
        $username = $_POST['username'];
        $sql = "SELECT city FROM touristmem WHERE username = '$username'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            echo '<html><body>';
            echo '<p>The user ' . $username . ' has selected the city: ' . $row['city'] . '</p>';
            echo '<a href="hometowns.html">Go to hometowns page</a>';
            echo '</body></html>';
        } else {
            echo '<html><body>';
            echo '<p>User not found or no city selected.</p>';
            echo '<a href="hometowns.html">Go to hometowns page</a>';
            echo '</body></html>';
        }
        mysqli_free_result($result);
    }
}

$conn->close();
?>
