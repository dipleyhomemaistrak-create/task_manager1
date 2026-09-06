const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "task_manager",
  password: "awessome3",
  port: 2257,
});

module.exports = pool;