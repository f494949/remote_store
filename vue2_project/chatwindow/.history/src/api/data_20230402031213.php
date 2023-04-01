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

$sql="select * from admin";
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result)>0){
    while ($row=mysqli_fetch_assoc($result))
    {
        echo json_encode($row);//把数据按json返回
    }
}
————————————————
版权声明：本文为CSDN博主「K-superhero」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_44106924/article/details/108720122

// $messaage = $_POST["message"];
// $operate = "insert into test values('syf', '$message')";
// $result = mysqli_query($conn,$operate);
// if(!$result){
// 	echo("fail to insert data");
// }else{
// 	echo("sucess in insert data");
// }
// @ mysqli_free_result($result);
mysqli_close($db);
?>