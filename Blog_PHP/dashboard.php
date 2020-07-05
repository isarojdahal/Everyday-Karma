
<?php

$title = "Dashboard";
include 'components/header.php';?>

  <body class="container">

  <div class="row mt-4">

  <div class="col-lg-12">

  <strong>Blogs</strong><a class="btn btn-success" href="add_blog.php" style="float:right;">Add Blog</a>
  <hr/>
  
  </div>

  <?php

  $connection = include 'database.php';
  $result = $connection->query("SELECT * FROM blog order by bid desc");
  
  while($row = $result->fetch_assoc()){

    echo
     "<div class='col-lg-12 mt-3'>
     <div class='card'>

      <div class='card-header'><b>".strtoupper($row["title"])."</b></div>

      <div class='card-body'><small>".$row["date"]."</small><br/>".$row["description"]."</div>

      <div class='card-footer'>

      <center>

        <a class='btn btn-warning' href='edit_blog.php?bid=".$row["bid"]."'>Edit</a>
        <a class='btn btn-danger' href='delete_blog.php?bid=".$row["bid"]."'>Delete</a>


      </center>
      
      </div>
    
    </div>
    </div>
    ";
  }


  ?>
  
  </div>


      
  
  </body>
</html>