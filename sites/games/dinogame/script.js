window.onload = function(){
  const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let paused = true
let score = 0
const scoreTxt = document.getElementById("score")
const pauseBtn = document.getElementById("pause")
const unpauseBtn = document.getElementById("unpause")

if(paused){
  cactus.classList.remove("cactusAnimate")
}

pauseBtn.addEventListener('click', function(){
  if(!paused){
    paused = true
    if(cactus.classList == "cactusAnimate"){
    cactus.classList.remove('cactusAnimate')}
  }
})
unpauseBtn.addEventListener('click', function(){
  if(paused){
    paused = false
    if(cactus.classList != "cactusAnimate"){cactus.classList.add('cactusAnimate')}
  }
})

function jump() {
  if(!paused){
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
 }
}

let isAlive = setInterval(function () {
  if(!paused){
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Game Over!")
    score = 0
  }
  else{
    score+=1
    scoreTxt.textContent = "Your score: "+score.toString()
  }
}
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
}