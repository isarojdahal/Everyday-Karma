<?php

    $connection = require_once 'database.php';
    $result = $connection->query("SELECT  * FROM images");

    while($row = $result->fetch_assoc()){

        echo "<img src='uploads/".$row["name"]."'/><br/>";
    }

?>