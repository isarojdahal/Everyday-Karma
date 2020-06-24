<?php


    $username = $_POST["username"];
    $address = $_POST["address"];

    if($username!="" and $address!="")
    {
        $con = include 'database.php';
        $QUERY = "insert into user values('$username','$address')";

        $con->query($QUERY);

        $con->close();

        echo "user info inserted to database";
    }

    else echo "enter fields";   

    // if(!empty($username) and !empty($address))

 



?>