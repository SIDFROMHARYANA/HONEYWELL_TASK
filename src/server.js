const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { findPaths, findShortestPath } = require("./components/Pathfinder"); // You need to implement this logic

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "build")));


 
app.get("/cities", (req, res) => {

  const cities = require("./src/map.json");
  
  res.json(cities);
});


app.post("/find-paths", (req, res) => {
  
  const { cities } = req.body;
  const paths = findPaths(cities);
  const shortestPath = findShortestPath(paths);
  
  res.json({ paths, shortestPath });
});

app.listen(port, () => {
  console.log(`Server is running on port 500`);
});
