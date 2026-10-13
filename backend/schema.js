'use strict';
const fs = require('node:fs/promises');
const path = require('node:path');
async function initializeSchema(pool) {
  if (!pool) return 'not_configured';
  const sql = await fs.readFile(path.join(__dirname,'schema.sql'),'utf8');
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query('SELECT pg_advisory_xact_lock(867530901)');
    await client.query(sql);
    await client.query('COMMIT');
    return 'ready';
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}
module.exports = {initializeSchema};
