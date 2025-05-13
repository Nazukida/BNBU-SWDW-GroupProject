<?php
session_start();
include 'connectDataBaseLocalhost.php';

$Username = $_POST['loginUsername'];
$loginPSW = $_POST['loginPassword'];
$sql = "SELECT * FROM touristmem WHERE username = '$Username' AND password = '$loginPSW'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $_SESSION['user'] = $Username;
    $_SESSION['pwd'] = $loginPSW;
    echo '<html><body>';
    echo '<p>Login successfully</p>';
    echo '<a href="hometowns.html">Go to hometowns page</a>';
    echo '</body></html>';
} else {
    echo '<html><body>';
    echo '<p>Username or password is incorrect</p>';
    echo '<a href="loginRegForm.html">Go to login page</a>';
    echo '</body></html>';
}
$conn->close();
?>