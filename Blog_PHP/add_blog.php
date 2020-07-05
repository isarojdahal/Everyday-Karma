<?php

    if($_SERVER["REQUEST_METHOD"]=="POST"){

        $title = $_POST["title"];
        $description = $_POST["description"];

        if($title!="" and $description!=""){

            $date = date("Y-m-d");
            $connection = include 'database.php';
            $result = $connection->query("INSERT INTO blog(title,description,date) values('$title','$description','$date')");

            if($result==1)echo "<center><p style='color:green'>Blog added</p><br/></center>";
            else echo "<center><p style='color:red'>Blog not added</p></center>";
            
        }
    }




$title = "Add Blog";
include 'components/header.php';

?>

<body class="container mt-4">

<form action="<?php echo $_SERVER['PHP_SELF'] ?>"  method="POST">

    Blog Title <input type="text" name="title" class="form-control"><br/>
    Blog Description <textarea rows="10" class="form-control" name="description"></textarea>
    <center><button class="mt-4 btn btn-warning">Add Blog</button></center>

</form>
    


</body>