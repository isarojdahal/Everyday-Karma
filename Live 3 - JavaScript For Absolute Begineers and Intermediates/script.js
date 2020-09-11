function loadData() {
  const div = document.getElementById("usernameList");
  var request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");

  request.onload = function () {
    if (request.status == 200 && request.readyState == 4) {
      //   console.log(this.responseText);

      var data = JSON.parse(this.responseText);

      data.forEach((element) => {
        // div.appendChild(element.username);
        var span = document.createElement("span");
        span.innerHTML = element.username + "<br/>";
        div.append(span);
      });
    } else if (response.readyState == 3) {
    }
  };
  request.send();
}
