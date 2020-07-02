<?php

    $username = $_POST["username"];
    $password = $_POST["password"];

    if($username!="" and $password!=""){

          // echo $username;

    $connect = include 'database.php';

    $QUERY = "select * from user where username = '$username' limit 1";
    $result = $connect->query($QUERY);

    $row = $result->fetch_assoc();

    if(password_verify($password, $row["password"])){

        echo "<h1> Welcome $username </h1>";


    }
    else echo "incorrect credentials.";


    } else{
        echo "Fill up all the fields";
    }


  







?>