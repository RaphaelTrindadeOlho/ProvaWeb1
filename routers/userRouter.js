const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/usuarios", UserController.listar);
router.get('/usuarios/:id', UserController.buscarPorId);
router.post("/usuarios", UserController.criar);
router.put("/usuarios/:id", UserController.atualizar);
router.delete("/usuarios/:id", UserController.deletar);

module.exports = router;
