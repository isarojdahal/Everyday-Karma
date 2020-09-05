<body>
Name :

<input type="text" name="name" id="name" required autofocus/>

<br/>


Email:

<input type="email" name="email" id="email" required/>

<button onclick="addSubscription()">Subscribe</button>

<br/>

<span id="status"></span>

</body>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

<script>

function addSubscription(){

    const name = $("#name").val();
    const email = $("#email").val();


    $.ajax({
        type: "POST",
        url: "add_subscription.php",
        data: {name:name,email:email},
        success: function (response) {

            $("#status").text(response);


            
        }
    });


}

</script>