<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "test";

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
 
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

$messaage = $_POST["message"];
$operate = "insert into test values('syf', '$message')";
$result = mysqli_query($conn,$operate);
if(!$result){
	echo("fail to insert data");
}else{
	echo($messaage);
}
@ mysqli_free_result($result);
mysqli_close($db);
?>