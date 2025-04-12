document.getElementById('submit-journal').addEventListener('click', async () => {
  const userInput = document.getElementById('journal-input').value;
  const responseDiv = document.getElementById('ai-response');

  if (!userInput.trim()) {
    responseDiv.textContent = "Please share your thoughts to start the conversation.";
    return;
  }

  responseDiv.textContent = "Loading...";
  
  try {
    const response = await fetch('/api/ai-companion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: userInput })
    });
    const data = await response.json();
    responseDiv.textContent = data.reply || "Something went wrong, please try again.";
  } catch (error) {
    responseDiv.textContent = "Error connecting to the AI companion.";
  }
});

// Mood Tracker Example
const ctx = document.getElementById('mood-chart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [{
      label: 'Mood Tracker',
      data: [3, 4, 2, 5, 4],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      fill: false,
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Days' } },
      y: { title: { display: true, text: 'Mood (1-5)' }, min: 1, max: 5 }
    }
  }
});
