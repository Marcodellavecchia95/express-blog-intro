const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
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
  res.send(posts);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
