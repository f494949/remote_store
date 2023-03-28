<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = 'test';
 
// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
 
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} else {
$sql = 'select * from talk';
$name = $_GET['name'];
$message = $_GET['message'];
}
$result->free();//释放结果集
$conn->close();//关闭连接
