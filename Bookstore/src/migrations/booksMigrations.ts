import pool from '../database';
import pool from '../database';

const createUsersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    Book name VARCHAR(100) NOT NULL,
    Author name VARCHAR(100) NOT NULL,
    Value VARCHAR (35) NOT NULL;

  ); `

    await client.query(queryText);
    console.log('Tabela "users" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    client.release();
  }
};

createUsersTable().then(() => process.exit(0));