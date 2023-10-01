// Assignment 1 | COMP1073 Client-Side JavaScript
document.addEventListener("DOMContentLoaded", () => {
/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById("chosenNoun1");
const chosenVerb = document.getElementById("chosenVerb");
const chosenAdj = document.getElementById("chosenAdjective");
const chosenNoun2 = document.getElementById("chosenNoun2");
const chosenSetting = document.getElementById("chosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const resetButton = document.getElementById("reset");
const storyParagraph = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1Array = [
  "The turkey",
  "Mom",
  "Dad",
  "The dog",
  "My teacher",
  "The elephant",
  "The cat",
];
const verbsArray = [
  "sat on",
  "ate",
  "danced with",
  "saw",
  "doesn't like",
  "kissed",
];
const adjArray = [
  "a funny",
  "a goofy",
  "a scary",
  "a slimy",
  "a barking",
  "a fat",
];
const nouns2Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settingsArray = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes",
];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
  // variable to get array element and displaying it
  // Get a random noun from the nouns1Array
  const randomNoun1 =
    nouns1Array[Math.floor(Math.random() * nouns1Array.length)];

  // Display the chosen noun in the corresponding paragraph
  chosenNoun1.textContent = randomNoun1;

  //adding a switch case to display an image related to the selected noun
  const noun1Image = document.getElementById("noun1image");
  switch (randomNoun1) {
    case "The turkey":
      noun1Image.src = "./resources/images/noun1-img/turkey.jpg";
      noun1Image.alt = "A picture of a cartoon turkey";
      break;
    case "Mom":
      noun1Image.src = "./resources/images/noun1-img/mom.jpg";
      noun1Image.alt = "A picture of a cartoon lady";
      break;
    case "Dad":
      noun1Image.src = "./resources/images/noun1-img/dad.png";
      noun1Image.alt = "A picture of a cartoon man";
      break;
    case "The dog":
      noun1Image.src = "./resources/images/noun1-img/dog.jpg";
      noun1Image.alt = "A picture of a cartoon dog";
      break;
    case "My teacher":
      noun1Image.src = "./resources/images/noun1-img/teacher.jpg";
      noun1Image.alt = "A picture of a cartoon teacher";
      break;
    case "The elephant":
      noun1Image.src = "./resources/images/noun1-img/elephant.jpg";
      noun1Image.alt = "A picture of a cartoon elephant";
      break;
    case "The cat":
      noun1Image.src = "./resources/images/noun1-img/cat.jpg";
      noun1Image.alt = "A picture of a cartoon cat";
      break;
    default:
      noun1Image.src = "";
  }

  // Increase the count to grab a different noun next time
  noun1Count++;

  // if-else to change count setting
  // If all nouns in the array are used, reset the count
  if (noun1Count >= nouns1Array.length) {
    noun1Count = 0;
  }
}

function verb_on_click() {
  // variable to get array element and displaying it
  // Get a random verb from the verbsArray
  const randomVerb = verbsArray[Math.floor(Math.random() * verbsArray.length)];

  // Display the chosen verb in the corresponding paragraph
  chosenVerb.textContent = randomVerb;

  //switch cases for verbs
  const verbImage = document.getElementById("verbimage");
  switch (randomVerb) {
    case "sat on":
      verbImage.src = "./resources/images/Verb-img/sitting.jpg";
      verbImage.alt = "A picture of a cartoon cat sitting on a dog";
      break;
    case "ate":
      verbImage.src = "./resources/images/Verb-img/eating.jpg";
      verbImage.alt = "A picture of a cartoon boy eating";
      break;
    case "danced with":
      verbImage.src = "./resources/images/Verb-img/dancing.jpg";
      verbImage.alt = "A picture of cartoons dancing";
      break;
    case "saw":
      verbImage.src = "./resources/images/Verb-img/saw.jpg";
      verbImage.alt = "A picture of a cartoon man using binoculars";
      break;
    case "doesn't like":
      verbImage.src = "./resources/images/Verb-img/dislike.jpg";
      verbImage.alt = "A picture of an angry cartoon";
      break;
    case "kissed":
      verbImage.src = "./resources/images/Verb-img/kiss.jpg";
      verbImage.alt = "A picture of cartoon bears kissing";
      break;
    default:
      verbImage.src = "";
  }

  // Increase the count to grab a different verb next time
  verbCount++;

  // if-else to change count setting
  // If all verbs in the array are used, reset the count
  if (verbCount >= verbsArray.length) {
    verbCount = 0;
  }
}

function adjective_on_click() {
  // variable to get array element and displaying it
  // Get a random adjective from the adjArray
  const randomAdj = adjArray[Math.floor(Math.random() * adjArray.length)];

  // Display the chosen adj in the corresponding paragraph
  chosenAdj.textContent = randomAdj;

  //switch cases for the adjective
  const adjective = document.getElementById("adjimage");
  switch (randomAdj) {
    case "a funny":
      adjective.src = "./resources/images/adj-img/funny.jpg";
      adjective.alt = "A picture of a laughing mouth";
      break;
    case "a goofy":
      adjective.src = "./resources/images/adj-img/goofy.jpg";
      adjective.alt = "A picture of a cartoon clown";
      break;
    case "a scary":
      adjective.src = "./resources/images/adj-img/scary.jpg";
      adjective.alt = "A picture of a cartoon monster";
      break;
    case "a slimy":
      adjective.src = "./resources/images/adj-img/slimy.jpg";
      adjective.alt = "A picture of a slimy hand";
      break;
    case "a barking":
      adjective.src = "./resources/images/adj-img/barking.jpg";
      adjective.alt = "A picture of an barking cartoon dog";
      break;
    case "a fat":
      adjective.src = "./resources/images/adj-img/fat.jpg";
      adjective.alt = "fat Albert";
      break;
    default:
      adjective.src = "";
  }

  // Increase the count to grab a different adj next time
  adjCount++;

  // if-else to change count setting
  // If all adj in the array are used, reset the count
  if (adjCount >= adjArray.length) {
    adjCount = 0;
  }
}

function noun2_on_click() {
  // variable to get array element and displaying it
  // Get a random noun from the noun2Array
  const randomNoun2 =
    nouns2Array[Math.floor(Math.random() * nouns2Array.length)];

  // Display the chosen noun in the corresponding paragraph
  chosenNoun2.textContent = randomNoun2;

  //switch case for noun 2
  const noun2Image = document.getElementById("noun2image");
  switch (randomNoun2) {
    case "goat":
      noun2Image.src = "./resources/images/noun2-img/goat.png";
      noun2Image.alt = "A picture of a cartoon goat";
      break;
    case "bug":
      noun2Image.src = "./resources/images/noun2-img/bug.png";
      noun2Image.alt = "A picture of a cartoon bug";
      break;
    case "cow":
      noun2Image.src = "./resources/images/noun2-img/cow.png";
      noun2Image.alt = "A picture of a cartoon cow";
      break;
    case "fish":
      noun2Image.src = "./resources/images/noun2-img/fish.png";
      noun2Image.alt = "A picture of a cartoon fish";
      break;
    case "frog":
      noun2Image.src = "./resources/images/noun2-img/frog.png";
      noun2Image.alt = "A picture of a cartoon frog";
      break;
    case "monkey":
      noun2Image.src = "./resources/images/noun2-img/monkey.png";
      noun2Image.alt = "A picture of a cartoon monkey";
      break;
    case "worm":
      noun2Image.src = "./resources/images/noun2-img/worm.png";
      noun2Image.alt = "A picture of a cartoon worm";
      break;
    default:
      noun2Image.src = "";
  }
  // Increase the count to grab a different noun next time
  noun2Count++;

  // if-else to change count setting
  // If all nouns in the array are used, reset the count
  if (noun2Count >= nouns2Array.length) {
    noun2Count = 0;
  }
}

function setting_on_click() {
  // variable to get array element and displaying it
  // Get a random setting from the settingsArray
  const randomSetting =
    settingsArray[Math.floor(Math.random() * settingsArray.length)];

  // Display the chosen adj in the corresponding paragraph
  chosenSetting.textContent = randomSetting;

  //switch cases for the setting
  var settingImage = document.getElementById("settingimage");
  switch (randomSetting) {
    case "on the moon":
      settingImage.src = "./resources/images/setting-img/moon.png";
      settingImage.alt = "A picture of a cartoon moon";
      break;
    case "on the chair":
      settingImage.src = "./resources/images/setting-img/chair.png";
      settingImage.alt = "A picture of a cartoon moon";
      break;
    case "in my spaghetti":
      settingImage.src = "./resources/images/setting-img/spaghetti.jpg";
      settingImage.alt = "A picture of cartoon spaghetti";
      break;
    case "in my shoes":
      settingImage.src = "./resources/images/setting-img/shoes.png";
      settingImage.alt = "A picture of a cartoon shoes";
      break;
    case "on the grass":
      settingImage.src = "./resources/images/setting-img/grass.jpg";
      settingImage.alt = "A picture of cartoon grass";
      break;
    case "in my soup":
      settingImage.src = "./resources/images/setting-img/soup.jpg";
      settingImage.alt = "A picture of cartoon grass";
      break;
    default:
      settingImage.src = "";
  }

  // Increase the count to grab a different setting next time
  settingCount++;

  // if-else to change count setting
  // If all settings in the array are used, reset the count
  if (settingCount >= settingsArray.length) {
    settingCount = 0;
  }
}

// concatenate the user story and display
function playback_on_click() {
  // Check if any of the required fields are empty
  if (
    chosenNoun1.textContent.trim() === "" ||
    chosenVerb.textContent.trim() === "" ||
    chosenAdj.textContent.trim() === "" ||
    chosenNoun2.textContent.trim() === "" ||
    chosenSetting.textContent.trim() === ""
  ) {
    // Display an error message if any of the fields are empty
    storyParagraph.textContent = "Error: Please fill in all fields.";
  } else {
    //if all fields have a value, display the story
    storyParagraph.textContent =
      chosenNoun1.textContent +
      " " +
      chosenVerb.textContent +
      " " +
      chosenAdj.textContent +
      " " +
      chosenNoun2.textContent +
      " " +
      chosenSetting.textContent +
      ".";
  }
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
  const randomNoun1 =
    nouns1Array[Math.floor(Math.random() * nouns1Array.length)];
  const randomVerb = verbsArray[Math.floor(Math.random() * verbsArray.length)];
  const randomAdj = adjArray[Math.floor(Math.random() * adjArray.length)];
  const randomNoun2 =
    nouns2Array[Math.floor(Math.random() * nouns2Array.length)];
  const randomSetting =
    settingsArray[Math.floor(Math.random() * settingsArray.length)];

  // Concatenate the random elements into a story
  const story = `${randomNoun1} ${randomVerb} ${randomAdj} ${randomNoun2} ${randomSetting}.`;

  // Display the story in the paragraph
  storyParagraph.textContent = story;
}

/*this reset function runs on the reset button click */
function reset_on_click() {
  //empties all selections
  chosenNoun1.textContent = "";
  chosenVerb.textContent = "";
  chosenAdj.textContent = "";
  chosenNoun2.textContent = "";
  chosenSetting.textContent = "";

  //clears images and alts
  document.getElementById("noun1image").src = "";
  document.getElementById("noun1image").alt = "Select a noun";
  document.getElementById("verbimage").src = "";
  document.getElementById("verbimage").alt = "Select a verb";
  document.getElementById("adjimage").src = "";
  document.getElementById("adjimage").alt = "Select an adjective";
  document.getElementById("noun2image").src = "";
  document.getElementById("noun2image").alt = "Select a noun";
  document.getElementById("settingimage").src = "";
  document.getElementById("settingimage").alt = "Select a setting";

  //empties story paragraph
  storyParagraph.textContent = "";
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
resetButton.addEventListener("click", reset_on_click);
});