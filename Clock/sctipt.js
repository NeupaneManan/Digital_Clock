function updateClock() {
  var now = new Date();

  // Get the elements to display time and date
  var timeElement = document.getElementById('time');
  var dateElement = document.getElementById('date');

  // Format the time
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var timeString = hours.toString().padStart(2, '0') + ':' +
    minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');

  // Format the date
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayOfWeek = daysOfWeek[now.getDay()];
  var day = now.getDate();
  var month = now.getMonth() + 1; // Months are zero-based
  var year = now.getFullYear();
  var dateString = dayOfWeek + ', ' + month.toString().padStart(2, '0') + '/' +
    day.toString().padStart(2, '0') + '/' + year.toString();

  // Update the time and date elements
  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}

// Update the clock every second
setInterval(updateClock, 1000);
