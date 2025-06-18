let x = 3 
let y = 7 
let z = y % x 
let s = z * 2 
s /= 3 
let t = s++ 
let u = --t 
let v = u -- 

// console.log("The value of s is:", s)
// console.log("The value of t is:", t)
// console.log("The value of u is:", u)    
// console.log("The value of v is:", v)

//Math functions

// console.log(Math.pow(3, 4))

const randomNum = Math.random() * 20
console.log("A random number between 0 and 20 is:",parseInt(randomNum))
console.log("A random number between 0 and 20 is:",parseFloat(randomNum.toFixed(2)))

// const stack = 'front' + 'end'
// const stack = '20' + '9'

const val = '20'
const stack =( val + 0 ) + 7

console.log("The concatenated string is:", stack)