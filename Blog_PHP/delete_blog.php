<?php

   $bid =  intval($_GET["bid"]);

   if(!empty($bid)){

        $connection = include 'database.php';
        $result = $connection->query("DELETE FROM blog where bid = $bid");
        if($result==1)header("location:/");
        else echo "Couldnt delete";
   }

?> 