let random = Math.floor(Math.random() * 20 + 1);
let inputNumber = document.querySelector(".guess");
let button = document.querySelector(".check");
let message = document.querySelector(".message");
let result = document.querySelector(".number");
let body = document.querySelector("body");
let again = document.querySelector(".again");
let score = document.querySelector(".score");
let hightscore = document.querySelector(".highscore");

console.log(score.innerHTML);
button.addEventListener("click", function (e) {
  e.preventDefault();
  result.innerHTML = random;
  let guess = inputNumber.value;
  if (guess === random) {
    message.textContent = "You Win!";
    body.style.backgroundColor = "green";
    hightscore.innerHTML = score.innerHTML;
  } else if (guess < random) {
    message.textContent = "Too low!";
    body.style.backgroundColor = "red";
    score.innerHTML = score.innerHTML - 1;
  } else if (guess > random) {
    message.textContent = "Too high!";
    body.style.backgroundColor = "red";
    score.innerHTML = score.innerHTML - 1;
  }
});
again.addEventListener("click", function (e) {
  e.preventDefault();
  location.reload();
});
