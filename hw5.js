let mainD = document.getElementById("mainD");
let burgerM = document.getElementById("burgerM");
let target = document.getElementById("target");
let options = document.getElementById("options");

target.addEventListener("click", function (e) {
  this.classList.toggle("active");
  options.classList.toggle("optA");
});
