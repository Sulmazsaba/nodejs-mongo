const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = mongoose.connect("mongodb://localhost/bookAPI");
// mongo bookAPI < booksJson.js (for creating dab in mongo from bookJson.js file)
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const Book = require("./models/bookModel");

bookRouter.route("/books").get((req, res) => {
  const { query } = req;
  Book.find(query, (err, books) => {
    if (err) {
      return res.send(err);
    }
    return res.json(books);
  });
});

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("welcome to my API!");
});

app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
