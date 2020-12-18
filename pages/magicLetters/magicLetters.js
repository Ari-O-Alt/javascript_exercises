const appBox = document.getElementById('app');
console.log(appBox);
const button = document.getElementById('button');

const convertString = (string) => {
  let stringToArray = string.split('');
  return stringToArray;
};

const reverseArray = (theString) => {
  const stringToArray = convertString(theString);
  console.log(stringToArray);
  stringToArray.forEach((element) => {
    const textBox = document.createElement('div');
    textBox.classList.add('letter');
    const text = document.createTextNode(element);
    textBox.appendChild(text);
    appBox.appendChild(textBox);
  });
};

button.addEventListener('click', () => reverseArray('Moroco'));
/* let rest = stringToArray.splice(0, 1);
    stringToArray.push(...rest);
  console.log(convertString("Alina")); */
