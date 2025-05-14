<?php
session_start();
include 'connectDataBase.php';

$Username = $_POST['loginUsername'];
$loginPSW = $_POST['loginPassword'];
$sql = "SELECT * FROM touristmem WHERE username = '$Username' AND password = '$loginPSW'";
$result = mysqli_query($conn, $sql);

if (empty($Username) || empty($loginPSW)) {
    echo "All fields are required!";
    echo "<br> Go back to <a href='loginRegForm.html'> Login_Register_Form </a>";
    exit;
}

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