let img1 = 'url(images/morning.jpg)';
let img2 = 'url(images/crop-cropland.jpg)';
let img3 = 'url(images/img2.jpg)';

let backgroundImg = document.getElementsByTagName("body")[0];
backgroundImg.style.backgroundImage = img1;
let spanEls = document.querySelectorAll("span");

function clock() {
  let time = new Date();
  let spanHours = document.getElementById("hours");
  spanHours.innerHTML = time.getHours();
  let spanMinutes = document.getElementById("minutes");
  spanMinutes.innerHTML = time.getMinutes();
  let spanSeconds = document.getElementById("seconds");
  spanSeconds.innerHTML = time.getSeconds();
  let greeting = document.getElementById("greeting");
  let hours = time.getHours();
  setTimeout(clock, 1000);
  //changing the greeting text with ternaries
  greeting.textContent = hours < 12 ? `"Good Morning"` : hours < 16 ? `"Good Afternoon` : `"Good Evening"`;
  //changing the greeting text color according to the evening.
  if (greeting.textContent === `"Good Evening"`) {
    spanEls.forEach((colorChange) => {
      colorChange.style.color = "white";
      greeting.style.color = "white"
    })
  }
  //adding the zero with ternaries
  spanSeconds.innerHTML = time.getSeconds() < "10" ? "0" + time.getSeconds() : time.getSeconds();

  backgroundImg.style.backgroundImage = hours < 12 ? img1 : hours < 16 ? img2 : img3;
 
}


clock();
