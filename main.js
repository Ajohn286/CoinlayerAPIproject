const apiKey = 'dc9bdffdb593c25c21ede179876115f2';

// Function to fetch historical data for a specific date
async function fetchHistoricalData(date) {
  try {
    const response = await fetch(`https://api.coinlayer.com/${date}?access_key=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching historical data for ${date}:`, error);
    return null;
  }
}

// Function to display historical data
function displayHistoricalData(data) {
  const dataContainer = document.getElementById('dataContainer');
  if (data) {
    const html = `
      <h2>Historical Data:</h2>
      <p>Date: ${data.date}</p>
      <p>Currency: ${data.currency}</p>
      <p>Rate: ${data.rates.USD}</p>
    `;
    dataContainer.innerHTML = html;
  } else {
    dataContainer.innerHTML = '<p>Error retrieving historical data.</p>';
  }
}

// Handle form submission
document.getElementById('dateForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const date = document.getElementById('date').value;
  const data = await fetchHistoricalData(date);
  displayHistoricalData(data);
});

