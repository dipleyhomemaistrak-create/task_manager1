Вот обновленный README с учетом всех зависимостей:

markdown
# AI Task Manager

Веб-приложение для управления задачами.

## Возможности

* Добавление новых задач
* Просмотр списка задач
* Изменение статуса (`new`, `in_progress`, `done`)
* Удаление задач
* Экспорт задач в CSV через Python

## Структура проекта

### backend
* `server.js` — запуск Express сервера
* `db.js` — подключение к PostgreSQL
* `routes.js` — REST API (CRUD операции с задачами)

### frontend
* `src/App.js` — основной компонент приложения
* `src/App.css` — стили
* `src/index.js` — точка входа React

### database
* `init.sql` — SQL-скрипт создания таблицы `tasks`

### python
* `export_tasks.py` — экспорт задач из PostgreSQL в `tasks.csv`

## Запуск проекта

### Backend
```bash
cd backend
npm install
node server.js
Сервер: http://localhost:5000

Frontend
bash
cd frontend
npm install
npm install axios
npm start
Приложение: http://localhost:3000

PostgreSQL
Создать базу task_manager и выполнить database/init.sql

Python
bash
cd python
pip install psycopg2 pandas
python export_tasks.py
Создаст tasks.csv со всеми задачами

Проверка
Запустить PostgreSQL

Запустить backend

Запустить frontend

Открыть http://localhost:3000

Создать, изменить, удалить задачу

Запустить export_tasks.py и проверить tasks.csv

text

**Что добавлено:**
- `npm install axios` для frontend
- Уточнены команды установки зависимостей
