const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}`;
const { bacheca } = require("./bacheca");
const postsRouter = require("./routers/posts");

app.use(express.static("public"));

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server listening on ${appUrl}`);
});
