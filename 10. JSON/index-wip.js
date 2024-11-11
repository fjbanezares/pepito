import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let recipe_ingredients_object

app.get("/", (req, res) => {
  // recipe variable will be see by index-wip.ejs
  // ejs will access name of recipe with a conditional
  // ejs will populate a list with recipe ingrdients by accessing fields in the json object
  console.log(recipe_ingredients_object);
  res.render("index-wip.ejs", { recipe: recipe_ingredients_object });
  // when rendering the ejs remember <%= recipe['name'] %>
  // and  <% if (recipe==null) { %> constructs
  // remember notation to access subelements in JSON 
  // and remember how to iterate a JSON array
});

app.post("/recipe", (req, res) => {
  // because in the main.ejs there is a set of buttons with a choice name we get its value
  // you can see it can take values chicken, beef, fish
  let choice_taken_in_form = req.body.choice;
  console.log(choice_taken_in_form);
  switch (choice_taken_in_form) {
    case "chicken":
      recipe_ingredients_object = JSON.parse(recipeJSON)[0];
      break;
    case "beef":
      recipe_ingredients_object = JSON.parse(recipeJSON)[1];
      break;
    case "fish":
      recipe_ingredients_object = JSON.parse(recipeJSON)[2];
      break;
    default:
      break;
  }
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.

  // now we give responsibility to root endpoint that will make use of global variable
  // it will alter the way ejs is rendered by passing this variable along
  res.redirect("/")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

