document.addEventListener("keydown", function () {
  var dino = document.querySelector(".dino");
  dino.classList.add("jump");

  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
});
