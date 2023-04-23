const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});

app.post("/:objeto", function (req, res) {
  const objeto = req.body;

  res.json(objeto);
  console.log(objeto);
});
