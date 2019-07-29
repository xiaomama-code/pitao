<?php
//  header("Content-type:text/html;charset=utf-8");
// 	$id = $_POST["idvalue"];
// 	$conn=mysql_connect("localhost","root","root");
//  mysql_select_db("vancl");
//  $result = mysql_query("select*from go where id='$id'",$conn);
//  $rows_ = mysql_num_rows($result);
//  if($rows_ == 1){
//		while($rows=mysql_fetch_assoc($result)){
//			echo $rows["p"].$rows["bg1"].$rows["bg2"].$rows["bg3"].$rows["bg4"].$rows["bg5"];
//		}
//  }	
// mysql_close($conn);
  header("Content-type:text/html;charset=utf-8");
  $id=$_POST["idvalue"];
  $conn=mysql_connect("localhost","root","root");
  mysql_select_db("vancl");
  $result=mysql_query("select*from go where id='$id' ",$conn);
  $rows_=mysql_num_rows($result);
  if($rows==1){
  	while($rows=mysql_fetch_assoc($result)){
  		echo $rows[p].$rows["bg1"].$rows["bg2"].$row["bg3"].$row["bg4"].$row["bg5"];
  	}
  }
  mysql_close($conn);
?>