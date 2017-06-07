<?php
$page = $_GET["page"];
	if (!$page)
		$page = 1;
	/* 连接数据库 */
	$conn = mysql_connect("localhost:3306","root","");
	if (!$conn) {
		die ("error : " . mysql_error());
	}

	/* 指定连接的具体数据库名称 */
	mysql_select_db("products", $conn);

	/* 设置向数据库读写数据时的编码 */
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");

	/* 数据查询 */
	$sql = "SELECT * FROM productsshop LIMIT ". ($page - 1) * 5 . ", 5";
	$result = mysql_query($sql, $conn); // 执行SQL语句，获取查询结果集
	$arr = array();
	while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
		$arr[] = $row; // 将当前行数据保存到数组中
	}

	echo json_encode($arr);

	/* 关闭连接 */
	mysql_close($conn);
?>