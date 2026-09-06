const db = require("./db");

async function test() {
  try {
    const result = await db.query("SELECT current_user, current_database()");
    console.log("POSTGRESQL OK:");
    console.log(result.rows);

    const tasks = await db.query("SELECT * FROM tasks");
    console.log("TASKS OK:");
    console.log(tasks.rows);

    process.exit(0);
  } catch (error) {
    console.error("ОШИБКА:");
    console.error(error);
    process.exit(1);
  }
}

test();