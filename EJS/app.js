const express = require("express");
const https = require("https");
const ejs = require("ejs");

const PORT_ = 3000;
const app = express();
let items = ["Buy Food", "Cook Food"];

let workItems = [];
let item = "";
let taskType='';
let color ="";

// use integrated middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sets the view engine for the app to EJS
app.set("view engine", "ejs");

app.post("/", function (req, res) {
  taskType = req.body.taskType;
  item = req.body.newTask;

  console.log(taskType);
  console.log(item);
  console.log();

  if (taskType === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    // console.log(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("index", {
    typeOfTask: "Work Related",
    kindOfDay: "Work",
    toDoItems: workItems,
  });
});

app.get("/", function (req, res){
  let today = new Date();
  let year = today.getFullYear();
  let options = { weekday: "long", day: "numeric", month: "long"};
  let message = today.toLocaleDateString("en-US", options);
  res.render("index", { 
    typeOfTask:'Tasks To Do',
    kindOfDay: message,  
    toDoItems: items });
  // res.render('list',{});
  // res.send();
});

app.listen(PORT_, function () {
  console.log(`App listening on port ${PORT_}`);
});
