import express from 'express';
import pool from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota para obter todos os usuários
app.get('/users', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, Books, sales, pages FROM users');
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar livro' });
  }
});

// Rota para adicionar um novo usuário
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const queryText = 'INSERT INTO users(SELECT id, Book name, Author, pages FROM users) VALUES($1, $2) RETURNING *';
    const { rows } = await pool.query(queryText, [name, email]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar usuário' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});