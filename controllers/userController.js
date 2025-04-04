const UserModel = require("../models/userModel");

const UserController = {
  listar: async (req, res) => {
    try {
      const usuarios = await UserModel.listar();
      res.json(usuarios); 
    } catch (err) {
      res.status(500).json({ message: "Erro ao carregar usuários", error: err });
    }
  },
  
  buscarPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const usuario = await UserModel.buscarPorId(id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (err) {
      res.status(500).json({ message: "Erro ao buscar usuário", error: err });
    }
  },
  criar: async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
      if (!nome || !email || !senha) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
      }
      await UserModel.criar(nome, email, senha);
      res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: "Erro ao criar usuário", error: err });
    }
  },
  atualizar: async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    try {
      await UserModel.atualizar(id, nome, email, senha);
      res.json({ message: "Usuário atualizado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: "Erro ao atualizar usuário", error: err });
    }
  },
  deletar: async (req, res) => {
    const { id } = req.params;
    try {
      await UserModel.deletar(id);
      res.json({ message: "Usuário deletado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: "Erro ao deletar usuário", error: err });
    }
  }
};

module.exports = UserController;
