<?php

    $response =  $_POST["g-recaptcha-response"];
    $params = array( "secret"=>"6LfUDbgZAAAAAFkXL6P9-mMc3HzR5JPhDKfgD2Ub", "response"=> $response);

    $config = array(

        CURLOPT_URL => "https://www.google.com/recaptcha/api/siteverify",
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $params,
        CURLOPT_RETURNTRANSFER => true


    );

    $curl = curl_init();
    curl_setopt_array($curl,$config);
    $output = curl_exec($curl);

    $output = json_decode($output,true); //Array

    // print_r($output);
    $status =  $output["success"];

    if($status){

        echo "Form has been submitted";
    }

    else {

        echo "Error in Captcha<br/> Redirecting in few seconds....";

        header('refresh:3;url=/');


    }




?>