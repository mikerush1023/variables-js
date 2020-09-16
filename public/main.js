const numberOfCupsOfCoffee = 2
const fullName = 'Michael James Rushing'

console.log(
  `I drink ${numberOfCupsOfCoffee} cups of coffee a day and my full name is ${fullName}`
)

const userName = window.prompt('What is your name?')
const greeting = `Greetings ${userName}`
console.log(greeting)

const firstNumber = window.prompt('Give me a number')
const firstOperand = parseFloat(firstNumber)
const secondNumber = window.prompt('Give me another number')
const secondOperand = parseFloat(secondNumber)

const sum = firstOperand + secondOperand
const difference = firstOperand - secondOperand
const product = firstOperand * secondOperand
const quotient = firstOperand / secondOperand
const remainder = firstOperand % secondOperand
const values = `Adding your inputs results in ${sum}, if you subtract your second input from your first you get ${difference}, if you
multiply your inputs it equals ${product}, and if you divide your first input by the second input you will get ${quotient} and the remainder is ${remainder}`
console.log(values)

const numbers = [37, 31, 13, 73, 21, 42, 3, 9, 3, 39, 90, 69, 1, 31, 25]

let smallest = null
for (let i = 0; i < numbers.length; i++) {
  if (smallest === null) {
    smallest = numbers[i]
  }
  if (numbers[i] < smallest) {
    smallest = numbers[i]
  }
}
console.log(smallest)

let largest = 0
for (let i = 0; i < numbers.length; i++) {
  if (largest < numbers[i]) {
    largest = numbers[i]
  }
}
console.log(largest)

let sumOfTheNumbers = 0
for (let index = 0; index < numbers.length; index++) {
  const next = numbers[index]
  sumOfTheNumbers = sumOfTheNumbers + next
}
console.log(sumOfTheNumbers)
const average = sumOfTheNumbers / numbers.length
console.log(average)
