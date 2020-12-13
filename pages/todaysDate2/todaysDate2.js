const dayMessage = document.getElementById('dayMessage');
const hourMessage = document.getElementById('hourMessage');

const displayDay = () => {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayDate = new Date();
  const hour = todayDate.getHours();
  const minutes = todayDate.getMinutes();
  const seconds = todayDate.getSeconds();
  const dayIndex = todayDate.getDay();
  const day = weekDays[dayIndex];
  const abbreviation = hour > 12 ? 'PM' : 'AM';

  const dayString = `Sample Output : Today is : ${day}`;
  const hourString = `Current time is : ${hour} ${abbreviation} : ${minutes} : ${seconds}`;

  dayMessage.innerHTML = dayString;
  hourMessage.innerHTML = hourString;
};

displayDay();
