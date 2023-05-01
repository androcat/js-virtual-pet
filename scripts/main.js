let petName = "Carlos";
let hungerLevel = 50;
let mood = "Sad";

// GEt DOM elements for teh pet's status
const petNameEl = document.querySelector("#pet-name");
const hungerEl = document.querySelector("#hunger-level");
const moodEl = document.querySelector("#mood");

// Get DOM elements for teh action buttons
const feedButton = document.querySelector("#feed-button");
const playButton = document.querySelector("#play-button");

// funct declaration vvv
function feedPet() {
  if (hungerLevel > 10) {
    hungerLevel -= 10;
    hungerEl.innerText = hungerLevel + "%";
    mood = "Sad";
    moodEl.innerText = mood;
  } else {
    hungerLevel = 0;
    hungerEl.innerText = 0 + "%";
    mood = "Happy";
    moodEl.innerText = mood;
  }
}

feedButton.addEventListener("click", feedPet);

// funct expression vvv
// const feedPet = function() {
//
// }
