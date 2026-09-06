import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:5000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const loadTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;

    await axios.post(API, { title, description });

    setTitle("");
    setDescription("");

    loadTasks();
  };

  const changeStatus = async (id, status) => {
    await axios.put(`${API}/${id}`, { status });
    loadTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    loadTasks();
  };

  return (
    <div className="container">
      <h1>AI Task Manager</h1>

      <input
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={addTask}>Добавить</button>

      <table>
        <thead>
          <tr>
            <th>Задача</th>
            <th>Описание</th>
            <th>Статус</th>
            <th>Удалить</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>

              <td>
                <select
                  value={task.status}
                  onChange={(e) =>
                    changeStatus(task.id, e.target.value)
                  }
                >
                  <option value="new">new</option>
                  <option value="in_progress">in_progress</option>
                  <option value="done">done</option>
                </select>
              </td>

              <td>
                <button onClick={() => deleteTask(task.id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default App;