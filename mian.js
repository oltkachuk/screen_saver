let button = document.getElementById("button");
let containerToImage = document.getElementById("img");
let image = document.getElementById("myImg");
let contScreenSaver = document.getElementById("container");
let form = document.getElementById("form");
let delay = document.getElementById("delayImage").value;
let check = document.getElementById("saveForm");
let timer = document.getElementById("timeBeforeInactive").value;

const updatePercentPosition = 50;
let timerID, interval;

button.addEventListener("click", saveForm);

function saveForm() {
  timer = document.getElementById("timeBeforeInactive").value;
  delay = document.getElementById("delayImage").value;

  resetTimer();
}

// setep funktions who check inactive page

function setep() {
  this.addEventListener("mousemove", resetTimer, false);
  this.addEventListener("mousedown", resetTimer, false);
  this.addEventListener("keypress", resetTimer, false);
  this.addEventListener("DOMMouseScroll", resetTimer, false);
  this.addEventListener("mousewheel", resetTimer, false);
  this.addEventListener("touchmove", resetTimer, false);
  this.addEventListener("MSPointerMove", resetTimer, false);
  startTimer();
}

setep();

function startTimer() {
  timerID = window.setTimeout(goInactive, timer * 1000);
}

// page Inactive

function goInactive() {
  contScreenSaver.style.display = "block";
  form.style.display = "none";
  image.style.animation = `show-image ${delay}s ease-in 0s infinite`;
  interval = setInterval(() => {
    showAndMoveRandomImage(arrayImage, updatePercentPosition);
  }, delay * 1000);
}

function resetTimer(e) {
  window.clearTimeout(timerID);
  goActive();
}

// page Active
function goActive() {
  contScreenSaver.style.display = "none";
  form.style.display = "block";
  clearInterval(interval);
  startTimer();
}

// url base image

const arrayImage = [
  "https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=9060",
  "https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560",
  "https://images.pexels.com/photos/1460880/pexels-photo-1460880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200",
  "https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
  "https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=400",
  "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260",
  "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

// helper funktions

function getRandom(MaxInteger) {
  return Math.floor(Math.random() * MaxInteger);
}

function showAndMoveRandomImage(imageArray, maxUpdateToPosition) {
  // initial
  image.style.maxHeight = "100%";

  image.setAttribute("src", imageArray[getRandom(imageArray.length)]);

  // move top and scale what not to crop the image
  let randomPositionTop = getRandom(maxUpdateToPosition);
  containerToImage.style.top = `${randomPositionTop}%`;
  image.style.maxHeight = `${100 - randomPositionTop}%`;

  // move left
  let randomPositionLeft = getRandom(maxUpdateToPosition);
  containerToImage.style.left = `${randomPositionLeft}%`;
}
