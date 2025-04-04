const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");

dotenv.config();


app.use(express.json());
app.use(cors());  


app.use(productRouter);
app.use(userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
