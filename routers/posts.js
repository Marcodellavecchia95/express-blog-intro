const express = require("express");
const router = express.Router();
const { bacheca } = require("../bacheca");
// INDEX
router.get("/", (req, res) => {
  res.json({
    description: "Ecco la lista degli elementi",
    data: bacheca,
  });
});

// SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json({
    description: "Ecco l'id dell'elemento cercato",
    data: id,
  });
});

module.exports = router;
