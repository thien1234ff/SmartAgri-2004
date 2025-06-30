import pandas as pd

# Đọc file JSON
df = pd.read_json("database.json")

# Xuất ra CSV
df.to_csv("data.csv", index=False)
