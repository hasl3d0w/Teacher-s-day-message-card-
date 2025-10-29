const open = document.getElementById("open");
const flap = document.querySelector(".flap");
const card = document.querySelector(".card");
const bgMusic = document.getElementById("bgMusic");

open.addEventListener("click", () => {
  flap.style.transform = "rotateX(-180deg)";
  card.style.opacity = 1;

  
  bgMusic.play();
});
