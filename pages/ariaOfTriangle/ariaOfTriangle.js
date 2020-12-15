const elements = document.querySelectorAll('.side');
const textTarget = document.getElementById('textTarget');
let text = textTarget.innerHTML;
let arrayToPushTo = [];

const changeBgImage = () => {
  const triangleImage = document.getElementById('triangle');
  let imgUrl = triangleImage.style.backgroundImage;

  switch (imgUrl) {
    case 'url("../../images/TB.png")':
      triangleImage.style.backgroundImage = "url('../../images/TRed.png')";
      imgUrl = triangleImage.style.backgroundImage;
      break;
    case 'url("../../images/TRed.png")':
      triangleImage.style.backgroundImage = "url('../../images/TBlue.png')";
      imgUrl = triangleImage.style.backgroundImage;
      break;
    case 'url("../../images/TBlue.png")':
      triangleImage.style.backgroundImage = "url('../../images/TOrange.png')";
      imgUrl = triangleImage.style.backgroundImage;
      break;
    case 'url("../../images/TOrange.png")':
      triangleImage.style.backgroundImage = "url('../../images/TB.png')";
      imgUrl = triangleImage.style.backgroundImage;
      break;
    default:
      break;
  }
};

const printNumberToPage = (event) => {
  changeBgImage();
  arrayToPushTo.length > 1 ? (text += event.target.value + ' ') : (text += event.target.value + ' ' + 'X' + ' ');
  arrayToPushTo.push(event.target.value);
  textTarget.innerHTML = text;

  if (arrayToPushTo.length > 2) {
    elements.forEach((element) => {
      element.disabled = true;
    });
  }
};

elements.forEach(function (element) {
  element.addEventListener('click', printNumberToPage);
});

const calcButton = document.getElementById('calc');
calcButton.addEventListener('click', () => calculateArea(text));

const calculateArea = (string) => {
  changeBgImage();
  if (string) {
    const stringToArray = string.split('');
    const finalArray = stringToArray.filter((char) => char !== ' ' && char !== 'X');
    const num1 = finalArray[0];
    const num2 = finalArray[1];
    const num3 = finalArray[2];

    const result = num1 * num2 * num3;
    textTarget.innerHTML = result;

    text = ' ';
    arrayToPushTo = [];

    elements.forEach((element) => {
      element.disabled = false;
    });

    return result;
  } else {
    console.log('Please select a number');
  }
};
