// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = ' ';

/* const speakButton = document.querySelector('button'); */
const speakButtonOne = document.querySelector('#buttonOne');
const speakButtonTwo = document.querySelector('#buttonTwo');
const speakButtonThree = document.querySelector('#buttonThree');
const speakButtonFour = document.querySelector('#buttonFour');
const speakButtonFive = document.querySelector('#buttonFive');
const speakButtonRead = document.querySelector('#read');

const result = document.querySelector(".result");

const buttonOne = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const buttonTwo = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const buttonThree = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const buttonFour = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const buttonFive = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners*/

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let selectionOne = randomValueFromArray(buttonOne);
let selectionTwo = randomValueFromArray(buttonTwo);
let selectionThree = randomValueFromArray(buttonThree);
let selectionFour = randomValueFromArray(buttonFour);
let selectionFive = randomValueFromArray(buttonFive);

const randomSentence = `${selectionOne} ${selectionTwo} ${selectionThree} ${selectionFour} ${selectionFive}!`;


console.log(randomSentence);

speakButtonOne.onclick = function() {
	selectionOne;
	speakNow(selectionOne);
}

speakButtonTwo.onclick = function() {
	selectionTwo;
	speakNow(selectionTwo);
}

speakButtonThree.onclick = function() {
	selectionThree;
	speakNow(selectionThree);
}

speakButtonFour.onclick = function() {
	selectionFour;
	speakNow(selectionFour);
}

speakButtonFive.onclick = function() {
	selectionFive;
	speakNow(selectionFive);
}

speakButtonRead.onclick = function() {
	randomSentence;
	speakNow(randomSentence);
	result.textContent = randomSentence;
}

/*

Tried to concatenate, but couldn't figure out how to STORE the variables to make a string of results

speakButtonOne.onclick = function() {
const speakButtonOne = buttonOne[Math.floor(Math.random()*buttonOne.length)];
	speakNow(selectionOne);
}

console.log(selectionOne);

speakButtonTwo.onclick = function() {
const speakButtonTwo = buttonTwo[Math.floor(Math.random()*buttonTwo.length)];
	speakNow(speakButtonTwo);
}

speakButtonThree.onclick = function() {
const speakButtonThree = buttonThree[Math.floor(Math.random()*buttonThree.length)];
	speakNow(speakButtonThree);
}

speakButtonFour.onclick = function() {
const speakButtonFour = buttonFour[Math.floor(Math.random()*buttonFour.length)];
	speakNow(speakButtonFour);
}

speakButtonFive.onclick = function() {
const speakButtonFive = buttonFive[Math.floor(Math.random()*buttonFive.length)];
		speakNow(speakButtonFive);
}


console.log();

/*
const randomSentence = `${selectionTwo} ${selectionThree} ${selectionFour} ${selectionFive}`;

*/
