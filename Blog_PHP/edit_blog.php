<?php

if($_SERVER["REQUEST_METHOD"]=="POST"){

    $title = $_POST["title"];
    $description = $_POST["description"];
    $bid = $_POST["bid"];

    if($title!="" and $description!=""){

        $connection = include 'database.php';
        $result = $connection->query("UPDATE blog set title='$title', description='$description' where bid=$bid");

        if($result==1){
            
            echo "<center><p style='color:green'>Blog updated</p><br/></center>";
            header("location:/");

        }
        else echo "<center><p style='color:red'>Blog not updated</p></center>";
    }
}

$title = "Edit Blog";
include 'components/header.php';

?>

<body class="container mt-4">

<form action="<?php echo $_SERVER['PHP_SELF'] ?>"  method="POST">


    <?php

    $bid = intval($_GET["bid"]);
    if(empty($bid)) die();

    $connection = include 'database.php';
    $result = $connection->query("select * from blog where bid = $bid LIMIT 1");

    $row = $result->fetch_assoc();


    echo '
    Blog Title <input type="text" name="title" class="form-control" value="'.$row["title"].'"><br/>
    Blog Description <textarea rows="10" class="form-control" name="description">'.$row["description"].'</textarea>
    <input type="hidden" name="bid" value="'.$bid.'"/>
    <center><button class="mt-4 btn btn-warning">Update Blog</button></center>';




    ?>



</form>
    


</body>