const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const db = mongoose.connect("mongodb://localhost/bookAPI");
// mongo bookAPI < booksJson.js (for creating dab in mongo from bookJson.js file)
const port = process.env.PORT || 3000;
const Book = require("./models/bookModel");
const bookRouter = require("./routes/bookRouter")(Book);

app.use(bodyParser.urlencoded({ estended: true }));
app.use(bodyParser.json());


app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("welcome to my API!");
});

app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
