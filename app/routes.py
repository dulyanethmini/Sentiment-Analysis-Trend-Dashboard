from fastapi import APIRouter
from app.sentiment import analyze_sentiment
from app.database import get_all_news

router = APIRouter()

@router.get("/news")
def fetch_news_data():
    return {"data": get_all_news()}

@router.get("/analyze")
def analyze(text: str):
    result = analyze_sentiment(text)
    return {"text": text, "sentiment": result}
