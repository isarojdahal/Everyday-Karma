<?php


    $con = include 'database.php';
    $QUERY = "select * from user";
    $result = $con->query($QUERY);

    // print_r($result);


    echo "<table border='1'>

            <tr>
            
            <td>name</td>
            <td>address</td>
            
            </tr>";

    while($row  = $result->fetch_assoc()){

        echo "<tr> 
            <td>". $row['name'] ."</td>
            <td>". $row['address']."</td>
            </tr>";


    }





        echo "</table>";




?>