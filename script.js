const data = [
  { "CLASS NAME": "AGRICULTURAL DRY LAND", "LOSS": 54.4464, "GAIN": 61.2054, "CHANGE": 0.276580857, "UNCHANGED": 24.4377 },
  { "CLASS NAME": "HIGHLY DENCE URBAN", "LOSS": 233.3898, "GAIN": 239.9409, "CHANGE": 0.036114929, "UNCHANGED": 181.3959 },
  { "CLASS NAME": "LOW DENCE URBAN", "LOSS": 153.36, "GAIN": 169.6887, "CHANGE": 0.20547697, "UNCHANGED": 79.4673 },
  { "CLASS NAME": "SHRUB", "LOSS": 71.7093, "GAIN": 43.9452, "CHANGE": -1.103405108, "UNCHANGED": 25.1622 },
  { "CLASS NAME": "VEGETATION", "LOSS": 80.3943, "GAIN": 79.164, "CHANGE": -0.029491716, "UNCHANGED": 41.7168 },
  { "CLASS NAME": "WATER BODIES", "LOSS": 11.5875, "GAIN": 10.9431, "CHANGE": -0.073974584, "UNCHANGED": 8.7111 }
];

// Table Rendering
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change Index</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row["CLASS NAME"]}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row.CHANGE.toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Grouped Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart (Dropdown Controlled)
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGED);
  const labels = data.map(d => d["CLASS NAME"]);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial Load
updatePieChart("Changed");

// Dark Mode Toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});













  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  