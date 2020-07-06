<?php


    // $image = addslashes(file_get_contents($_FILES["image"]["tmp_name"]));
    // $date = date("Y-m-d");
    // $connection = require_once 'database.php';
    // $result = $connection->query("INSERT INTO asset(data,upload_date) VALUES ('$image','$date')");

    // echo $connection->error;
    // if($result==1) echo "Image uploaded to database";
    // else echo "Error while uploading image to database";

    // $connection->close();


     $default_filename = $_FILES["image"]["name"];
     
     $file_name =explode(".",$default_filename)[0]; 
     $file_ext = explode(".",$default_filename)[1];

     $filename = $file_name."".generateRandomString().".".$file_ext;


    if(move_uploaded_file($_FILES["image"]["tmp_name"],"uploads/".$filename)==TRUE){

        $date = date("Y-m-d");
        $connection = require_once 'database.php';
        $result = $connection->query("INSERT INTO images(name,uploaded_at) VALUES ('$filename','$date')");
    
        echo $connection->error;
        if($result==1) echo "Image uploaded";
        else echo "Error while uploading image";

        $connection->close();


    }

 


    function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }



?>