const pages = ['home','scores','stats'];
pages.forEach(id => {
  document.getElementById('btn' + id.charAt(0).toUpperCase() + id.slice(1))
    .addEventListener('click', () => showPage(id));
});

function showPage(page) {
  pages.forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById(page).classList.add('active');
}

const sampleMatches = [
  { teams: 'Team A vs Team B', date: '2025‑08‑10' },
  { teams: 'Team C vs Team D', date: '2025‑08‑12' }
];
const sampleStats = [
  { team: 'Team A', shots: 12, possession: '55%' },
  { team: 'Team B', shots: 8, possession: '45%' }
];

window.addEventListener('DOMContentLoaded', () => {
  const ul = document.getElementById('matchList');
  sampleMatches.forEach(m => {
    const li = document.createElement('li');
    li.textContent = `${m.teams} — ${m.date}`;
    ul.appendChild(li);
  });
  const tbody = document.querySelector('#statsTable tbody');
  sampleStats.forEach(s => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${s.team}</td><td>${s.shots}</td><td>${s.possession}</td>`;
    tbody.appendChild(row);
  });
});
