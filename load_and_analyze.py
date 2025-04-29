import pandas as pd
from transformers import pipeline
from tqdm import tqdm

tqdm.pandas()

# Load model
classifier = pipeline("sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english")

# Load dataset (test with 50 headlines only)
df = pd.read_json('data/News_Category_Dataset_v3.json', lines=True).head(1000)

# Define function
def analyze_sentiment(text):
    result = classifier(text)[0]
    return result["label"], result["score"]

# Apply with progress bar
df[['sentiment', 'score']] = df['headline'].progress_apply(lambda x: pd.Series(analyze_sentiment(x)))

# Save to CSV for now
df.to_csv('data/sentiment_output.csv', index=False)

print("✅ Sentiment analysis complete. Results saved.")
