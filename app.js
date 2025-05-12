const express = require("express");
const app = express();
const port = 3000;
const { posts } = require("./function");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json(posts());
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
