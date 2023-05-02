let petName = "Carlos";
let hungerLevel = 100;
let moodLevel = 0;
let mood = "Depressed";

// GEt DOM elements for teh pet's status
const namePlateEl = document.querySelector(".status-container");
const octocatEl = document.querySelector("#octocat");
const petNameEl = document.querySelector("#pet-name");
const hungerEl = document.querySelector("#hunger-level");
const moodLevelEl = document.querySelector("#mood-level");
const moodEl = document.querySelector("#mood");

// Get DOM elements for teh action buttons
const feedButton = document.querySelector("#feed-button");
const playButton = document.querySelector("#play-button");

// funct declaration vvv
function feedPet() {
  if (hungerLevel >= 90) {
    hungerLevel -= 5;
    hungerEl.innerText = hungerLevel + "%";
    mood = "Depressed";
    moodEl.innerText = mood;
  } // There is an error here ask Mady bc lost, not acting way i want or expected to
  else if (hungerLevel >= 70) {
    hungerLevel -= 10;
    hungerEl.innerText = hungerLevel + "%";
    mood = "?";
    moodEl.innerText = mood;
  } else if (hungerLevel > 20) {
    hungerLevel -= 15;
    hungerEl.innerText = hungerLevel + "%";
    mood = "Sad";
    moodEl.innerText = mood;
  } else {
    hungerLevel = 0;
    hungerEl.innerText = 0 + "%";
    mood = "Happy!";
    moodEl.innerText = mood;
  }
  console.log(mood);
  flashStatus();
}

function flashStatus() {
  if (mood == "Depressed") {
    document.querySelector("#mood").style.color = "tomato";
  } else if (mood == "?") {
    document.querySelector("#mood").style.color = "deepskyblue";
  } else if (mood == "Sad") {
    document.querySelector("#mood").style.color = "blue";
  } else if (mood == "Happy!") {
    document.querySelector("#mood").style.color = "green";
  } else {
    document.querySelector("#mood").style.color = "hotpink";
  }

  // const style = document.createElement("style");
  // namePlateEl.style.innerHTML = `
  // .status-container {
  //   background-color: rgb(179, 237, 245);
  // }
  // `;
}

function greeting() {
  if (mood == "Depressed") {
    return " weeps softly :,^(";
  } else if (mood == "Sad") {
    return " lets out a sniffle";
  } else if (mood == "?") {
    return " lets out a grunt and says 'grug grug'";
  } else {
    return " is finally back to his old self! :^D";
  }
}

function playPet() {
  if (moodLevel <= 10) {
    moodLevel += 5;
    moodLevelEl.innerText = moodLevel + "%";
    mood = "Depressed";
    moodEl.innerText = mood;
  } else if (moodLevel <= 30) {
    moodLevel += 15;
    moodLevelEl.innerText = moodLevel + "%";
    mood = "?";
    moodEl.innerText = mood;
  } else if (moodLevel <= 80) {
    moodLevel += 20;
    moodLevelEl.innerText = moodLevel + "%";
    mood = "Sad";
    moodEl.innerText = mood;
  } else {
    moodLevel = 100;
    moodLevelEl.innerText = moodLevel + "%";
    mood = "Elated!";
    moodEl.innerText = mood;
  }
  flashStatus();
}

alert(
  "Welcome! You just found a sad and abandoned special edition octocat tamagotchi that a careless child left behind. Your goal: to make your octocat happy!"
);

feedButton.addEventListener("click", feedPet);
playButton.addEventListener("click", playPet);
namePlateEl.addEventListener("click", () => alert(petName + greeting()));
