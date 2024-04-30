const express = require("express");
const cors = require("cors");
const app = express();
const port = 3100;

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());

let dataStorage = {
  books: [{ title: "Sample Book", author: "John Doe", genre: "Fiction" }],
  users: [{ username: "user1", email: "user1@example.com" }],
  orders: [],
};

app.get("/data/:category", (req, res) => {
  const category = req.params.category;
  if (dataStorage[category]) {
    res.json(dataStorage[category]);
  } else {
    res.status(404).send("Category not found");
  }
});

app.post("/data/:category", (req, res) => {
  const category = req.params.category;
  if (!dataStorage[category]) {
    dataStorage[category] = [];
  }
  dataStorage[category].push(req.body);
  res.status(200).send(`Data added to ${category}`);
});

app.delete("/data/:category/:index", (req, res) => {
  const { category, index } = req.params;
  if (dataStorage[category] && dataStorage[category].length > index) {
    dataStorage[category].splice(index, 1);
    res.status(200).json({ message: "Item deleted successfully" });
  } else {
    res.status(404).send("Item not found");
  }
});

app.delete("/data/:category", (req, res) => {
  const { category } = req.params;
  if (dataStorage.hasOwnProperty(category)) {
    dataStorage[category] = [];
    res
      .status(200)
      .json({
        message:
          "All items in category '" + category + "' deleted successfully",
      });
  } else {
    res.status(404).send("Category not found");
  }
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
