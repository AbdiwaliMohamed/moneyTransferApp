<?php
include("config.php");


$data=json_decode(file_get_contents("php://input"),true);
$cust_id=$data["cust_id"]; // step 1

$resp["status"]=mysqli_query($con,"delete from Report where id=$cust_id"); // step 2 & 3

echo json_encode($resp); // step 4



?>