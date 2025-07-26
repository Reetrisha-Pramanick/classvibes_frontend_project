const moodCounts = {
  happy: 0,
  neutral: 0,
  sad: 0,
  angry: 0,
  excited: 0
};

const ctx = document.getElementById("moodChart").getContext("2d");
const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: Object.keys(moodCounts),
    datasets: [{
      label: "Mood Count",
      data: Object.values(moodCounts),
      backgroundColor: ["#FFD700", "#999999", "#87CEEB", "#FF6347", "#32CD32"]
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});
function flashThunder() {
  const flash = document.createElement("div");
  flash.classList.add("flash");
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 400);
}

function spawnTear() {
  const drop = document.createElement("div");
  drop.textContent = "💧";
  drop.className = "teardrop";
  drop.style.left = Math.random() * 90 + "%";
  document.body.appendChild(drop);
  setTimeout(() => drop.remove(), 1000);
}

function spawnPetal() {
  const petal = document.createElement("div");
  petal.textContent = "🌸";
  petal.className = "petal";
  petal.style.left = Math.random() * 90 + "vw"; // Use vw for horizontal position
  document.body.appendChild(petal);

  // Remove petal after 2.5s
  setTimeout(() => petal.remove(), 2500);
}

function showFireball() {
  const fire = document.createElement("div");
  fire.textContent = "🔥";
  fire.style.position = "fixed";
  fire.style.fontSize = "4rem";
  fire.style.top = "50%";
  fire.style.left = "50%";
  fire.style.transform = "translate(-50%, -50%) scale(1)";
  fire.style.zIndex = "999";
  document.body.appendChild(fire);
  setTimeout(() => fire.remove(), 600);
}

function voteMood(mood) {
  // Update chart data
  moodCounts[mood]++;
  chart.data.datasets[0].data = Object.values(moodCounts);
  chart.update();

  // Mood-specific effects
  if (mood === "excited") {
    confetti({ particleCount: 200, spread: 90, origin: { y: Math.random() * 0.5 } });
  } else if (mood === "angry") {
    showFireball();
  } else if (mood === "sad") {
    for (let i = 0; i < 8; i++) spawnTear();
  } else if (mood === "neutral") {
    flashThunder();
  } else if (mood === "happy") {
    for (let i = 0; i < 8; i++) spawnPetal();
  }

  // Disable all emoji buttons after the first vote
  const buttons = document.getElementsByClassName("emoji-btn");
  for (let btn of buttons) {
    btn.disabled = true;
  }
}