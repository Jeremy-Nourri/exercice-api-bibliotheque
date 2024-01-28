const connection = require('../config/db');

class Livre {
  static async createBook(bookData) {
    await connection.promise().query('INSERT INTO livres SET ?', bookData);
  }

  static async updateBook(bookId, bookData) {
    await connection.promise().query('UPDATE livres SET ? WHERE id= ?', [bookData, bookId]);
  }

  static async deleteBook(bookId) {
    await connection.promise().query('DELETE FROM livres WHERE id= ?', bookId);
  }

  static async getAllBooks() {
    const [rows] = await connection.promise().query('SELECT * FROM livres');
    console.log(rows);
    return rows;
  }

  static async getBookByTitle(bookTitle) {
    const result = await connection.promise().query('SELECT * FROM livres WHERE titre= ?', bookTitle);
    console.log(result[0]);
    return result[0][0];
  }
}

module.exports = Livre;