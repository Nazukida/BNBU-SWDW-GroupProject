<?php
session_start();
include 'connectDataBaseLocalhost.php';
// include 'connectDataBase.php';//connect to database
$Username = $_POST['loginUsername'];
$loginPSW = $_POST['loginPassword'];
$sql = "SELECT * FROM touristmem WHERE username = '$Username' AND password = '$loginPSW'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $_SESSION['user'] = $Username;
    $_SESSION['pwd'] = $loginPSW;
    echo '<script>alert("Login successfully");window.location.href="hometowns.html";</script>';
} else {
    echo '<script>alert("Username or password is incorrect");window.location.href="loginRegForm.html";</script>';
}
$conn->close(); // close the session
?>