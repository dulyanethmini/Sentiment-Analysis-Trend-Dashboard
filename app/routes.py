from fastapi import APIRouter
from app.sentiment import analyze_sentiment
from app.database import get_all_news
from pydantic import BaseModel

router = APIRouter()

class TextRequest(BaseModel):
    text: str

@router.post("/analyze")
def analyze(request: TextRequest):
    result = analyze_sentiment(request.text)
    return {"text": request.text, "sentiment": result}

@router.get("/news")
def fetch_news_data():
    return {"data": get_all_news()}

@router.get("/history")
def sentiment_history():
    news_data = get_all_news()
    history = []

    for item in news_data:
        history.append({
            "text": item.get("text", ""),
            "label": item.get("label", ""),
            "score": item.get("score", 0),
            "timestamp": item.get("timestamp", "")  # Optional if timestamp exists
        })

    return {"sentiments": history}
