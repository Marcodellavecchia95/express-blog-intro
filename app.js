const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  const posts = [
    {
      title: "Ciambellone",
      content: "",
      image: "/img/ciambellone.jpeg",
      tags: ["", "", ""],
    },
    {
      title: "Cracker alla barbabietola",
      content: "",
      image: "/img/cracker_barbabietola.jpeg",
      tags: ["", "", ""],
    },
    {
      title: "Pane fritto dolce",
      content: "",
      image: "/img/pane_fritto_dolce",
      tags: ["", "", ""],
    },
    {
      title: "Pasta alla barbabietola",
      content: "",
      image: "/img/pasta_barbabietola.jpeg",
      tags: ["", "", ""],
    },
    {
      title: "Torta paesana",
      content: "",
      image: "/img/torta_paesana.jpeg",
      tags: ["", "", ""],
    },
  ];
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
