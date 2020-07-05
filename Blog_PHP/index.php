
<?php

$title = "Dashboard";
include 'components/header.php';?>

  <body class="container">

  <div class="row mt-4">

  <div class="col-lg-12">

  <strong>Blogs</strong>
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

      
    
    </div>
    </div>
    ";
  }


  ?>
  
  </div>


      
  
  </body>
</html>