<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php Crash Course</title>
</head>
<body>

<?php

//Request Methods.. GET/ POST

// GET --> data --> url 
// GET --> data haru --> user can manipulate


//POST -- >data -- > not in url-- > secure
//


// include 'aboutus.html';


//Functional approach , object oriented approach


//Function approach
// $con = mysqli_connect("localhost","root","iamlegend","phpdb");
// print_r($con);

// if($con)echo "connection established";
// else echo "connection couldnt be established";

// $QUERY = "create table person (name varchar(30), address varchar(100))";

// $result = mysqli_query($con,$QUERY);

// echo $result;


//object oriented

// $con = new mysqli("localhost","root","iamlegend","phpdb");

// // if($con) echo "connection established";
// // else echo "connection couldnot be established";

// $QUERY = "create table user (name varchar(30), address varchar(100))";
// $result = $con->query($QUERY);

// echo $con->error;

// echo $result;
// // print_r($con);


class Book{

    public $book_name ;
    public $author_name;

    function __construct($book_name, $author_name){

        $this->$book_name = $book_name;
        $this->author_name = $author_name;



    }

    function description(){
        echo "This is book written by ".$this->author_name;
    }
}

$b1 = new Book("5 Am Club"," Sharma");
// echo $b1->book_name;
// echo $b1->author_name; // Java, C++, Javascript ...                .  in php,  - > ,   +   .... in php .
$b1->description();

$b2 = new Book("Secret","Rhonda Bryne");
$b2->description();


?>

<!-- <form action="check_user.php?cat=login" method="POST">

    username  : <input type="text" name="username">
    Password :  <input type="password" name="password">
    <button>Submit</button>

</form> -->

<!-- <form action="add_to_db.php" method="POST">

Username : <input type="text" name="username"><br/>
Address  :  <input type="text" name="address"><br/>
<button>Add User</button>

<a href="view_users.php">View all user info</a>
</form> -->




</body>
</html>
