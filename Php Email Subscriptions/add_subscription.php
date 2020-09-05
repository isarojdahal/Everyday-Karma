<?php

$name = $_POST["name"];
$email = $_POST["email"];
$date = date("y-m-d");

$con = mysqli_connect("localhost","root","iamsohappy","everydaykarma");

$result = $con->query("INSERT INTO subscription(name,email,subscription_date) values('$name','$email','$date')");

echo ($result)? "Subscription added" : "Subscription not added";


?>