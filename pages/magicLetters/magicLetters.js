const appBox = document.getElementById('app');
const button = document.getElementById('button');

const convertString = (string) => {
  let stringToArray = string.split('');
  return stringToArray;
};

const printArrayToPage = (theString) => {
  const stringToArray = convertString(theString);
  console.log(stringToArray);
  stringToArray.forEach((element) => {
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
window.onload = function () {
  printArrayToPage('HELLO WORLD!');
};

const moveLetter = (event) => {
  const target = event.target;
  console.log(target);
};

const allLetters = document.querySelectorAll('.letter');
allLetters.forEach((element) => element.addEventListener('click', moveLetter, { once: true }));
const allSpaces = document.querySelectorAll('emptySpace');
allSpaces.forEach((element) => element.addEventListener('click', moveLetter, { once: true }));
// button.addEventListener('click', () => reverseArray('Hello world'));
/* let rest = stringToArray.splice(0, 1);
    stringToArray.push(...rest);
  console.log(convertString("Alina")); */
