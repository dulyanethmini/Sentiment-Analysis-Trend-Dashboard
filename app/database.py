import sqlite3
import pandas as pd

DB_PATH = "news_sentiment.db"

def get_all_news():
    """
    Fetch all records from the news_data table in the SQLite DB.
    """
    try:
        conn = sqlite3.connect(DB_PATH)
        df = pd.read_sql_query("SELECT * FROM news_data", conn)
        conn.close()
        return df.to_dict(orient="records")
    except Exception as e:
        raise RuntimeError(f"Failed to read from database: {e}")
