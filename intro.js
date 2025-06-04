let myName = 'Franc Enemuo' 

let age = 77

age = 30

let isMarried 

isMarried = false

isMarried = true


let stateOfOrigin = "Anambra State"

let jobTitle = `Software Engineer`

jobTitle = 'Frontend Developer'

let statement = 'My name is ' + myName + ' I am ' + age

// statement = `My name is ${myName} I am ${age} years old`

statement = `My name is ${myName} I was born in ${new Date().getFullYear() - age} and I am from ${stateOfOrigin}. I work as a ${jobTitle} at Univelcity. I am ${isMarried ? 'married to Nassy' : 'not married'}.`


// console.log(jobTitle)
console.log(statement)
console.log(typeof statement)
console.log(typeof age)
console.log(typeof isMarried)
