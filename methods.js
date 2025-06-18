const letters = "     He says \"A quick Brown Fox\n\tJumps Over The Lazy Dog\""

const rhyme = `
twinkle twinkle little star

        How I wonder what you are 

Up above the world so high

        Like a diamond in the sky
`


// console.log(letters)
// console.log(rhyme)

//string methods
// string length 
const len = letters.length
console.log("The length of the str is:",len)

// string to upper case
const upper = letters.toUpperCase()
console.log("The string in upper case is:", upper)

// string to lower case
const lower = letters.toLowerCase()
console.log("The string in lower case is:", lower)

// console.log(letters[0])
// console.log(letters[letters.length - 1])
//charAt

const char9 = letters.charAt(9)
console.log("The character at index 9 is:", char9)

const char99 = letters.charAt(99)
console.log("The character at index 99 is:", char99)

// indexOf
const indexOfA = letters.indexOf("a", 10)
console.log("The index of 'a' is:", indexOfA)

const positionFox = letters.indexOf('Fox', 30)
console.log("The index of 'Fox' is:", positionFox)

// lastIndexOf
const lastIndexOfA = letters.lastIndexOf("a")   
console.log("The last index of 'a' is:", lastIndexOfA)

console.log(letters.indexOf("a") == letters.lastIndexOf("a")) 
console.log(letters.indexOf("x") == letters.lastIndexOf("x")) 

//match
const vreg = /[aeiou]/gi
const vowels = letters.match(vreg)
console.log("The vowels in the string are:", vowels)

//includes
const includesGoat = letters.includes("Goat")
console.log("Does the string include 'Goat'? :", includesGoat)

const includesFox = letters.includes("Fox")
console.log("Does the string include 'Fox'? :", includesFox)

// startsWith
const startsWithHe = letters.startsWith("He")       
console.log("Does the string start with 'He'? :", startsWithHe ? "Yes" : "No")

const startsWithSheSays = letters.startsWith("She says")
console.log("Does the string start with 'He says'? :", startsWithSheSays ? "Yes" : "No it doesn't")

// concat 
// const concatStr = letters.concat(" ", 'stone')
const concatStr = letters.concat(...[' and stone', ' and ', 'water'])
console.log("The concatenated string is:", concatStr) 

// substring
const subStr = letters.substring(letters.indexOf('B'), letters.indexOf('x')+1) // from index 3 to 10
console.log("The substring Brown Fox is:", subStr)

//slice
const sliceStr = letters.slice(letters.indexOf('B'), letters.indexOf('x')+1) // from index 3 to 10
console.log("The sliced string Brown Fox is:", sliceStr)

// replace
const replacedStr = letters.replace("Brown Fox", "Black Cat")
console.log("The replaced string is:", replacedStr)

const replaceVowel = letters.replace(/[aeiou]/i, '*')
console.log("The string with vowels replaced is:", replaceVowel)

const replaceAllVowel = letters.replaceAll('a', '*')
console.log("The string with vowels replaced is:", replaceAllVowel)

// trim
const trimmedStr = letters.trim()   
console.log("The trimmed string is:", trimmedStr.length)


//padStart and padEnd
const paddedStart = letters.padStart(100, '*')
console.log("The padded string at start is:", paddedStart)

const paddedEnd = paddedStart.padEnd(130, '+')
console.log("The padded string at end is:", paddedEnd)

// split
const splitStr = letters.split(" ")
console.log("The split string is:", splitStr)

const splitStr2 = letters.split(/[\s,]+/).map(item => item + item.length)
console.log("The split string by whitespace or comma is:", splitStr2)
