<?php

include 'connectDataBase.php';
$user = $_POST["registerUsername"];
$pwd1 = $_POST["registerPassword"];
$pwd2 = $_POST["confirmPassword"];
$realName = $_POST["realName"];
if (empty($user) || empty($pwd1) || empty($pwd2) || empty($realName)) {
    echo "All fields are required!";
    echo "<br> Go back to <a href='loginRegForm.html'> Login_Register_Form </a>";
    exit;
}

if ($user) {
    $sqlCheck = "SELECT * FROM `touristMem` WHERE `username` = '$user'";
    $resultCheck = mysqli_query($conn, $sqlCheck);
    if (mysqli_num_rows($resultCheck) > 0) {
        echo "This username already exists in the database!";
        echo "<br> Go back to <a href='loginRegForm.html'> Login_Register_Form </a>";
        exit;
    } else {
        if ($pwd1 != $pwd2) {
            echo "Passwords do not match!";
            echo "<br> Go back to <a href='loginRegForm.html'> Login_Register_Form </a>";
        } else {
            $sql = "INSERT INTO `touristMem` (`mid`, `username`, `password`, `real_name`, `city`) VALUES (NULL, '$user', '$pwd1', '$realName', NULL)";
            $result = mysqli_query($conn, $sql);
            if ($result) {
                echo "Successfully registered!";
                echo "<br> Go back to <a href='loginRegForm.html'> Login_Register_Form </a>";
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                echo "<br> Go back to <a href='loginRegForm.html'> Login_Register_Form </a>";
            }
        }
    }
} else {
    echo "Username cannot be empty!";
    echo "<br> Go back to <a href='loginRegForm.html'> Login_Register_Form </a>";
}
?>
