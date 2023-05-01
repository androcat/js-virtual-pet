let petName = "Carlos";
let hungerLevel = 100;
let mood = "Depressed";

// GEt DOM elements for teh pet's status
const namePlateEl = document.querySelector(".status-container");
const octocatEl = document.querySelector("#octocat");
const petNameEl = document.querySelector("#pet-name");
const hungerEl = document.querySelector("#hunger-level");
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
  } else if (hungerLevel >= 70) {
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
    mood = "Happy";
    moodEl.innerText = mood;
  }
  // console.log(hungerLevel);
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

//alert("Welcome! You just found a sad and abandoned special edition octocat tamagochi that a careless child left behind. Your goal: to make your octocat happy!");

feedButton.addEventListener("click", feedPet);

namePlateEl.addEventListener("click", () => alert(petName + greeting()));
