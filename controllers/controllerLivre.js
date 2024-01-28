const Livre = require('../models/livre')

const controllerLivre = {

  createBook: async (req, res) => {
    try {
      const bookData = req.body;
      if (!bookData) {
        return res.status(400).json({ error: "Le corps de la requête est incomplet"})
      }
      await Livre.createBook(bookData);
      res.status(201).json({ message: "Livre ajouté avec succès" });
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de l'ajout du livre" });
    }
  },

  updateBook: async (req, res) => {
    try {
      const bookData = req.body;
      const bookId = req.params.id;
      if (!bookData) {
        return res.status(400).json({ error: "Le corps de la requête est incomplet"})
      }
      await Livre.updateBook(bookId, bookData);
      res.json({ message: "Livre mise à jour avec succès" });
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la mise à jour du livre" });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const bookId = req.params.id;
      await Livre.deleteBook(bookId);
      res.json({ message: "Livre supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la suppression du livre" });
    }
  },

  getAllBooks: async (req, res) => {
    try {
      const result = await Livre.getAllBooks();
      if (!result) {
        return res.status(404).json({ message: "Aucun livre disponible" });
      }
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la requête" });
    }
  },

  getBookByTitle: async (req, res) => {
    try {
      const bookTitle = req.params.title;
      const result = await Livre.getBookByTitle(bookTitle);
      if (!result) {
        return res.status(404).json({ error: "Aucun livre ne correspond à votre recherche" });
      }
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "Erreur lors de la requête" });
    }
  }
}
module.exports = controllerLivre;