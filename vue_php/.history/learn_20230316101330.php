<?php
	    $dsn= "mysql: host=localhost; port=3306; dbname=test; charset=utf8";
		$pdo= new PDO($dsn,'root','root');
		
		function lists(){
			global $pdo;
			$stmt= $pdo->query("select * from news");
			$rs= $stmt->fetchAll(PDO::FETCH_ASSOC);
			echo json_encode($rs); 
		}
		
		if(!empty($_GET["a"])){
			$action= strtolower($_GET["a"]);
			$action();
		}
