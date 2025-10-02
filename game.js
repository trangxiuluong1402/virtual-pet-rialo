let hunger = 100;
let happiness = 100;
let energy = 100;

const hungerEl = document.getElementById("hunger");
const happinessEl = document.getElementById("happiness");
const energyEl = document.getElementById("energy");
const statusEl = document.getElementById("status");

function updateStats() {
  hungerEl.textContent = hunger;
  happinessEl.textContent = happiness;
  energyEl.textContent = energy;

  if (hunger <= 0 || happiness <= 0 || energy <= 0) {
    statusEl.textContent = "⚠️ Your pet is not doing well!";
  } else if (hunger < 30) {
    statusEl.textContent = "😿 Your pet is hungry!";
  } else if (happiness < 30) {
    statusEl.textContent = "😾 Your pet is sad!";
  } else if (energy < 30) {
    statusEl.textContent = "😴 Your pet is tired!";
  } else {
    statusEl.textContent = "🎉 Your pet is happy and healthy!";
  }
}

function feedPet() {
  hunger = Math.min(100, hunger + 20);
  happiness = Math.min(100, happiness + 5);
  updateStats();
}

function playPet() {
  happiness = Math.min(100, happiness + 20);
  energy = Math.max(0, energy - 10);
  hunger = Math.max(0, hunger - 5);
  updateStats();
}

function sleepPet() {
  energy = Math.min(100, energy + 30);
  hunger = Math.max(0, hunger - 10);
  updateStats();
}

// Stats decrease over time
setInterval(() => {
  hunger = Math.max(0, hunger - 2);
  happiness = Math.max(0, happiness - 1);
  energy = Math.max(0, energy - 1);
  updateStats();
}, 3000);

updateStats();
