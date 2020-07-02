<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
      
            <form action="checklogin.php" method="POST">
            
            
          <div class="card col-lg-5">
              <div class="card-header">
             Login
              </div>
              <div class="card-body">
                  
                  <label>Username </label><input  required type="text" name="username" class="form-control">

                  <label class="mt-3">Password</label><input required type="password" name="password" class="form-control">

              </div>
              <div class="card-footer text-muted">
                <button class="btn btn-success">Login</button>
                <a class="btn btn-warning" style="float:right;" href="register.php">Register</a>
              </div>
          </div>

          </form>


          
  
  </body>
</html>