const express = require("express");
const router = express.Router();
const db = require("./db");

// Получить все задачи
router.get("/tasks", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM tasks ORDER BY id DESC"
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Ошибка получения задач:", error);
    res.status(500).json({
      error: "Ошибка сервера"
    });
  }
});

// Создать задачу
router.post("/tasks", async (req, res) => {
  const { title, description } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Ошибка создания задачи:", error);
    res.status(500).json({
      error: "Ошибка создания"
    });
  }
});

// Изменить статус
router.put("/tasks/:id", async (req, res) => {
  const { status } = req.body;

  try {
    const result = await db.query(
      "UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *",
      [status, req.params.id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Ошибка обновления:", error);
    res.status(500).json({
      error: "Ошибка обновления"
    });
  }
});

// Удалить задачу
router.delete("/tasks/:id", async (req, res) => {
  try {
    await db.query(
      "DELETE FROM tasks WHERE id = $1",
      [req.params.id]
    );

    res.json({
      message: "Удалено"
    });
  } catch (error) {
    console.error("Ошибка удаления:", error);
    res.status(500).json({
      error: "Ошибка удаления"
    });
  }
});

module.exports = router;