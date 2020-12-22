const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberArray);
let min = 0;
console.log(min);
let max = 10;
console.log(max);

const answer = 8;
console.log(answer);

const button = document.getElementById("button");

const printInput = () => {
  const input = document.getElementById("userInput").value;
  const userInput = parseInt(input, 10);
  console.log(userInput);

  let userAnswer;

  if (userInput === answer) {
    console.log("The answer is correct");
    userAnswer = userInput;
  } else if (userInput < answer) {
    console.log(`The correct number is bigger than ${userInput}`);
    min = userInput + 1;
    console.log(`The correct answer is between ${min} and ${max}`);
  } else {
    console.log(`The correct number is smaller than ${userInput}`);
    max = userInput - 1;
    console.log(`The correct answer is between ${min} and ${max}`);
  }

  return userAnswer;
};

button.addEventListener("click", printInput);
