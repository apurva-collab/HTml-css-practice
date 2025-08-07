function updateClock() {     //function declared
  const now = new Date();   //new data object to see time 
  
  let hours = now.getHours(); //returns the current (now)hour 
  let minutes = now.getMinutes();//minutes
  let seconds = now.getSeconds();  //second

  
  hours = hours < 10 ? "0" + hours : hours;          //ensures double digit
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = time;
}


setInterval(updateClock, 1000);    //// Update every second


updateClock();
