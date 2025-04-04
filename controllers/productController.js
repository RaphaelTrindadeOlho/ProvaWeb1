const ProductModel = require("../models/productModel");

const ProductController = {
  listar: async (req, res) => {
    try {
      const produtos = await ProductModel.listar();
      res.json(produtos); 
    } catch (err) {
      res.status(500).json({ message: "Erro ao carregar produtos", error: err });
    }
  },
  buscarPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const produto = await ProductModel.buscarPorId(id);
      if (produto) {
        res.json(produto);
      } else {
        res.status(404).json({ message: "Produto não encontrado" });
      }
    } catch (err) {
      res.status(500).json({ message: "Erro ao buscar produto", error: err });
    }
  },
  criar: async (req, res) => {
    const { nome, preco, estoque } = req.body;
    try {
      if (nome.length < 3 || preco <= 0 || estoque < 0) {
        return res.status(400).json({ message: "Dados inválidos!" });
      }
      await ProductModel.criar(nome, preco, estoque);
      res.status(201).json({ message: "Produto criado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: "Erro ao criar produto", error: err });
    }
  },
  atualizar: async (req, res) => {
    const { id } = req.params;
    const { nome, preco, estoque } = req.body;
    try {
      await ProductModel.atualizar(id, nome, preco, estoque);
      res.json({ message: "Produto atualizado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: "Erro ao atualizar produto", error: err });
    }
  },
  deletar: async (req, res) => {
    const { id } = req.params;
    try {
      await ProductModel.deletar(id);
      res.json({ message: "Produto deletado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: "Erro ao deletar produto", error: err });
    }
  },
  
  
};

module.exports = ProductController;
