<?php
include("config.php");
$user_id=$_POST["user_id"];

$result=mysqli_query($con,"select * from Report where user_id='$user_id'");
$data=mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($data);


?>