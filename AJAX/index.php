<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Search Name : <input type="text" id="searchBox" name="search">
    Suggesstion : <span id="suggestion"></span>
</body>

<script>

const searchBox = document.getElementById("searchBox");


searchBox.addEventListener("keyup",function(){

    // console.log(searchBox.value);

    var request = new XMLHttpRequest();

    request.onreadystatechange = function (){

        if(this.status == 200 && this.readyState == 4){

            document.getElementById("suggestion").innerHTML = this.responseText;

        }
    };

    request.open("GET","search_data.php?q="+searchBox.value,true);
    request.send();


})



</script>

</html>