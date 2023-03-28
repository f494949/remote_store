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
    $result = $conn->query($sql);//将查询的结果保存到变量中
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc())//fetch_assoc() 将结果集放入到关联数组每次输出一条，所以要用循环
     {
        echo "username: " . $row["username"]. "<br>password：" . $row["password"]."<br>";
    }
}
————————————————
版权声明：本文为CSDN博主「轩凌云」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_40390383/article/details/105453120 
}
echo "连接成功";
?>