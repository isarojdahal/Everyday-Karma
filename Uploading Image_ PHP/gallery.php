<?php

    $connection = require_once 'database.php';
    $result = $connection->query("SELECT  * FROM asset");

    while($row = $result->fetch_assoc()){

        echo "<img src='data:image/*;base64,".base64_encode($row["data"])."'><br/>";
    }

?>