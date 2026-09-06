# AI Task Manager

Веб-приложение для управления задачами.

## Возможности

1. Добавление новых задач
2. Просмотр списка задач
3. Изменение статуса (new, in_progress, done)
4. Удаление задач
5. Экспорт задач в CSV через Python

## Структура проекта

### backend
* server.js — запуск Express сервера
* db.js — подключение к PostgreSQL
* routes.js — REST API (CRUD операции с задачами)

### frontend
* src/App.js — основной компонент приложения
* src/App.css — стили
* src/index.js — точка входа React

### database
* init.sql — SQL-скрипт создания таблицы tasks

### python
* export_tasks.py — экспорт задач из PostgreSQL в tasks.csv

## Запуск проекта

### Backend
bash

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
в TASKS написать в строке и нажать play:

SELECT * FROM public.tasks
ORDER BY id ASC
 
Запустить backend
Запустить frontend
Открыть http://localhost:3000
Создать, изменить, удалить задачу
Запустить export_tasks.py и проверить tasks.csv

Что добавлено:
- npm install axios для frontend для возможности просматривания базы с любого ус-ва
- Уточнены команды установки зависимостей
- Изменен дизайн сайта, добавлены зеленый и красный цвет для простоты ориентирования
