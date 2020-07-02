<?php

   $username =  $_POST["username"];
   $password =  $_POST["password"];


   if($username!="" and $password!=""){


    if(strlen($username)<5){

      echo "username should be of 5 letters in minm.";
      die();
    }

    else if(strlen($password)<5){
      echo "password shoulbe be of 5 letters in minm.";
      die();
    }

  
    if(does_user_exist($username)==FALSE)
    {
      $connect = include 'database.php';
      $password = password_hash($password,PASSWORD_DEFAULT);
      $QUERY= "insert into user(username,password) values('$username','$password')";
      $result = $connect->query($QUERY);
      if($result==1)  echo "Registered Successfully";
      else echo "Coludnot register";
      $connect->close();

    }
    else echo "Username exists"; 


   }

   else echo "Fill up all the forms";



   function does_user_exist($username){

    $connect = include 'database.php';

    $result = $connect->query("select * from user where username = '$username'");

    if($result->num_rows>0) return true;
    else return false;


   }

?>

<!doctype html>
<html lang="en">
  <head>
    <title>Register</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
      
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
            
            
          <div class="card col-lg-5">
              <div class="card-header">
             Register
              </div>
              <div class="card-body">
                  
                  <label>Username </label><input type="text" name="username" class="form-control">

                  <label class="mt-3">Password</label><input type="password" name="password" class="form-control">

              </div>
              <div class="card-footer text-muted">
                <button class="btn btn-warning"">Register</button>
                <a class="btn btn-success"  style="float:right;" href="index.php">Login</a>
              </div>
          </div>

          </form>


          
  
  </body>
</html>