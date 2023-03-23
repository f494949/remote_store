<?php
define('GENG','你好');
echo GENG;
echo '<br>';
$text = '你好';//三个字符
echo strlen($text);
echo '<br>';
echo strpos($text,'好');
echo '<br>';
echo $text.=' '.GENG;
$username = $_GET['user'] ?: 'nobody';
echo $username, PHP_EOL;
$x = 128;
echo 'my age is'. $x;
?>

