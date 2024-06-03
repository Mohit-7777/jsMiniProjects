let min = 1;
let max = 100;
let ans = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(ans);

let count = 0;
let found = false;
let guess;

while (!found) {
  guess = window.prompt("Enter your guess (between 1 and 100):");
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please Enter a Valid number");
  } else if (guess < min || guess > max) {
    window.alert("Please Enter a Valid number");
  } else {
    count++;
    if (guess < ans) {
      window.alert("TOO LOW! Try Again");
    } else if (guess > ans) {
      window.alert("Too high, try again");
    } else {
      window.alert(`correct The ans was ${ans}. It took you ${count} attempts`);
      found = true;
    }
  }
}
