const appBox = document.getElementById('app');
const button = document.getElementById('button');

// create function that converts string to array
const convertString = (string) => {
  let stringToArray = string.split('');
  return stringToArray;
};

// cobvert the string to array
let stringToArray = convertString('Hello world!');

// create function that print the content of an array to the page
const printArrayToPage = (string) => {
  string.forEach((element) => {
    const textBox = document.createElement('div');

    // if we have a letter, give the element a class
    if (element !== ' ') {
      textBox.classList.add('letter');
    } else {
      // else give it another one
      textBox.classList.add('emptySpace');
    }

    const text = document.createTextNode(element); // create the text for the newly created div
    textBox.appendChild(text); // append the text to the div
    appBox.appendChild(textBox); // append the div to the app div
  });
};

// print the letters on the page when the page is loaded
window.onload = printArrayToPage(stringToArray);

// create function that makes a letter dissapear when clicked and it gets attached to the end of the array
const moveLetter = (event) => {
  const targetLetter = event.target; // target the clicked div
  const parent = targetLetter.parentNode; // target the parent node of the clicked div -- app
  parent.appendChild(targetLetter); // append the clicked div to the parent -- goes at the end
};

// select all letters/ buttons and add event listeners to them
const allLetters = document.querySelectorAll('.letter');
allLetters.forEach((element) => element.addEventListener('click', moveLetter));
const allSpaces = document.querySelectorAll('.emptySpace');
allSpaces.forEach((element) => element.addEventListener('click', moveLetter));
