// 1. Write a function that console.logs 'Hello World'

const saySomething = (word) => {
  console.log(word)
}

saySomething('Hello World')

// 2. Write a function that console.logs whatever you want it to say

saySomething('Whatever I want it to say')

// 3. Write a function that prints every number between 1 and 100

const printHundred = () => {
  let num = 1
  while (num < 101) {
    console.log(num)
    num++
  }
}

printHundred()

// 4. Write a function that takes an array of numbers as a parameter and adds each element of that array to a counter and prints the final value of the counter (i.e. the sum of all of the numbers in the array).

const numCounter = (array) => {
  let counter = 0
  for (let i = 0; i < array.length; i++) {
    counter = counter + array[i]
  }
  console.log(counter)
}

let myArray = [2,3,4,5]

numCounter(myArray)

// 5. Write a function that loops over the following array of SEI students and prints out their name.

const students = [
  'Alice',
  'Andrew',
  'Casey',
  'Damian',
  'Grant',
  'Howie',
  'Wade',
  'Kat',
  'Kimbrad',
  'Kiu',
  'Natasha',
  'Obi',
  'Pedro',
  'Sarah',
  'Scott',
  'Tiffany',
  'Zhe'
]

const printStudents = (array) => {
  for (let i=0; i < array.length; i++) {
    console.log(array[i])
  }
}

printStudents(students)

// 6. Write a function that takes an array of strings as a parameter and returns an array of numbers corresponding to the lengths of each word. e.g. passing this function an array ['i', 'am', 'the', 'best'] should give you back [1, 2, 3, 4] Hint: you can call .length on a string!

const countLetters = (array) => {
  let numArray = []
  for (let i=0; i < array.length; i++) {
    let count = array[i].length
    numArray.push(count)
  }
  console.log(numArray)
}

let words = ['i', 'am', 'the', 'best']

countLetters(words)

// 7. Write a function that takes 3 parameters and returns one number, which is the product of the first two numbers raised to the power of the third. e.g. passing this function 1, 2, 3 should give you back the answer to (1 * 2)^3

const doMath = (num1, num2, power) => {
  let answer = Math.pow((num1*num2), power)
  console.log(answer)
}

doMath(1,2,3)

// BONUS #1. Write a function that prints every EVEN number between 1 and 100

const printEvens = () => {
  for (let i=1; i < 101; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}

printEvens()

// BONUS #2. Recreate the Fibonacci sequence between 1 and 20. If you don't know what that is, DuckDuckGo is your best friend!

let fibonacciTime = (num) => {
  let prev = 0
  let next = 1
  while (next < num) {
    console.log(next)
    next = prev + next
    prev = next - prev
  }
 }

fibonacciTime(20)
