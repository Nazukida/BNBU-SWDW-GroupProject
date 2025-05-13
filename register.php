<?php
session_start();
include 'connectDataBaseLocalhost.php';
// include 'connectDataBase.php';

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
            echo '<script>alert("register successfully, please login");window.location.href="loginRegForm.html";</script>';
        } else {
            echo "register failed: " . $conn->error;
        }
    } else {
        echo '<script>alert("username already exists");window.location.href="loginRegForm.html";</script>';
    }
} else {
    echo '<script>alert("two passwords do not match");window.location.href="loginRegForm.html";</script>';
}
$conn->close();
?>