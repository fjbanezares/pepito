import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Javi</p>");
});

app.get("/contact", (req, res) => {
  s
  res.send("<h1>Contact Me</h1><p>Phone: +345466469</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
