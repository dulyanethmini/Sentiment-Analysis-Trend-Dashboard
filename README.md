# Sentiment-Analysis-Trend-Dashboard
The project is based on  analyze text input  or sentiment and displays trends over time.

## Project Introduction

This project aims to develop sentiment analysis and a trend dashboard based on analyzing the emotional tone of the news content in real time. The system basically works as when the user inputs the data, such as news in string format, ex, news as a text or it can be a headline of a news, the feedback will be delivered as to whether the user input is positive, negative, or neutral, with a score on it with displaying the output, the dashboard will appear on the UI visualizing the charts and graph about the insights generated from the sentiments.

The project divided under main three sections as following,

Model & Database Layer – Trains a sentiment classification model and manages persistent storage of analyzed results.
API Layer – Provides endpoints for analyzing input text and retrieving sentiment history using FastAPI.
Frontend Layer – A clean and responsive UI built with HTML, CSS, and JavaScript that visualizes results using Chart.js.


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


![WhatsApp Image 2025-05-03 at 19 28 00_510cfbce](https://github.com/user-attachments/assets/c2235135-52d1-4d4a-aff9-5b46a74d5f83)



✅ Dashboard styling optimized for clarity and usability


