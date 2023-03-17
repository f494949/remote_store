<?php
header("Content-Type: text/html; charset=UTF-8");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT,DELETE');
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/5/22 0022
 * Time: 11:48
 */
class Emp {
    public $msg = "";
    public $code = "";
    public $data = "";
}
 
$e = new Emp();
 
$name = $_POST['name'];
 
$arr = $_POST['son'];
 
$value = '';
 
for ($i = 0; $i < count($arr);$i ++) {
    $value .= $arr[$i]['proName'].'，';
}
 
// 获取$value的字节数（中文字符占3个字节）
$len = strlen($value);
// 去掉最后的'，'，这里为什么减3呢，因为$value最后的'，'是中文字符的逗号，占了3个字节。
$value = substr($value, 0, $len - 3);
 
$message = '接收到的name为：'.$name.'，接收到的son数组下proName分别为：'.$value;
 
$e->msg = '接口调用成功！';
$e->code = 'success';
$e->data = $message;
echo json_encode($e);