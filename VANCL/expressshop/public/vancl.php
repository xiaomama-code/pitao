<?php
 header("Content-type:text/html;charset=utf-8");
 $phone = $_POST["phone"];
 $pwd = $_POST["pwd"];
$conn=mysql_connect("localhost","root","root");
  mysql_select_db("vancl");
  $result=mysql_query("select*from information where inforname='$phone'",$conn);//进行判断是否存在，返回那一行
     if(mysql_num_rows($result)==1){
     	 echo 1;
     }else{
     	echo 0;
     	mysql_query("insert into information values('$phone','$pwd')",$conn);//存入数据
     }
?>