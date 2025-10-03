document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
  const HAPPINESS_BAR = document.getElementById("happiness_bar");
  const HAPPINESS_COUNT = document.getElementById("happines_count");
  HAPPINESS_COUNT.textContent = 100;

  setInterval(() => {
    lowHappiness(HAPPINESS_BAR, HAPPINESS_COUNT);
  }, 1000);
}

function lowHappiness(bar, count) {
  if (count.textContent > 0) {
    let happiness = parseInt(count.textContent) - 5;

    count.innerHTML = happiness;
  }
}
