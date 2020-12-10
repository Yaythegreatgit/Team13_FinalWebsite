window.addEventListener("load", function(){
  var buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', toGameList);
  }
});

function toGameList() {
  document.querySelector('#games').scrollIntoView({ behavior: 'smooth'});
}

function moveme(e,sid) {
  var mover = document.getElementById(sid);
  mover.style.left = e.offsetX + 10 + "px";
  mover.style.top = e.offsetY + "px";
}

function setbackground(back,sections,borders,textc) {
  var a = document.querySelectorAll("article,section,header");
  for (var i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = sections;
    a[i].style.borderColor = borders;
  };
  document.body.style.backgroundColor = back;
  document.body.style.color = textc;
}
