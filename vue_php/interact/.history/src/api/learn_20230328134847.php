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
        echo "id: " . $row["id"]. "<br>password：" . $row["password"]."<br>";
    }
}
}
$result->free();//释放结果集
$conn->close();//关闭连接
