<?php
   	header("Content-type:text/html;charset=utf-8");
   	$usename = $_POST["usename"];
   	$pwd = $_POST["pwd"];
   	$conn=mysql_connect("localhost","root","root");
    mysql_select_db("vancl");
    $result = mysql_query("select*from information where inforname='$usename' and inforpwd='$pwd'",$conn);
    $row = mysql_num_rows($result);
    
    if($row == 1){
    	echo 1;
    }else{
    	echo 0;
    }  
?>