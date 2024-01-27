const Livre = require('../models/livre')

const controllerLivre = {

  createBook: async (req, res) => {
    try {
      const bookData = req.body;
      await Livre.createBook(bookData);
      res.send("Livre ajouté avec succès");
    } catch (err) {
      console.error(err);
      res.status(500).send("Erreur lors de l'ajout du livre");
    }
  },

  updateBook: async (req, res) => {
    try {
      const bookData = req.body;
      const bookId = req.params.id;
      await Livre.updateBook(bookId, bookData);
      res.send("Livre mise à jour avec succès");
    } catch (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la mise à jour du livre");
    }
  },

  deleteBook: async (req, res) => {
    try {
      const bookId = req.params.id;
      await Livre.deleteBook(bookId);
      res.send("Livre supprimé avec succès");
    } catch (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la suppression du livre");
    }
  },

  getAllBooks: async (req, res) => {
    try {
      const result = await Livre.getAllBooks();
      if (result) {
        res.json(result);
      } else {
        res.status(500).send("Aucun livre disponible");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la requête");
    }
  },

  getBookByTitle: async (req, res) => {
    try {
      const bookTitle = req.params.title;
      const result = await Livre.getBookByTitle(bookTitle);
      if (result) {
        res.json(result);
      } else {
        res.status(500).send("Aucun livre ne correspond à votre recherche");
      }

    } catch (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la requête");
    }
  }
}
module.exports = controllerLivre;