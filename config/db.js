const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

(async function connectDatabase() {
  try {
    await connection.promise().connect();
    console.log("Connecté à la base de données MySQL");
  } catch (err) {
    console.error("Erreur de connexion à la base de données:", err);
  }
})();


module.exports = connection;