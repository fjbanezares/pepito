// Require necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Initialize an Express application
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true })); // to parse POST request data
app.set('view engine', 'ejs'); // set EJS as the templating engine
app.use(express.static('public')); // serve static files from the "public" directory

// Connect to MongoDB using mongoose
const uri = "mongodb://localhost:27017/todolistDB";
mongoose.connect(uri);

// Define schemas and models for MongoDB
const Schema = mongoose.Schema;

// Define schema for a to-do list and individual items
const toDoListSchema = Schema({
  toDoListName: String,
  toDoItems: [String]
});
const itemSchema = { name: String };

// Create models using the schemas
const ToDoList = mongoose.model('ToDoList', toDoListSchema); // This will correspond to "todolists" collection in MongoDB
const Item = mongoose.model("Item", itemSchema);

// Define default to-do items
const rememberToBreathe = new Item({ name: "Breathe!" });
const rememberToSmile = new Item({ name: "Smile!" });
const rememberToPositive = new Item({ name: "Be positive!" });
const defaultItems = [rememberToBreathe, rememberToPositive, rememberToSmile];

// Route handlers

// Default route: Renders the to-do list for the current day
app.get("/", function (_, res) {
  // Format the date
  const options = { weekday: "long", day: "numeric", month: "long" };
  const dayFormatted = new Date().toLocaleDateString("en-US", options);

  // Check if the database collection is empty
  Item.countDocuments({}).then((count) => {
    if (count === 0) { // If empty, insert default items
      Item.insertMany(defaultItems).catch((err) => console.log(err));
    }
  }).catch((err) => console.log(err));

  // Fetch all items and render them
  Item.find({}).then((foundItems) => {
    res.render("todolist-templates", { listTitle: dayFormatted, items: foundItems });
  }).catch((err) => console.log(err));
});

// Handles adding a new to-do item
app.post("/", function (req, res) {
  let item = req.body.newitem;
  let list = req.body.list;
  if (list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    let newItemToAdd = new Item({ name: item });
    newItemToAdd.save().then(() => res.redirect("/")).catch(err => console.log(err));
  }
});

// Handles deleting a to-do item
app.post("/delete", function (req, res) {
  const itemId = req.body.itemId;
  Item.findByIdAndRemove(itemId).then(() => res.redirect("/")).catch((err) => console.log(err));
});

// "Work" route: Renders the work-related to-do list
app.get("/work", function (req, res) {
  res.render("todolist-templates", { listTitle: "Work", items: workItems });
});

// "About" route: Renders the about page
app.get("/about", function (req, res) {
  res.render("about");
});

// Start the Express server on port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
