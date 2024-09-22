let counter = document.querySelector(".counter");
let decrement = document.querySelector(".decrement");
let increment = document.querySelector(".increment");
let reset = document.querySelector(".reset");
counterValue = 0;

increment.addEventListener("click", function () {
  if (counterValue >= 0 || counterValue <= 9999) {
    counterValue++;
    counter.textContent = counterValue;
  } else {
    alert("Couldn't exceed 9999");
  }
});

decrement.addEventListener("click", function () {
  if (counterValue > 0) {
    counterValue--;
    counter.textContent = counterValue;
  } 
  
});
reset.addEventListener("click", function () {
  counterValue = 0;
  counter.textContent = 0;
});
