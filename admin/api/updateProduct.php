<?php
include("config.php");

$data=json_decode(file_get_contents("php://input"),true);

$id=$data["id"];
$name=$data["name"];
$price=$data["price"];
$discount_price=$data["discount_price"];
$type=$data["type"];
$categories=$data["categories"];
$descr=$data["descr"];
$img=$data["img"];

$resp["status"]=mysqli_query($con,"update products set name='$name',price='$price',type='$type',categories='$categories',discount_price='$discount_price',img='$img',descr='$descr' where id=$id"); // step 2 & 3

echo json_encode($resp); // step 4





?>