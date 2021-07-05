<?php
include("config.php");

$data=json_decode(file_get_contents("php://input"),true);

$user_id=$data["user_id"];
$name=$data["name"];
$phone=$data["phone"];
$address=$data["address"];
$sent=$data["sent"];
$receive=$data["receive"];
$debt=$data["debt"];
$credit=$data["credit"];
$resp["status"]=mysqli_query($con,"insert into Report(user_id,name,phone,address,sent,receive,debt,credit) values('$user_id','$name','$phone','$address','$sent','$receive','$debt','$credit')");

echo json_encode($resp);

?>