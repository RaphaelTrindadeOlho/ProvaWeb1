const conexao = require("../config/db");

const UserModel = {
  listar: () => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM usuarios";
      conexao.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  criar: (nome, email, senha) => {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
      conexao.query(sql, [nome, email, senha], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  atualizar: (id, nome, email, senha) => {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?";
      conexao.query(sql, [nome, email, senha, id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  deletar: (id) => {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM usuarios WHERE id = ?";
      conexao.query(sql, [id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  buscarPorId: (id) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM usuarios WHERE id = ?";
      conexao.query(sql, [id], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  }
};

module.exports = UserModel;
