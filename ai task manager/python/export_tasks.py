import psycopg2
import pandas as pd
import os

print("=== НОВЫЙ ФАЙЛ ЗАПУЩЕН ===")

conn = psycopg2.connect(
    host="localhost",
    port=5432,
    database="task_manager",
    user="postgres",
    password="djasdja"
)

print("PostgreSQL подключен!")

df = pd.read_sql("SELECT * FROM tasks", conn)

print("Получено задач:", len(df))

file_path = os.path.join(os.getcwd(), "tasks.csv")

df.to_csv(file_path, index=False, encoding="utf-8-sig")

print("=== CSV СОЗДАН ===")
print(file_path)
print("Существует:", os.path.exists(file_path))

conn.close()