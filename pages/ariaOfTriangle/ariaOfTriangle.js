const elements = document.querySelectorAll('.side');
console.log(elements);

function changeBgImage() {
  const triangleImage = document.getElementById('triangle');
  let imgUrl = triangleImage.style.backgroundImage;

  switch (imgUrl) {
    case 'url("../../images/TB.png")':
      triangleImage.style.backgroundImage = "url('../../images/TRed.png')";
      imgUrl = triangleImage.style.backgroundImage;
      console.log(1);
      break;
    case 'url("../../images/TRed.png")':
      triangleImage.style.backgroundImage = "url('../../images/TBlue.png')";
      imgUrl = triangleImage.style.backgroundImage;
      console.log(2);
      break;
    case 'url("../../images/TBlue.png")':
      triangleImage.style.backgroundImage = "url('../../images/TOrange.png')";
      imgUrl = triangleImage.style.backgroundImage;
      console.log(3);
      break;
    case 'url("../../images/TOrange.png")':
      triangleImage.style.backgroundImage = "url('../../images/TB.png')";
      imgUrl = triangleImage.style.backgroundImage;
      console.log(4);
      break;
    default:
      break;
  }
}

elements.forEach(function (element) {
  element.addEventListener('click', changeBgImage);
});
