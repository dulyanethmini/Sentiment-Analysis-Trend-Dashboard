let history = [];
let chartInstances = [];

async function analyzeSentiment() {
    const text = document.getElementById("textInput").value;

    if (!text.trim()) {
        alert("Please enter a sentence.");
        return;
    }

    const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });

    const data = await response.json();
    const result = data.sentiment;
    const resultDiv = document.getElementById("result");

    let labelClass = result.label === "POSITIVE" ? "positive" :
                     result.label === "NEGATIVE" ? "negative" : "neutral";

    resultDiv.innerHTML = `Sentiment: <span class="${labelClass}">${result.label}</span><br>
                           Confidence: ${(result.score * 100).toFixed(2)}%`;

    // Save to local array
    history.push({
        label: result.label,
        score: result.score
    });

    renderCharts();
    document.getElementById("dashboard").style.display = "block";
}

function avg(arr) {
    return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
}

function renderCharts() {
    const labels = history.map(h => h.label);
    const scores = history.map(h => parseFloat(h.score));

    const pos = labels.filter(l => l === "POSITIVE");
    const neg = labels.filter(l => l === "NEGATIVE");
    const neu = labels.filter(l => l === "NEUTRAL");

    const posScores = scores.filter((_, i) => labels[i] === "POSITIVE");
    const negScores = scores.filter((_, i) => labels[i] === "NEGATIVE");
    const neuScores = scores.filter((_, i) => labels[i] === "NEUTRAL");

    chartInstances.forEach(chart => chart.destroy());
    chartInstances = [];

    chartInstances.push(new Chart(document.getElementById("pieChart"), {
        type: 'pie',
        data: {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [{
                data: [pos.length, neg.length, neu.length],
                backgroundColor: ['green', 'red', 'gray']
            }]
        },
        options: {
            plugins: {
                title: { display: true, text: 'Sentiment Distribution' }
            }
        }
    }));

    chartInstances.push(new Chart(document.getElementById("barChart"), {
        type: 'bar',
        data: {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [{
                label: 'Sentiment Count',
                data: [pos.length, neg.length, neu.length],
                backgroundColor: ['green', 'red', 'gray']
            }]
        },
        options: {
            plugins: {
                title: { display: true, text: 'Sentiment Count' }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    }));

    chartInstances.push(new Chart(document.getElementById("radarChart"), {
        type: 'radar',
        data: {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [{
                label: 'Average Confidence',
                data: [avg(posScores) * 100, avg(negScores) * 100, avg(neuScores) * 100],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'blue'
            }]
        },
        options: {
            plugins: {
                title: { display: true, text: 'Confidence Radar' }
            },
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    }));

    chartInstances.push(new Chart(document.getElementById("doughnutChart"), {
        type: 'doughnut',
        data: {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [{
                data: [pos.length, neg.length, neu.length],
                backgroundColor: ['green', 'red', 'gray']
            }]
        },
        options: {
            plugins: {
                title: { display: true, text: 'Sentiment Doughnut' }
            }
        }
    }));
}
