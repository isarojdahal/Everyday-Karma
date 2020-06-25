<?php

    $name =  $_GET["q"];

    if($name!=""){

        $con = mysqli_connect("localhost","root","iamlegend","ajax");

        $QUERY = "select * from name where person_name like '$name%' limit 1";

        $result = $con->query($QUERY);

        if($result->num_rows>0){
            
             $row = $result->fetch_assoc();
             echo $row["person_name"];


        }
        else echo "No such person";
    }


?>