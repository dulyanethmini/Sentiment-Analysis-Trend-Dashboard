from transformers import pipeline

# Load the Hugging Face sentiment analysis pipeline
classifier = pipeline("sentiment-analysis")

def analyze_sentiment(text):
    """
    Analyze sentiment for a given text input.
    Returns a dictionary with sentiment label and score.
    """
    result = classifier(text)[0]
    return {
        "label": result["label"],
        "score": round(result["score"], 4)
    }
