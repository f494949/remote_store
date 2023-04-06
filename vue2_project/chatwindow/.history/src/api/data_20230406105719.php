<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Credentials: true'); // 设置是否允许发送 cookies

header('Access-Control-Expose-Headers: *');  //服务器 headers 白名单，可以让客户端进行访问

header('Access-Control-Allow-Headers: *');

header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); // 允许跨域响应类型 

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

// $sql="select * from test";
// $result = mysqli_query($conn,$sql);
// if(mysqli_num_rows($result)>0){
//     while ($row=mysqli_fetch_assoc($result))
//     {
//         echo json_encode($row);
//     }
// }
// $request = $_POST['PARAMS'];
// var_dump(json_decode(@file_get_contents( 'php://input'),true));

$request = $_POST('PARAMS');

$request = @file_get_contents( 'php://input');
$operate = "insert into test (name, message) values ('syf', '$request')";
$result = mysqli_query($conn,$operate);
if(!$result){
	echo("fail to insert data");
}else{
	echo("sucess in insert data");
}
mysqli_close($conn);
?>