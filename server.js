
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let nextProductId = 1; // Inicialize o próximo ID de produto como 1

// Middleware para análise de corpos de requisição
app.use(bodyParser.json());

// Rota para cadastrar um novo produto
app.post('/produtos', (req, res) => {
  const novoProduto = req.body;
  novoProduto.id = nextProductId++; // Atribua o próximo ID e incremente para o próximo produto
  res.json(novoProduto);
});

// Inicialize o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
