<?php

include 'connectDataBase.php';
$user = $_POST["registerUsername"];
$pwd1 = $_POST["registerPassword"];
$pwd2 = $_POST["confirmPassword"];


if($user){
	$sqlCheck = "SELECT * FROM `touristMem` WHERE `username` = '$user'";
	$resultCheck = mysqli_query($conn, $sqlCheck);
	if (mysqli_num_rows($resultCheck) > 0) {
		echo "This username already exists in the database!";
		echo "<br> Go back to <a href='loginRegForm.html'> Login_Register_Form </a>";
		exit;
	}
	else{
		if($pwd1 != $pwd2){
			echo "you should enter the same password!";
			echo "<br> Go back to <a href='loginRegForm.html'> Login_Register_Form </a>";
		}
		else{
			$realName = $user . ' Fong';
			$sql = "INSERT INTO `touristMem` (`mid`, `username`, `password`, `real_name`, `city`) VALUES (NULL, '$user', '$pwd1', '$realName', NULL)";
            $result = mysqli_query($conn, $sql);
		    echo "successfully insert!";
		}
}
}
else{
    echo "name can't be empty!";
}
?>