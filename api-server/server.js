const express = require("express");
const cors = require("cors");
const app = express();
const port = 3100;

app.use(cors()); // Povoliť všetky CORS požiadavky
app.use(express.json());

// Skladovanie dát podľa kategórií
let dataStorage = {
  books: [],
  users: [],
  orders: [],
};

// Získanie dát podľa kategórie
app.get("/data/:category", (req, res) => {
  const category = req.params.category;
  if (dataStorage[category]) {
    res.json(dataStorage[category]);
  } else {
    res.status(404).send("Category not found");
  }
});

// Pridanie dát do konkrétnej kategórie
app.post("/data/:category", (req, res) => {
  const category = req.params.category;
  if (!dataStorage[category]) {
    dataStorage[category] = [];
  }
  dataStorage[category].push(req.body);
  res.status(200).send(`Data added to ${category}`);
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
