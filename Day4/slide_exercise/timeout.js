function wake() {
  process.stdout.write("\u001b[2J\u001b[0;0H");
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
  console.log(hours + ":" + minutes + ":" + seconds)

  if (minutes == 43) {
    console.log('RINGGGG')
    if (seconds == 30) {
      clearInterval(interval)
    }
  } 
}



var interval = setInterval(wake, 1000);


