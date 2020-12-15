const elements = document.querySelectorAll('.side');

function changeBgImage(event) {
  const triangleImage = document.getElementById('triangle');
  let imgUrl = triangleImage.style.backgroundImage;

  // select the textTarget div
  const textTarget = document.getElementById('textTarget');
  // select the string inside textTarget div
  let text = textTarget.innerHTML;
  console.log(text);

  text += event.target.value + '  ';
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

// cleaned code
