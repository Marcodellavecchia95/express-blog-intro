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

// STORE
router.post("/", (req, res) => {
  res.json({
    description: "Creazione di un nuovo elemento",
  });
});

// UPDATE
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json({
    description: `Modifica dell'elemento ${id}`,
  });
});

// MODIFY
router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json({
    description: `Modifica parziale dell'elemento ${id}`,
  });
});

module.exports = router;
