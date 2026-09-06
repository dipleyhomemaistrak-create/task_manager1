# AI Task Manager

Простое веб-приложение для управления задачами.

## Что умеет приложение

* Добавлять новые задачи.
* Просматривать список задач.
* Изменять статус задачи (`new`, `in_progress`, `done`).
* Удалять задачи.
* Выгружать все задачи в CSV с помощью Python.

## Структура проекта

### backend

* `server.js` — запуск сервера Express.
* `db.js` — подключение к PostgreSQL.
* `routes.js` — REST API (создание, получение, изменение и удаление задач).

### frontend

* `src/App.js` — интерфейс приложения.
* `src/App.css` — оформление страницы.
* `src/index.js` — запуск React-приложения.

### database

* `init.sql` — SQL-скрипт для создания таблицы `tasks`.

### python

* `export_tasks.py` — экспорт всех задач из PostgreSQL в файл `tasks.csv`.

## Как запустить проект

### 1. Backend

```bash
cd backend
npm install
node server.js
```

Сервер запускается по адресу: `http://localhost:5000`

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

Приложение открывается по адресу: `http://localhost:3000`

### 3. PostgreSQL

Создать базу данных `task_manager` и выполнить файл `database/init.sql`.

### 4. Python

```bash
cd python
pip install psycopg2 pandas
python export_tasks.py
```

После запуска создаётся файл `tasks.csv` со всеми задачами.

## Как проверить работоспособность

1. Запустить PostgreSQL.
2. Запустить backend (`node server.js`).
3. Запустить frontend (`npm start`).
4. Открыть `http://localhost:3000`.
5. Создать новую задачу.
6. Изменить её статус.
7. Удалить задачу.
8. Запустить `export_tasks.py` и убедиться, что появился файл `tasks.csv`.
