// let headerList = $("h1");
// // console.log(headerList[0].css("color"));

// headerList.addClass("big-title");

// setTimeout(function(){
//   headerList.addClass("margin-50");
// },2000);

// $("body").prepend("<button>Click Me</button>");

// // console.log(headerList.hasClass("big-title"));

// setTimeout(function () {
//   headerList.text("Bye World");

// }, 2000);

// setTimeout(function () {
//   headerList.html("Just Kidding Hello again World.");
//   $("img").attr("src", "./img-2.jpg");
// }, 4000);

// $("img").click(function(){
//   alert("Image was clicked.");
// });

// $('h1').click(function(){
//   $('h1').addClass('green-color')
// });
// let textTyped = "";

// /* $('input').keypress(function(event){
//   textTyped += event.key;
//   headerList.text(event.key);
//   console.log(event.key);
// });*/

// $('input').on("keypress", function(event){
//   textTyped += event.key;
//   headerList.text(textTyped); 
// });

// $("button").remove();

$("img").on("click",function(){
  $("h1").slideToggle();
});