<?php
session_start();
include 'connectDataBaseLocalhost.php';

//need to save all data
$Username = $_POST['registerUsername'];
$RePwd = $_POST['registerPassword'];
$conRePwd = $_POST['confirmPassword'];

//check two password
if ($RePwd === $conRePwd) {
    $sql = "SELECT * FROM touristmem WHERE username = '$Username'";
    $checkResult = $conn->query($sql);
    if ($checkResult->num_rows === 0) { //new user
        $sqlnew = "INSERT INTO touristmem (username, password) VALUES ('$Username', '$RePwd')";
        if ($conn->query($sqlnew) === TRUE) {
            echo '<html><body>';
            echo '<p>register successfully, please login</p>';
            echo '<a href="loginRegForm.html">Go to login page</a>';
            echo '</body></html>';
        } else {
            echo '<html><body>';
            echo '<p>register failed: '. $conn->error.'</p>';
            echo '<a href="loginRegForm.html">Go to registration page</a>';
            echo '</body></html>';
        }
    } else {
        echo '<html><body>';
        echo '<p>username already exists</p>';
        echo '<a href="loginRegForm.html">Go to registration page</a>';
        echo '</body></html>';
    }
} else {
    echo '<html><body>';
    echo '<p>two passwords do not match</p>';
    echo '<a href="loginRegForm.html">Go to registration page</a>';
    echo '</body></html>';
}
$conn->close();
?>