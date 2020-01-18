var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonLetter = this.innerHTML;
    makeSound(buttonLetter);
    buttonAnimation(buttonLetter)
  })

}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key)

})

function makeSound(key) {
  switch (key) {
    case "w":
      var w = new Audio("sounds/tom-1.mp3");
      w.play();

    case "a":
      var a = new Audio("sounds/tom-2.mp3");

      a.play();

    case "s":
      var s = new Audio("sounds/tom-3.mp3");
      s.play();

    case "d":
      var d = new Audio("sounds/tom-4.mp3");
      d.play();

    case "j":
      var j = new Audio("sounds/crash.mp3");
      j.play();

    case "k":
      var k = new Audio("sounds/kick-bass.mp3");
      k.play();

    case "l":
      var l = new Audio("sounds/snare.mp3");
      l.play();

      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key)
  activeButton.classList.add("pressed")
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}
