/**
 * Module dependencies.
 * @const express
 * @const bodyParser
 * @const mongoose
 */
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({extended: true}));

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Connect to the local MongoDB database
// mongoose.connect('mongodb://localhost:27017/ToDoDB',

// Connect mongodb from atlas
mongoose.connect(
  "mongodb+srv://markxuch:DQpjRPEhj9d189Yp@cluster0.qpub9vx.mongodb.net/todoListDB",
  { useNewUrlParser: true }
);

// mongoose.connect('mongodb://localhost:27017/ToDoDB',

// Define the schema for the 'items' collection
const itemsSchema = {
  task:String
};

const listSchema = {
  task:String,
  items:[itemsSchema]
}

// Create a model for the 'items' collection
const Item = mongoose.model('Item',itemsSchema);

const List = mongoose.model('List',listSchema);

const item1 = new Item({
  task:'Welcome to your todolist!'
});
const item2 = new Item({
  task:'Hit the + button to add a new item'
});
const item3 = new Item({
  task:'<-- Hit this box to delete an item'
});

// Define two arrays to hold the items for the 'Today' and 'Work' lists
let defaultItems = [item1,item2,item3];


/**
 * Add tasks to the database.
 * @param {Array} theTasks - An array of tasks to be added to the database.
 */
function addTasksToDatabase(theTasks) {
  theTasks.forEach(function(eachTask){
    const taskToBeAdded = new Item({task: eachTask});
    taskToBeAdded.save();
    console.log('Task `'+eachTask+'` was succesfully added.')
  })
}

/**
 * Render the 'Today' list.
 * @function
 * @name getTodayList
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
app.get("/", function (req, res) {
  Item.find({}).exec().then(function (foundItems) {
      if(foundItems.length === 0){
        // only used to add items once so not to get repeated data.
        Item.insertMany(defaultItems);
        res.redirect('/');
      }
      else{
        // console.log(foundItems);
        res.render("list", { listTitle: "Today", newListItems: foundItems });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

/**
 * Render a custom list.
 * @function
 * @name getCustomList
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */

app.get('/:customTaskList',function(req,res){
    const customTaskList = _.capitalize(req.params.customTaskList); 

    // search if the list already exists

    if (customTaskList == 'Favicon.ico'){
      //do nothing just a browser asking for favicon.ico
    }
    else{
      console.log(customTaskList);

      List.findOne({ task: customTaskList })
        .exec()
        .then(function (itemFound) {
          console.log(itemFound);
          if (itemFound === null) {
            const list = new List({
              task: customTaskList,
              items: defaultItems,
            });
            list.save();
            res.redirect("/" + customTaskList);
          } else {
            res.render("list", {
              listTitle: itemFound.task,
              newListItems: itemFound.items,
            });
          }
        });
    }
});


/**
 * Add a new task to the 'Today' or 'Work' list.
 * @function
 * @name addTask
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
app.post("/", function(req, res){
  const taskName = req.body.newItem;
  const listType = req.body.list;

  const item = new Item({
    task:taskName
  });

  if (listType == 'Today'){
    item.save()

    res.redirect('/');
  }
  else{
    List.findOne({task:listType}).exec().then(function(foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect('/'+listType);
    })
  }

});

/**
 * Remove a task from the 'Today' or 'Work' list.
 * @function
 * @name deleteTask
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */

/*app.post('/delete',function(req,res){
  const checkedItemId = req.body.deleteItem;
  const listType = req.body.listType;
  // console.log(taskToDelete);

  if (listType == 'Today'){
    Item.findByIdAndRemove(checkedItemId).exec().then(function (foundItem) {
        // console.log('Task `'+ foundItem.task +'` was succesfully removed.');
        console.log("deleted");
        res.redirect("/");
      });
  }
  else{
    //not deleting the ticked task
    //use for-loop to fix it.
    List.findOneAndUpdate({task:listType},{$pull:{items:{id_:checkedItemId}}});
    res.redirect("/" + listType);

    app.post('/delete', function(req, res) {
  const checkedItemId = req.body.deleteItem;
  const listType = req.body.listType;

  if (listType === 'Today') {
    Item.findByIdAndRemove(checkedItemId).exec().then(function(foundItem) {
      console.log('Task `' + foundItem.task + '` was successfully removed.');
      res.redirect('/');
    });
  } else {
    List.findOneAndUpdate({ task: listType }, { $pull: { items: { id_: checkedItemId } } }).exec().then(function(foundList) {
      console.log('Task `' + checkedItemId + '` was successfully removed from list `' + listType + '`.');
      res.redirect('/' + listType);
    }).catch(function(err) {
      console.log(err);
    });
  }
});
  }
});*/

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.deleteItem;
  const listType = req.body.listType;

  if (listType === "Today") {
    Item.findByIdAndRemove(checkedItemId)
      .exec()
      .then(function (foundItem) {
        console.log("Task `" + foundItem.task + "` was successfully removed from Today's list");
        res.redirect("/");
      });
  } else {
    List.findOneAndUpdate(
      { task: listType },
      { $pull: { items: { id_: checkedItemId } } }
    )
      .exec()
      .then(function (foundList) {
        console.log(
          "Task `" +
            checkedItemId +
            "` was successfully removed from list `" +
            listType +
            "`."
        );
        res.redirect("/" + listType);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});

/**
 * Render the 'About' page.
 * @function
 * @name getAboutPage
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
app.get("/about", function(req, res){
  res.render("about");
});

// Start the server and listen on port 3000
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
