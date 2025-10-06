document.addEventListener("DOMContentLoaded", onLoad);

var pig = document.getElementById('pig');
var isDead = false;
var health_container;
var health = 6;

function onLoad() {

  pig = document.getElementById('pig');

  health_container = document.getElementsByClassName('heart');

  /*STATS*/
  // Happiness
  const HAPPINESS_BAR = document.getElementById("happiness-bar");
  const HAPPINESS_COUNT = document.getElementById("happines-count");
  HAPPINESS_COUNT.textContent = 100;

  // FUllness - hunger
  const HUNGER_BAR = document.getElementById("fullness-bar");
  const HUNGER_COUNT = document.getElementById("fullness-count");
  HUNGER_COUNT.textContent = 100;

  const FUN_BAR = document.getElementById("fun-bar");
  const FUN_COUNT = document.getElementById("fun-count");
  FUN_COUNT.textContent = 100;

  const ENTERTAINMENT_BAR = document.getElementById("entertainment-bar");
  const ENTERTAINMENT_COUNT = document.getElementById("entertainment-count");
  ENTERTAINMENT_COUNT.textContent = 100;

  const SLEEP_BAR = document.getElementById("sleep-bar");
  const SLEEP_COUNT = document.getElementById("sleep-count");
  SLEEP_COUNT.textContent = 100;

  let randomInterval = getRandomInt(1000, 3000);

  setInterval(() => {
    // lowBar(HAPPINESS_BAR, HAPPINESS_COUNT);
    doActionAndUpdate(HUNGER_BAR, HUNGER_COUNT, (hungerAmountToAdd = -5), HAPPINESS_BAR, HAPPINESS_COUNT, (happinessAmountToAdd = -1));
    doActionAndUpdate(FUN_BAR, FUN_COUNT, (funAmountToAdd = -5), HAPPINESS_BAR, HAPPINESS_COUNT, (happinessAmountToAdd = -1));
    doActionAndUpdate(ENTERTAINMENT_BAR, ENTERTAINMENT_COUNT, (entertainmentAmountToAdd = -5), HAPPINESS_BAR, HAPPINESS_COUNT, (happinessAmountToAdd = -1));
    doActionAndUpdate(SLEEP_BAR, SLEEP_COUNT, (sleepAmountToAdd = -5), HAPPINESS_BAR, HAPPINESS_COUNT, (happinessAmountToAdd = -1));
  }, randomInterval);

  // Buttons
  const EAT_SUGAR_BTN = document.getElementById("eat-sugar");
  const EAT_CARROT_BTN = document.getElementById("eat-carrot");
  const RIDE_BTN = document.getElementById('ride');
  const MINE_BTN = document.getElementById('mine-adventure');
  const SLEEP_BTN = document.getElementById('sleep')

  EAT_SUGAR_BTN.addEventListener("click", () => {
    doActionAndUpdate(HUNGER_BAR, HUNGER_COUNT, (hungerAmountToAdd = -10), HAPPINESS_BAR, HAPPINESS_COUNT, (happinessAmountToAdd = 10));
  });

  EAT_CARROT_BTN.addEventListener("click", () => {
    doActionAndUpdate(HUNGER_BAR, HUNGER_COUNT, (hungerAmountToAdd = 3), HAPPINESS_BAR, HAPPINESS_COUNT, (happinessAmountToAdd = -1));
  });

  RIDE_BTN.addEventListener("click", () => {
    doActionAndUpdate(FUN_BAR, FUN_COUNT, (funAmountToAdd = 30), HAPPINESS_BAR, HAPPINESS_COUNT, (happinessAmountToAdd = 30));

    if (!isDead) {
      pig.src = "./img/pig_saddle.webp";

      setTimeout(() => {
        pig.src = "./img/pig.webp";
      }, 5000)
    }
  });

  MINE_BTN.addEventListener("click", () => {
    doActionAndUpdate(ENTERTAINMENT_BAR, ENTERTAINMENT_COUNT, (entertainmentAmountToAdd = 50), HAPPINESS_BAR, HAPPINESS_COUNT, (happinessAmountToAdd = -20));
  });

  SLEEP_BTN.addEventListener("click", () => {
    doActionAndUpdate(SLEEP_BAR, SLEEP_COUNT, (sleepAmountToAdd = 50), HAPPINESS_BAR, HAPPINESS_COUNT, (happinessAmountToAdd = 10));
  });

}

function doActionAndUpdate(action_bar, action_count, action_amount_to_Add, happiness_bar, happines_count, happines_amount_to_add) {

  let stat = parseInt(action_count.textContent) + action_amount_to_Add;

  if ((stat + action_amount_to_Add) > 100) {
    stat = 100;
  }
  else if ((stat + action_amount_to_Add) < 0) {
    stat = 0;
  }

  action_count.innerHTML = stat;

  action_bar.style.width = `${stat}%`;

  barUpdateColor(action_bar, stat);

  if (happines_count.textContent > 0) {
    let happiness =
      parseInt(happines_count.textContent) + happines_amount_to_add;

    if ((happiness + happines_amount_to_add) > 100) {
      happiness = 100;
    } else if ((happiness + happines_amount_to_add) < 0) {
      happiness = 0;
    }

    happines_count.innerHTML = happiness;

    happiness_bar.style.width = `${happiness}%`;

    barUpdateColor(happiness_bar, happiness);

    if (happiness == 0) {
      // die();
      updateHealth(-1);
    }

  }

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function barUpdateColor(bar, count) {
  if (count < 50 && count > 20) {
    bar.style.backgroundColor = "yellow";
  } else if (count < 20) {
    bar.style.backgroundColor = "red";
  } else {
    bar.style.backgroundColor = "green";
  }
}

function die() {
  isDead = true;
  pig.src = "./img/porkchop.webp";
}

function updateHealth(health_amount_to_add) {

  health_container[health_container.length+health_amount_to_add].remove();

}