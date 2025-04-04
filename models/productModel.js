const conexao = require("../config/db");

const ProductModel = {
  listar: () => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM produtos";
      conexao.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  criar: (nome, preco, estoque) => {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)";
      conexao.query(sql, [nome, preco, estoque], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  atualizar: (id, nome, preco, estoque) => {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE produtos SET nome = ?, preco = ?, estoque = ? WHERE id = ?";
      conexao.query(sql, [nome, preco, estoque, id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  deletar: (id) => {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM produtos WHERE id = ?";
      conexao.query(sql, [id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  buscarPorId: (id) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM produtos WHERE id = ?";
      conexao.query(sql, [id], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  }
};

module.exports = ProductModel;
