const status = document.getElementById("statusMessage");

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  let fullName = document.getElementById("fullname").value;
  let userName = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (fullName != "" && userName != "" && email != "" && password != "") {
    if (fullName.length < 3) {
      status.innerText = "Full name must have more than 3 letters";
    } else if (userName.length < 5) {
      status.innerText = "Username should be at least of 5 letters";
    } else if (password.length < 6) {
      status.innerText = "Password should be of 6 letters or more.";
    } else {
      status.style.color = "green";
      status.innerText = "Successfully signup with username " + userName;
    }
  } else status.innerText = "Fill all the fields";

  console.log(
    "Full name : " + fullName,
    "Username : " + userName,
    "Email : " + email,
    "Password : " + password
  );
});
