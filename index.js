const express = require("express");
const app = express();
app.use(express.json());

let { getBooks, getBookById, getReviews, getReviewById } = require("./book.js");

app.get("/books", async (req, res) => {
  try {
    const books = await getBooks();
    if (books.length === 0) {
      return res.status(404).json({ error: "No Book Found" }); 
    }
    return res.status(200).json(books); 
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" }); 
  }
});

app.get("/books/details/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const book = await getBookById(id);
    if (!book || book.length === 0) {
      return res.status(404).json({ error: "No Book Found" }); 
    }
    return res.status(200).json(book); 
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" }); 
  }
});

app.get("/reviews", async (req, res) => {
  try {
    const reviews = await getReviews();
    if (reviews.length === 0) {
      return res.status(404).json({ error: "No Review Found" }); 
    }
    return res.status(200).json(reviews); 
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" }); 
  }
});

app.get("/reviews/details/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const review = await getReviewById(id);
    if (!review || review.length === 0) {
      return res.status(404).json({ error: "No Review Found" }); 
    }
    return res.status(200).json(review); 
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" }); 
  }
});

module.exports = { app };
