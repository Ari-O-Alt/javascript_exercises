const elements = document.querySelectorAll('.side');
console.log(elements);

function changeBgImage() {
  const triangleImage = document.getElementById('triangle');
  let imgUrl = triangleImage.style.backgroundImage;

  switch (imgUrl) {
    case 'url("src/images/TB.png")':
      triangleImage.style.backgroundImage = "url('src/images/TRed.png')";
      imgUrl = triangleImage.style.backgroundImage;
      break;
    case 'url("src/images/TRed.png")':
      triangleImage.style.backgroundImage = "url('src/images/TBlue.png')";
      imgUrl = triangleImage.style.backgroundImage;
      break;
    case 'url("src/images/TBlue.png")':
      triangleImage.style.backgroundImage = "url('src/images/TOrange.png')";
      imgUrl = triangleImage.style.backgroundImage;
      break;
    case 'url("src/images/TOrange.png")':
      triangleImage.style.backgroundImage = "url('src/images/TB.png')";
      imgUrl = triangleImage.style.backgroundImage;
      break;
    default:
      break;
  }
}

elements.forEach(function (element) {
  element.addEventListener('click', changeBgImage);
});
