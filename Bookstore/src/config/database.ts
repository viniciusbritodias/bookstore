import { Pool } from 'pg';

const connectionString = 'postgresql://postgres.nsprnejtwpspcahinolk:vini81928681@aws-0-sa-east-1.pooler.supabase.com:6543/postgres';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;