<?php

    // print_r($_FILES["image"]);

    $filename =  $_FILES["image"]["name"];
//    echo  $_FILES["image"]["name"];
//    echo  "<br/>".$_FILES["image"]["type"];
//    echo  "<br/>".$_FILES["image"]["tmp_name"];

   if(move_uploaded_file($_FILES["image"]["tmp_name"],"uploads/".$filename)==TRUE){
       echo "Image uploaded";
   }else echo "Image not uploaded";

?>