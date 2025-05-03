# Sentiment-Analysis-Trend-Dashboard
The project is based on  analyze text input  or sentiment and displays trends over time.

## Project Introduction

This project aims to develop sentiment analysis and a trend dashboard based on analyzing the emotional tone of the news content in real time. The system basically works as when the user inputs the data, such as news in string format, ex, news as a text or it can be a headline of a news, the feedback will be delivered as to whether the user input is positive, negative, or neutral, with a score on it with displaying the output, the dashboard will appear on the UI visualizing the charts and graph about the insights generated from the sentiments.

The project divided under main three sections as following,

•	Model & Database Layer – Trains a sentiment classification model and manages persistent storage of analyzed results.
•	API Layer – Provides endpoints for analyzing input text and retrieving sentiment history using FastAPI.
•	Frontend Layer – A clean and responsive UI built with HTML, CSS, and JavaScript that visualizes results using Chart.js.


## Section 01  - Model And Database Layer

The Model & Database Layer is the core intelligence behind the application. It handles the sentiment classification logic and persistent storage of analyzed results, ensuring the system can both respond in real-time and support historical data visualizations.

### Sentiment Analysis Model

The application uses a fine-tuned transformer model (e.g., distilbert-base-uncased-finetuned-sst-2-english) from HuggingFace’s Transformers library.

This model processes user-inputted news text and outputs:
•	A sentiment label: POSITIVE, NEGATIVE, or NEUTRAL
•	A confidence score: indicating how sure the model is about its prediction
•	The model provides fast and accurate predictions, optimized for short-form text like news headlines or summaries.

### Database

The database layer of this project is built using SQLite, a file-based relational database that offers simplicity and portability. The database file is named news_sentiment.db, and it includes a single table called news_data. This table is created and populated in the load_and_analyze.py script, where pre-existing sentiment-labeled data is stored. If an old version of the database exists, it is first removed to ensure a clean state before storing new records using the to_sql() function from Pandas. This operation replaces the entire content of the news_data table with fresh sentiment analysis results. The structure typically includes fields like the news text, predicted label, confidence score, and optional metadata such as timestamp.
To support visualization and interaction from the frontend, the get_all_news() function defined in database.py connects to this SQLite database, queries all records using SQL, and returns the result in a dictionary format. This allows seamless integration with API endpoints like /history for displaying meaningful historical sentiment data on the dashboard.


## Section 02 - API Layer

In service in the backend of this project is build using FastAPI, which is what powers the sentiment analysis engine while processing user inputs inorder for it to predict sentiment and provide the serving results to the frontend dashboard in real-time. This basically is the connecting or the transport means to connect the analysis by taking in the inputs and then taking the results back to the frontend.


Modules used for section 02
- FastAPI - used for the API routing and server
- Pydantic - this was set in place in order to make sure that when a user enters their input that it is correct
- sqlite3 - in order to connect with the array, which contains all the results that are saved
- CORS Middleware- allows the frontend is connect with the backend


Process description
- The backend server was built using the FastAPI framework, as mentioned before
- API routes were also created, which include POST/analyse, GET/history and GET/news
- The streamed data is being saved in an array, which is then called through a JavaScript for analysis
- The input data was then validated with Pydantic as mentioned in the modules used part



## Section 03 - Frontend Layer (Dashboard UI)

This frontend dashboard allows users to input text, analyze its sentiment using a backend API, and visualize sentiment trends dynamically using various charts. Built using plain HTML, CSS, and JavaScript, the UI is simple, clean, and responsive.

📌 Features

✅ Responsive and intuitive web UI using HTML, CSS, and JavaScript

✅ Sentiment Analyzer Card:
Text area input
"Analyze" button
 Real-time sentiment result display
 
✅ Dynamic Chart Visualizations powered by Chart.js:

Pie Chart – Overall sentiment distribution
Bar Chart – Sentiment confidence scores
Radar Chart – Comparison of multiple inputs
Doughnut Chart – Similar to pie, with aesthetic variation

✅ Integration with backend /analyze endpoint using the Fetch API

✅ Maintains sentiment analysis history (no timestamp tracking required)

✅ Dashboard styling optimized for clarity and usability


![WhatsApp Image 2025-05-03 at 19 28 00_510cfbce](https://github.com/user-attachments/assets/c2235135-52d1-4d4a-aff9-5b46a74d5f83)



![WhatsApp Image 2025-05-03 at 19 27 37_34a6d700](https://github.com/user-attachments/assets/5e477b7b-bdb6-40a5-9e20-2af3ba165add)



