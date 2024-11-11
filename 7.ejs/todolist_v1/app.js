//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static('public'));


let items = [];
let workItems = [];

app.get("/", function (req, res) {
  var today = new Date();
  var day = "";
  var nombreDia = "";
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  let dayFormatted = today.toLocaleDateString("en-US", options);


  if (today.getDay() == 1 || today.getDay() == 0) {
    day = "weekend";
  } else {
    day = "weekday";
  }
  console.log("el dia " + today.getDay());
  switch (today.getDay()) {
    case 0:
      nombreDia = "Domingo";
      break;
    case 1:
      nombreDia = "Lunes";
      break;
    case 2:
      nombreDia = "Martes";
      break;
    case 3:
      nombreDia = "Miercoles";
      break;
    case 4:
      nombreDia = "Jueves";
      break;
    case 5:
      nombreDia = "Viernes";
      break;
    case 6:
      nombreDia = "Sabado";
      break;
    default:
      console.log("nombre..." + nombreDia);
  }

  console.log(items);


  res.render("todolist-templates", { listTitle: dayFormatted, day, today, nombreDia, items: items });
});

app.post("/", function (req, res) {
  console.log(req.body)

  let item = req.body.newitem;
  let list = req.body.list;


  if (list === "Work") {
    workItems.push(item)
    res.redirect("/work")
  } else {
    items.push(item)
    res.redirect("/");
  }
});

app.post("/delete", function (req, res) {
  const itemId = req.body.itemId;

  // todo; in todolist-template, call this method and pass array element in each element, 
  // then delete only the element of array causing the issue.

  // deploy inefficiente version by now

  // Item.findByIdAndRemove(itemId)
  //   .then(() => {
  //     console.log("Successfully deleted checked item.");
  //     res.redirect("/");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

app.get("/work", function (req, res) {
  res.render("todolist-templates", { listTitle: "Work", items: workItems });
});

// app.post("/works", function (req, res) {
//   console.log(req.body)
//   console.log("Estoy en post Works")

//   let item = req.body.newitem;
//   workItems.push(item)
//   res.redirect("/work");

// });

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
