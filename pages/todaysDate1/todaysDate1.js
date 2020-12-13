window.showDate = function showDate() {
  const target = document.getElementById('target');
  const newDate = new Date();
  const year = newDate.getFullYear();
  const day = newDate.getDate();
  const month = newDate.getMonth();
  const fullDate = `${day}/ ${month}/ ${year}`;

  // shorter verison to build the "fullDate" string
  // const fullDate = `${newDate.getFullYear()}/ ${newDate.getDate()}/ ${newDate.getMonth()}`

  target.innerHTML = fullDate;
};
