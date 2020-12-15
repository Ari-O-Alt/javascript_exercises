const elements = document.querySelectorAll('.side');

const textTarget = document.getElementById('textTarget');
let text = textTarget.innerHTML;

function changeBgImage(event) {
  const triangleImage = document.getElementById('triangle');
  let imgUrl = triangleImage.style.backgroundImage;

  // print the number on the button to the page
  text += event.target.value + ' ';
  textTarget.innerHTML = text;

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
}

elements.forEach(function (element) {
  element.addEventListener('click', changeBgImage);
});

// function to calculate the area ot the triangle
function calculateArea(string) {
  const stringToArray = string.split('');

  const finalArray = stringToArray.filter((char) => char !== ' ');

  const num1 = finalArray[0];
  const num2 = finalArray[1];
  const num3 = finalArray[2];

  const result = num1 * num2 * num3;
  changeBgImage(window.event);
  textTarget.innerHTML = result;

  return result;
}

// add event listener to the calculation button
const calcButton = document.getElementById('calc');
calcButton.addEventListener('click', () => calculateArea(text));
