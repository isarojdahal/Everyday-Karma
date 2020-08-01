// basics

//selectors

// $(document).ready(function () {
//   //   $("#captionText").css("color", "red");

//   $("#main-para").css("color", "green");

//   $("#main-para span ").css("text-decoration", "underline");

//   //   $(".para1").css("color", "blue");
// });

//callback functions

// $(document).ready(function () {

// });

//events

//mouse events: click,dblclick,mouseenter,mouseleave
//keyboard events: keypress, keydown, keyup
// document events: load, resize, scroll

// document.getElementById("myButton").addEventListener("click", function () {
//   console.log("You have clicked me");
// });

// $("#myButton").click(function () {
//   console.log("You have clicked me");
// });

// $("#myButton").dblclick(function (evt) {
//   console.log(
//     "X coordinate : " + evt.screenX + " Y coordinate : " + evt.screenY
//   );
//   console.log("You have clicked me");
// });

// $("#myButton").mouseenter(function () {
//   console.log("You have clicked me");
// });

// $("#myButton").mouseleave(function () {
//   console.log("You have clicked me");
// });

// $("#firstName").keydown(function (evt) {
//   console.log(evt.target.value);
//   console.log("Key pressed");
// });

// $(document).ready(function (evt) {
//   console.log(evt);
// });

//effects ...

//hide show
// $(selector).hide(speed,callback);

// $("#div1").hide(3000, function () {
//   $(this).show(3000, function () {
//     console.log("Animation ended");
//   });
// });

// $("#myButton").click(function () {
//   $("p").toggle();
// });
// $(selector).show(speed,callback);

//fade

// $("#div1").fadeTo(3000, 0.5, function () {
//   console.log("div is hidden");
// });

// $(selector).fadeTo(speed,opacity,callback);

//slide

// $("#div1").slideUp(3000, function () {
//   $("#div1").slideDown(3000);
// });

// $("#div1").slideUp(3000, function () {
//   $("#div1").slideToggle(3000);
// });

// $(selector).action();

//animate
// $(selector).animate({ params }, speed, callback);

// $("#myButton").click(function () {
//   $("#div1").animate(
//     {
//       height: "200px",
//       width: "100px",
//     },
//     "fast"
//   );
// });
//chaining

// $("p").hide(2000).css("color", "red").show(2000).hide(2000).show(2000);

//Dom Manipulation

//get, set
//val(), attr(),text(),html()

// console.log($("#myField").val());
// $("#myField").val("Saroj Dahal");

// console.log($("#div1").text().trim();

// console.log($("#div1").html().trim());
// $("#div1").html("<b> A quick brown fox jumps over the chemistry lab</b>");

// console.log($("#div1").attr("style"));

// $("img").attr("height", "500");
// $("img").attr("width", "500");

// $("img").attr({
//   width: "600",
//   height: "500",
//   title: "My cat",
// });

//add
// append(), prepend(), after(), before()

// $("#mainDiv").append("Saroj <b> Dahal</b>");

// const div = "<div>Hello its me <img src='cat.jpg'></div>";
// $("#mainDiv").prepend(div);

// $("#mainDiv").after("<div> Hello</div>");
// $("#mainDiv").before("<img src='cat.jpg' height='150' width='150'>");

//remove

// $("#mainDiv").remove();

//classes

// $("#mainDiv").addClass("another");
// $("#mainDiv").removeClass();

// css

// $("#mainDiv").css("color", "red");
// $("#mainDiv").css("font-size", "12px");

// $("#mainDiv").css({
//   color: "red",
//   textTransform: "Capitalize",
//   background: "blue",
//   lineHeight: "32px",
// });

//jquery ui

// $("#datePicker").click(function () {
//   $(this).datepicker();
// });

// $("#myImage").draggable();

// $("#mainDiv").dialog();

//ajax

// $.ajax({
//   url: "https://jsonplaceholder.typicode.com/users",
//   method: "GET",
// })
//   .done(function (response) {
//     console.log(response);
//   })
//   .fail(function (response) {
//     console.log("failed because of : " + response);
//   })
//   .always(function () {
//     console.log("Finshed");
//   });
