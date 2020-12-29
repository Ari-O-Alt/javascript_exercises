const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberArray);
let min = 0;
console.log(min);
let max = 10;
console.log(max);

const answer = 8;
console.log(answer);

const button = document.getElementById('button');
const textTarget = document.getElementById('textTarget');

const printInput = () => {
  let input = document.getElementById('userInput').value;
  const userInput = parseInt(input, 10);
  console.log(userInput);

  let userAnswer;

  if (userInput === answer) {
    userAnswer = userInput;
    const text = document.createTextNode('Good Work! The answer is correct!');
    textTarget.appendChild(text);
  } else if (userInput < answer) {
    min = userInput + 1;
    const text = document.createTextNode(`Not matched! The correct number is bigger than ${userInput} and is between ${min} and ${max}!`);
    textTarget.appendChild(text);
  } else {
    max = userInput - 1;
    const text = document.createTextNode(`Not matched! The correct number is smaller than ${userInput} and is between ${min} and ${max}!`);
    textTarget.appendChild(text);
  }
  document.getElementById('userInput').value = ' ';
  return userAnswer;
};

button.addEventListener('click', printInput);
