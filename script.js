document.getElementById('button').addEventListener('click', multiply)
// button connects to the function
let num1 = 0
let num2 = 0
let counter = 0
let answer = 0
// give our variables a base value of 0
function multiply () {
  num1 = document.getElementById('input1').value
  num2 = document.getElementById('input2').value
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  // take our inputs and converts them into integers
  for (counter = 0; counter < num1; counter++) {
    answer = answer + num2
  // this is the for loop
  }
  document.getElementById('answer').innerHTML = answer
// this will display the answer in a pragrapgh tag
}
