const express = require("express");
const router = express.Router();

const controllerLivre = require('../controllers/controllerLivre')

router.get("/", (req, res) => {
  res.send("Bienvenue sur mon exercice d'API réalisée avec Express js et MySQL")
})
router.get("/books", controllerLivre.getAllBooks);
router.get("/book/:title", controllerLivre.getBookByTitle);
router.post("/create-book", controllerLivre.createBook);
router.post("/update-book/:id", controllerLivre.updateBook);
router.delete("/delete-book/:id", controllerLivre.deleteBook);

module.exports = router;
