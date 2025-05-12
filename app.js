const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  const posts = [
    {
      title: "",
      content: "",
      image: "",
      tags: ["", "", ""],
    },
    {
      title: "",
      content: "",
      image: "",
      tags: ["", "", ""],
    },
    {
      title: "",
      content: "",
      image: "",
      tags: ["", "", ""],
    },
    {
      title: "",
      content: "",
      image: "",
      tags: ["", "", ""],
    },
    {
      title: "",
      content: "",
      image: "",
      tags: ["", "", ""],
    },
  ];
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
